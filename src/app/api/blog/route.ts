import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Blog from '@/models/Blog';

interface BlogQuery {
  isPublished: boolean;
  tags?: string;
  $or?: Array<{
    [key: string]: { $regex: string; $options: string };
  }>;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');

    const skip = (page - 1) * limit;

    await connectToDatabase();

    // Build query
    const query: BlogQuery = { isPublished: true };

    if (tag) query.tags = tag;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
      ];
    }

    // Get total count for pagination
    const total = await Blog.countDocuments(query);

    // Get posts
    const posts = await Blog.find(query)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('title slug excerpt featuredImage author tags readingTime views publishedAt');

    return NextResponse.json({
      posts,
      pagination: {
        total,
        page,
        pageSize: limit,
        pageCount: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const post = await Blog.create(body);

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Failed to create post:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
} 