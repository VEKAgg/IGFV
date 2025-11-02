import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: {
    name: string;
    image?: string;
    bio?: string;
  };
  tags: string[];
  views: number;
  readingTime: number;
  isPublished: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
  };
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Please provide a slug'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: [true, 'Please provide an excerpt'],
      maxlength: [200, 'Excerpt cannot be more than 200 characters'],
    },
    content: {
      type: String,
      required: [true, 'Please provide content'],
    },
    featuredImage: {
      type: String,
    },
    author: {
      name: {
        type: String,
        required: [true, 'Please provide an author name'],
      },
      image: String,
      bio: String,
    },
    tags: [{
      type: String,
      trim: true,
      lowercase: true,
    }],
    views: {
      type: Number,
      default: 0,
    },
    readingTime: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    seo: {
      title: String,
      description: String,
      keywords: [String],
      ogImage: String,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
BlogSchema.index({ tags: 1 });
BlogSchema.index({ createdAt: -1 });
BlogSchema.index({ publishedAt: -1 });
BlogSchema.index({ isPublished: 1 });

// Pre-save hook to calculate reading time
BlogSchema.pre('save', function(next) {
  const wordsPerMinute = 200;
  const wordCount = this.content.trim().split(/\s+/).length;
  this.readingTime = Math.ceil(wordCount / wordsPerMinute);
  next();
});

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema); 