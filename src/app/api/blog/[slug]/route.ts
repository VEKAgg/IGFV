import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Blog from '@/models/Blog';

type Context = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: NextRequest, context: Context) {
  const { slug } = await context.params;

  if (!slug) {
    return NextResponse.json(
      { error: 'Slug is required' },
      { status: 400 }
    );
  }

  await connectToDatabase();

  try {
    const post = await Blog.findOne({
      slug,
      isPublished: true,
    }).exec();

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Increment views without auth check
    post.views += 1;
    await post.save();

    return NextResponse.json(post);
  } catch (error) {
    console.error('Failed to fetch post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, context: Context) {
  const { slug } = await context.params;

  if (!slug) {
    return NextResponse.json(
      { error: 'Slug is required' },
      { status: 400 }
    );
  }

  await connectToDatabase();

  try {
    const body = await request.json();
    const post = await Blog.findOneAndUpdate(
      { slug },
      { $set: body },
      { new: true, runValidators: true }
    ).exec();

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Failed to update post:', error);
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, context: Context) {
  const { slug } = await context.params;

  if (!slug) {
    return NextResponse.json(
      { error: 'Slug is required' },
      { status: 400 }
    );
  }

  await connectToDatabase();

  try {
    const post = await Blog.findOneAndDelete({ slug }).exec();

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Failed to delete post:', error);
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
} 
