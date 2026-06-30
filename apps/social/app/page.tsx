"use client";

import { motion } from 'framer-motion';
import { CheckCircle, Share2, Image, Palette, Hash, Calendar, Brain } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
        >
          Captions That Stop the Scroll.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
        >
          CaptionAI generates engaging, platform-optimized social media captions that drive engagement and grow your audience.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Share2 className="w-8 h-8" />}
            title="Multi-Platform Generator"
            description="Create captions optimized for Instagram, Twitter, LinkedIn, Facebook, and TikTok."
          />
          <FeatureCard 
            icon={<Image className="w-8 h-8" />}
            title="Image-to-Caption"
            description="Upload an image and let AI generate relevant, engaging captions automatically."
          />
          <FeatureCard 
            icon={<Palette className="w-8 h-8" />}
            title="Tone Variations"
            description="Choose from professional, casual, witty, inspiring, or create your own brand voice."
          />
          <FeatureCard 
            icon={<Hash className="w-8 h-8" />}
            title="Hashtag Optimizer"
            description="Generate trending and niche hashtags to maximize your reach and engagement."
          />
          <FeatureCard 
            icon={<Calendar className="w-8 h-8" />}
            title="Content Calendar"
            description="Plan and schedule your caption content with our integrated calendar tool."
          />
          <FeatureCard 
            icon={<Brain className="w-8 h-8" />}
            title="Brand Voice Training"
            description="Train the AI on your brand's unique voice and tone for consistent messaging."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Pricing</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PricingCard 
            title="Free"
            price="$0"
            period=""
            description="10 captions/mo"
            features={['10 captions per month', 'Basic platform support', 'Email support']}
          />
          <PricingCard 
            title="Creator"
            price="$12"
            period="/mo"
            description="Most Popular"
            featured={true}
            features={['Unlimited captions', 'All platforms', 'Image-to-caption', 'Hashtag optimizer', 'Priority support']}
          />
          <PricingCard 
            title="Pro"
            price="$29"
            period="/mo"
            description=""
            features={['Everything in Creator', 'Content calendar', 'Team collaboration', 'Analytics dashboard', 'API access']}
          />
          <PricingCard 
            title="Agency"
            price="$79"
            period="/mo"
            description=""
            features={['Everything in Pro', 'Brand voice training', 'Client accounts', 'White-label reports', 'Dedicated manager']}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <FAQItem 
            question="Which social platforms are supported?"
            answer="We support all major platforms including Instagram, Twitter, LinkedIn, Facebook, TikTok, and Pinterest with platform-specific optimizations."
          />
          <FAQItem 
            question="How does the image-to-caption feature work?"
            answer="Simply upload an image and our AI analyzes the visual content to generate relevant, engaging caption suggestions."
          />
          <FAQItem 
            question="Can I customize the tone of captions?"
            answer="Yes, you can choose from multiple tones or train the AI on your brand voice for consistent messaging across all content."
          />
          <FAQItem 
            question="Is there an API available?"
            answer="The API is available in Pro and Agency plans, allowing you to integrate caption generation into your own applications."
          />
          <FAQItem 
            question="Do you offer team or enterprise plans?"
            answer="Yes, our Agency plan is designed for teams with additional features like client accounts and white-label reports."
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="text-slate-700 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </motion.div>
  );
}

function PricingCard({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  featured = false 
}: { 
  title: string, 
  price: string, 
  period: string, 
  description: string, 
  features: string[], 
  featured?: boolean 
}) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-lg border-2 ${featured ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white'}`}
    >
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      {description && <span className="text-blue-600 text-sm font-medium mb-2 block">{description}</span>}
      <div className="text-3xl font-bold text-slate-900 mb-4">{price}<span className="text-sm">{period}</span></div>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-slate-600">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{question}</h3>
      <p className="text-slate-600">{answer}</p>
    </div>
  );
}