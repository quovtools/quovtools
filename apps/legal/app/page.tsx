"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Languages,
  AlertTriangle,
  GitCompare,
  MessageSquare,
  FolderLock,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      title: "Clause Risk Scanner",
      description: "Instantly score every clause by legal risk using trained model patterns.",
    },
    {
      icon: <Languages className="w-8 h-8 text-emerald-500" />,
      title: "Plain English Translation",
      description: "Rewrite dense legalese into concise, actionable summaries for stakeholders.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-emerald-500" />,
      title: "Red Flag Detector",
      description: "Surface hidden liabilities, auto-renewals, and indemnity gaps before you sign.",
    },
    {
      icon: <GitCompare className="w-8 h-8 text-emerald-500" />,
      title: "Comparison Engine",
      description: "Diff versions, track deviations, and understand exactly what changed.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-emerald-500" />,
      title: "Negotiation Suggestions",
      description: "Get suggested counter-clauses and negotiation tactics based on your goals.",
    },
    {
      icon: <FolderLock className="w-8 h-8 text-emerald-500" />,
      title: "Document Vault",
      description: "Secure, searchable archive of all executed agreements with version history.",
    },
  ];

  const pricing = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["2 docs/mo", "Basic risk scoring", "1 user"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Starter",
      price: "$29",
      period: "/mo",
      features: ["25 docs/mo", "Full clause analysis", "Email support"],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Pro",
      price: "$79",
      period: "/mo",
      features: ["Unlimited docs", "Comparison engine", "Team collaboration", "Priority support"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Business",
      price: "$199",
      period: "/mo",
      features: ["Custom AI training", "SSO & audit logs", "Dedicated success manager", "SLA guarantee"],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      q: "What file formats are supported?",
      a: "We accept PDF, DOCX, TXT, and HTML. Scanned PDFs run through our OCR pipeline automatically.",
    },
    {
      q: "Is my contract data confidential?",
      a: "Yes. All documents are encrypted at rest and in transit. We are SOC 2 Type II compliant.",
    },
    {
      q: "Can I compare draft versions?",
      a: "The Comparison Engine lets you upload multiple versions and highlights deviations with risk context.",
    },
    {
      q: "Do you support custom contract types?",
      a: "Pro and Business plans include custom clause taxonomy and model fine-tuning for your domain.",
    },
    {
      q: "How accurate is the risk scoring?",
      a: "Our model is trained on 500k+ reviewed agreements and achieves 94% precision in benchmark tests.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
        >
          Contracts That Don't Bite.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto"
        >
          AI-powered contract analysis that highlights red flags, simplifies legalese, and accelerates negotiations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold flex items-center gap-2">
            Analyze a Contract <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-3 border border-slate-700 hover:bg-slate-900 rounded-lg font-semibold">
            Book a Demo
          </button>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Built for modern legal teams</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition-colors"
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
                  ? "bg-emerald-600 border-emerald-500 scale-105"
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
                    <Check className="w-4 h-4 text-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 rounded-lg font-semibold ${
                  plan.highlighted
                    ? "bg-white text-emerald-600 hover:bg-slate-100"
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
                <span className="text-emerald-400">{openFaq === i ? "−" : "+"}</span>
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
