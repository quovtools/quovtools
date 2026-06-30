"use client";

import { motion } from 'framer-motion';
import { CheckCircle, FileText, Zap, BarChart, Shield, PenTool } from 'lucide-react';

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
          Beat the ATS. Land the Interview.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
        >
          TechResume uses AI to optimize your resume for Applicant Tracking Systems and helps you craft the perfect application for tech roles.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Shield className="w-8 h-8" />}
            title="ATS Scanner"
            description="Check your resume against ATS requirements and get detailed compatibility scores."
          />
          <FeatureCard 
            icon={<PenTool className="w-8 h-8" />}
            title="Bullet Point Rewriter"
            description="Transform your experience into powerful, impact-driven bullet points using AI."
          />
          <FeatureCard 
            icon={<Zap className="w-8 h-8" />}
            title="Keyword Optimizer"
            description="Identify and incorporate industry-specific keywords to pass ATS filters."
          />
          <FeatureCard 
            icon={<BarChart className="w-8 h-8" />}
            title="Skills Gap Analyzer"
            description="Compare your skills against job descriptions and identify missing competencies."
          />
          <FeatureCard 
            icon={<FileText className="w-8 h-8" />}
            title="Format Checker"
            description="Ensure your resume follows industry standards and ATS-friendly formatting."
          />
          <FeatureCard 
            icon={<PenTool className="w-8 h-8" />}
            title="Cover Letter Generator"
            description="Create personalized cover letters tailored to each job application."
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
            description="1 optimization"
            features={['1 resume optimization', 'Basic ATS check', 'Email support']}
          />
          <PricingCard 
            title="Job Seeker"
            price="$15"
            period="/mo"
            description="Most Popular"
            featured={true}
            features={['Unlimited optimizations', 'Advanced ATS scanner', 'Cover letter generator', 'Priority support']}
          />
          <PricingCard 
            title="Pro"
            price="$29"
            period="/mo"
            description=""
            features={['Everything in Job Seeker', 'LinkedIn profile optimization', 'Interview prep', 'PDF exports']}
          />
          <PricingCard 
            title="Career Coach"
            price="$49"
            period="/mo"
            description=""
            features={['Everything in Pro', '1:1 coaching sessions', 'Portfolio review', 'Salary negotiation tools']}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <FAQItem 
            question="How does the ATS scanner work?"
            answer="Our ATS scanner analyzes your resume against common applicant tracking systems to identify compatibility issues and provide improvement recommendations."
          />
          <FAQItem 
            question="Can I cancel my subscription anytime?"
            answer="Yes, you can cancel your subscription at any time through your account settings. No questions asked."
          />
          <FAQItem 
            question="What file formats do you support?"
            answer="We support PDF, DOCX, and TXT formats for resume uploads. Optimized resumes can be exported in PDF and DOCX."
          />
          <FAQItem 
            question="How accurate is the resume optimization?"
            answer="Our AI has been trained on thousands of successful tech resumes and consistently achieves 90%+ ATS pass rates for our users."
          />
          <FAQItem 
            question="Do you offer team or enterprise plans?"
            answer="Yes, we offer custom enterprise solutions for career services teams and organizations. Contact us for more details."
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