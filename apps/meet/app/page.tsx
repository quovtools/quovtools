"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Users,
  FileText,
  MessageSquare,
  HelpCircle,
  ClipboardCheck,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Auto-Prep",
      description: "Automatically generate meeting briefs from calendar invites and past interactions.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Attendee Intel",
      description: "Research background, role, and recent activities for every attendee.",
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "Meeting Context",
      description: "Summarize related docs, tickets, and past meeting notes in one place.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: "Talking Points",
      description: "Curated key messages and value props tailored to each stakeholder.",
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-blue-500" />,
      title: "Question Suggester",
      description: "Smart questions to uncover needs, objections, and decision criteria.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-blue-500" />,
      title: "Post-Meeting Summary",
      description: "Auto-generated recap with action items, owners, and next steps.",
    },
  ];

  const pricing = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["5 docs/mo", "Basic prep summaries", "1 user"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$15",
      period: "/mo",
      features: ["Unlimited docs", "Advanced AI analysis", "Calendar integrations", "Priority support"],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Team",
      price: "$49",
      period: "/mo",
      features: ["Everything in Pro", "Team workspaces", "Shared prep templates", "Analytics dashboard"],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/mo",
      features: ["Custom AI models", "SSO & audit logs", "Dedicated success manager", "SLA guarantee"],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      q: "What data sources do you integrate with?",
      a: "PrepSync connects to Google Calendar, Outlook, Salesforce, HubSpot, LinkedIn, and your internal knowledge base.",
    },
    {
      q: "Is my meeting data secure?",
      a: "Yes. We use AES-256 encryption at rest, TLS in transit, and never share your data with third parties.",
    },
    {
      q: "Can I customize the prep templates?",
      a: "Team and Enterprise plans include custom template builders, brand styling, and conditional sections.",
    },
    {
      q: "Do you support video conferencing platforms?",
      a: "We integrate with Zoom, Google Meet, and Microsoft Teams to pull transcripts and attendee lists automatically.",
    },
    {
      q: "How accurate is the AI analysis?",
      a: "Our models are trained on millions of business meetings and achieve 92% attendee-intent accuracy in benchmarks.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Be Prepared for Every Meeting
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto"
        >
          AI-powered preparation summaries, attendee intelligence, and talking points delivered before you join.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center gap-2">
            Start Free <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-3 border border-slate-700 hover:bg-slate-900 rounded-lg font-semibold">
            View Demo
          </button>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Everything you need to prep smarter</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Simple, transparent pricing</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`p-6 rounded-2xl border ${
                plan.highlighted
                  ? "bg-blue-600 border-blue-500 scale-105"
                  : "bg-slate-900/50 border-slate-800"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-blue-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 rounded-lg font-semibold ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-slate-100"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-900/50"
              >
                <span className="font-semibold">{faq.q}</span>
                <span className="text-blue-400">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 text-slate-400">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
