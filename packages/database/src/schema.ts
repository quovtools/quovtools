// User schema
export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at?: string;
}

// Profile schema
export interface Profile {
  id: string;
  user_id: string;
  company_name?: string;
  bio?: string;
  website?: string;
  updated_at?: string;
}

// Sequence schema - core product for sequence automation
export interface Sequence {
  id: string;
  user_id: string;
  name: string;
  product_description: string;
  target_audience: string;
  tone: string;
  created_at: string;
  updated_at?: string;
}

// Email schema - for email automation product
export interface Email {
  id: string;
  user_id: string;
  subject: string;
  body: string;
  sequence_id?: string;
  scheduled_at?: string;
  sent_at?: string;
  status: "draft" | "scheduled" | "sent" | "failed";
  created_at: string;
  updated_at?: string;
}

// Template schema - for template library product
export interface Template {
  id: string;
  user_id: string;
  name: string;
  type: "email" | "document" | "post";
  content: string;
  is_public: boolean;
  created_at: string;
  updated_at?: string;
}

// Resume schema - for resume builder product
export interface Resume {
  id: string;
  user_id: string;
  title: string;
  content: Record<string, unknown>;
  created_at: string;
  updated_at?: string;
}

// Post schema - for social media post generator product
export interface Post {
  id: string;
  user_id: string;
  content: string;
  platform: "linkedin" | "twitter" | "facebook" | "instagram";
  scheduled_at?: string;
  posted_at?: string;
  status: "draft" | "scheduled" | "posted" | "failed";
  created_at: string;
  updated_at?: string;
}

// Document schema - for document generation product
export interface Document {
  id: string;
  user_id: string;
  title: string;
  type: "proposal" | "contract" | "report" | "letter";
  content: string;
  created_at: string;
  updated_at?: string;
}

// Meeting schema - for meeting scheduler product
export interface Meeting {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  start_time: string;
  end_time: string;
  attendees: string[];
  meeting_link?: string;
  status: "scheduled" | "completed" | "cancelled";
  created_at: string;
  updated_at?: string;
}

// Product enum for multi-product support
export type ProductType = "sequences" | "emails" | "templates" | "resumes" | "posts" | "documents" | "meetings";

// Base entity type
export interface BaseEntity {
  id: string;
  user_id: string;
  created_at: string;
  updated_at?: string;
}