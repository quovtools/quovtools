"use client";

import { motion } from "framer-motion";
import {
  Mail,
  FileSearch,
  Shield,
  Briefcase,
  type LucideIcon,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const tools = [
  {
    name: "EmailForge",
    desc: "AI-powered email sequences that convert.",
    Icon: Mail,
  },
  {
    name: "PrepSync",
    desc: "Sync and streamline interview prep.",
    Icon: FileSearch,
  },
  {
    name: "LegalGuard",
    desc: "Smart contract review and risk analysis.",
    Icon: Shield,
  },
  {
    name: "TechResume",
    desc: "Resumes built for engineering roles.",
    Icon: Briefcase,
  },
  {
    name: "CaptionAI",
    desc: "Engaging captions for social content.",
    Icon: Instagram,
  },
];

const steps = [
  { label: "Create Account", detail: "Sign up in seconds." },
  { label: "Pick Your Tool", detail: "One dashboard, five products." },
  { label: "Get Results", detail: "AI-assisted workflow from day one." },
];

const faqs = [
  { q: "What tools are included?", a: "EmailForge, PrepSync, LegalGuard, TechResume, and CaptionAI." },
  { q: "Can I use tools individually?", a: "Yes, each tool has its own plan, or you can bundle them." },
  { q: "Is there a free trial?", a: "Yes. Every tool offers a free tier with limited usage." },
  { q: "Do you support teams?", a: "Team and Agency plans are available for professional use." },
];

export default function Home() {
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
            One Account.{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Five Tools.
            </span>{" "}
            Zero Hassle.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-300"
          >
            Quov brings together AI-powered productivity apps built for professionals. No more juggling subscriptions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
            >
              Get Started <ArrowRight size={18} />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-slate-500"
            >
              Explore Products
            </a>
          </motion.div>
        </div>
      </section>

      {/* Product Cards */}
      <section id="products" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">All-in-one professional toolkit</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Every tool shares one account, one billing cycle, and one seamless experience.
          </p>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map(({ name, desc, Icon }: { name: string; desc: string; Icon: LucideIcon }) => (
              <div
                key={name}
                className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-indigo-500/50 hover:bg-slate-900"
              >
                <Icon className="mb-4 h-8 w-8 text-indigo-400" />
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="mt-2 text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">The Quov Bundle</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Get every tool for less than the price of three individual subscriptions.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            See Bundle Pricing <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">How It Works</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map(({ label, detail }) => (
              <div key={label} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white">
                  {steps.findIndex((s) => s.label === label) + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{label}</h3>
                <p className="mt-2 text-slate-400">{detail}</p>
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
