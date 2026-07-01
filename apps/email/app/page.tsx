"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Wand2,
  Palette,
  LineChart,
  MousePointer,
  Download,
  FlaskConical,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type Plan = {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    features: ["3 sequences/month", "Basic templates", "Standard support"],
    cta: "Start Free",
  },
  {
    name: "Starter",
    price: "$19",
    period: "/mo",
    features: ["25 sequences/month", "Tone customization", "A/B test suggestions", "Priority support"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    features: ["Unlimited sequences", "Advanced analytics", "Custom integrations", "Dedicated support"],
    cta: "Go Pro",
  },
  {
    name: "Agency",
    price: "$99",
    period: "/mo",
    features: ["Unlimited everything", "White-label exports", "Team seats", "SLA & phone support"],
    cta: "Contact Sales",
  },
];

const features = [
  { title: "Sequence Generator", Icon: Wand2, desc: "Full email sequences from a single product URL." },
  { title: "Tone Customizer", Icon: Palette, desc: "Match brand voice across every message." },
  { title: "Subject Line Optimizer", Icon: LineChart, desc: "AI-ranked subject lines by predicted open rate." },
  { title: "CTA Designer", Icon: MousePointer, desc: "High-converting call-to-action buttons and copy." },
  { title: "Export Engine", Icon: Download, desc: "Export to CSV, JSON, or direct ESP integrations." },
  { title: "A/B Test Suggestions", Icon: FlaskConical, desc: "Data-driven variants for every send." },
];

const faqs = [
  { q: "How does the AI generate sequences?", a: "We analyze the product URL, description, and your selected tone to build a complete sequence." },
  { q: "Can I edit generated emails?", a: "Yes. Every generated line is fully editable before export." },
  { q: "What integrations are supported?", a: "Currently Mailchimp, ConvertKit, and HubSpot, with more coming soon." },
  { q: "Is there a free trial?", a: "Yes. The Free plan lets you generate up to 3 sequences per month." },
  { q: "Do you offer refunds?", a: "We offer a 14-day money-back guarantee on all paid plans." },
];

export default function Home() {
  const [tone, setTone] = useState("professional");
  const [description, setDescription] = useState("");
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    // In a real app, call API route here.
    await new Promise((r) => setTimeout(r, 800));
    setGenerated(true);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white antialiased">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-slate-950" />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold tracking-tight md:text-7xl"
          >
            AI Email Sequences That{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Actually Convert
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-300"
          >
            Drop in your product URL, pick a tone, and get a full email sequence in seconds.
          </motion.p>
        </div>
      </section>

      {/* Live Demo */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Product URL</label>
              <input
                type="url"
                placeholder="https://example.com/product"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Description</label>
              <textarea
                placeholder="Describe the product and target audience..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="h-[46px] w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-slate-300">Tone</label>
            <div className="flex flex-wrap gap-3">
              {["professional", "casual", "bold", "minimal"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`rounded-full border px-4 py-2 text-sm capitalize transition ${
                    tone === t
                      ? "border-indigo-500 bg-indigo-600 text-white"
                      : "border-slate-700 text-slate-300 hover:border-slate-500"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate"} <Sparkles size={18} />
          </button>

          <AnimatePresence>
            {generated && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8 rounded-2xl border border-indigo-500/30 bg-slate-950 p-6"
              >
                <div className="flex items-center gap-2 text-indigo-400">
                  <CheckCircle2 size={20} />
                  <span className="font-semibold">Sequence Generated</span>
                </div>
                <p className="mt-2 text-slate-300">
                  Welcome sequence for your product. Subject: "Welcome to [Product] — here's what's next."
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {["Day 0", "Day 2", "Day 5"].map((day) => (
                    <div key={day} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <p className="text-xs font-medium text-indigo-400">{day}</p>
                      <p className="mt-1 text-sm font-semibold">Introduction Email</p>
                      <p className="mt-1 text-xs text-slate-400">Predicted open: 24.5%</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Built for conversion</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Every feature is designed to move your prospect from inbox to action.
          </p>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-indigo-500/50 hover:bg-slate-900"
              >
                <Icon className="mb-4 h-8 w-8 text-indigo-400" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Simple, transparent pricing</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border bg-slate-900/50 p-8 ${
                  plan.popular ? "border-indigo-500" : "border-slate-800"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-slate-400">{plan.period}</span>}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-indigo-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-xl py-3 font-semibold transition ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-500"
                      : "border border-slate-700 text-white hover:border-slate-500"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-12 space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {q}
                  <ChevronDown className="h-5 w-5 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-slate-300">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to write emails that sell?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Start for free, upgrade when you are ready. No credit card required to begin.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Start Creating <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Quov. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
