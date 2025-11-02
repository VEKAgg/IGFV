import { useQuery } from '@tanstack/react-query';
import { IBlog } from '@/models/Blog';

interface PaginationData {
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

interface BlogResponse {
  posts: IBlog[];
  pagination: PaginationData;
}

interface UseBlogPostsParams {
  page?: number;
  limit?: number;
  tag?: string;
  search?: string;
}

async function fetchBlogPosts({ page = 1, limit = 10, tag, search }: UseBlogPostsParams = {}) {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (tag) params.append('tag', tag);
  if (search) params.append('search', search);

  const response = await fetch(`/api/blog?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return response.json();
}

async function fetchBlogPost(slug: string) {
  const response = await fetch(`/api/blog/${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog post');
  }
  return response.json();
}

export function useBlogPosts(params: UseBlogPostsParams = {}) {
  return useQuery<BlogResponse>({
    queryKey: ['blogs', params],
    queryFn: () => fetchBlogPosts(params),
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blog', slug],
    queryFn: () => fetchBlogPost(slug),
  });
} 