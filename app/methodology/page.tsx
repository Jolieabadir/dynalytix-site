import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology | Dynalytix",
  description: "Transparency in how we analyze movement — from clinical scoring to machine learning.",
  openGraph: {
    title: "Methodology | Dynalytix",
    description: "Transparency in how we analyze movement — from clinical scoring to machine learning.",
    type: "website",
  },
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-[#FEFBFB] via-white to-[#F8F6FF]">
      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#F8E8E8] to-[#E8D5D5] blob opacity-60 blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-[#E8E0F0] to-[#D4C4E0] blob opacity-50 blur-3xl" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-[#E0EDE8] to-[#C7DDD0] blob opacity-50 blur-3xl" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-gradient-to-r from-[#E8E0F0] to-[#F8E8E8] blob opacity-40 blur-3xl" style={{ animationDelay: '3s' }} />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-6xl mx-auto backdrop-blur-md bg-white/20 rounded-full mt-6 border border-white/20 shadow-lg shadow-black/5">
        <Link href="/" className="flex items-center gap-3 group">
          <svg className="w-5 h-5 text-[#6A6A6A] group-hover:text-[#4A4A4A] transition-colors transform group-hover:-translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[#6A6A6A] group-hover:text-[#4A4A4A] transition-colors font-medium">Home</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="px-5 py-2.5 text-[#6A6A6A] hover:text-[#4A4A4A] transition-colors text-sm font-medium">
            Home
          </Link>
          <Link href="/climbing" className="px-5 py-2.5 text-[#6A6A6A] hover:text-[#7DB9A3] transition-colors text-sm font-medium">
            Climbing
          </Link>
          <Link href="/fms-demo" className="px-5 py-2.5 text-[#6A6A6A] hover:text-[#D4A5A5] transition-colors text-sm font-medium">
            Movement Demo
          </Link>
          <span className="px-5 py-2.5 bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] text-white rounded-full text-sm font-medium shadow-lg shadow-[#B8A9C9]/25">
            Methodology
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pt-20 pb-16 text-center">
        <h1 className="text-6xl md:text-7xl font-black text-transparent bg-gradient-to-r from-[#4A4A4A] via-[#6A5A6A] to-[#4A4A4A] bg-clip-text mb-6 leading-tight">
          Methodology
        </h1>
        <p className="text-xl text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed">
          Transparency in how we analyze movement — from clinical scoring to machine learning.
        </p>
      </section>

      {/* Two Pathway Cards */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Movement Assessment Methodology Card */}
          <Link href="/methodology/movement-assessment" className="group relative block">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/20 to-[#B8A9C9]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/50 hover:shadow-[#D4A5A5]/20 hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] group-hover:bg-white/80 h-full flex flex-col">
              <div className="w-20 h-20 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-[#D4A5A5]/30 group-hover:shadow-[#D4A5A5]/50 transition-shadow duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">
                Movement Assessment Methodology
              </h2>
              <p className="text-[#6A6A6A] leading-relaxed font-medium mb-6 flex-1">
                How our clinical deep squat assessment works: rule-based scoring, research-backed thresholds, and dual-angle analysis.
              </p>
              <div className="flex items-center gap-2 text-[#D4A5A5] font-semibold">
                <span>Read more</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Climbing Data Science Card */}
          <Link href="/methodology/climbing" className="group relative block">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7DB9A3]/20 to-[#B8A9C9]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/50 hover:shadow-[#7DB9A3]/20 hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] group-hover:bg-white/80 h-full flex flex-col">
              <div className="w-20 h-20 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-[#7DB9A3]/30 group-hover:shadow-[#7DB9A3]/50 transition-shadow duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">
                Climbing Data Science
              </h2>
              <p className="text-[#6A6A6A] leading-relaxed font-medium mb-6 flex-1">
                Why we collect climbing data, how we use it, and the machine learning pipeline turning your movement into injury prevention.
              </p>
              <div className="flex items-center gap-2 text-[#7DB9A3] font-semibold">
                <span>Read more</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl mx-auto px-8 py-16">
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent rounded-3xl backdrop-blur-sm" />
        <div className="relative text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
            dynalytix
          </h3>
          <p className="text-[#8A8A8A] mb-6">Movement is data. Patterns are prevention.</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6">
            <Link href="/" className="text-[#8A8A8A] hover:text-[#D4A5A5] transition-colors duration-300">Home</Link>
            <Link href="/climbing" className="text-[#8A8A8A] hover:text-[#7DB9A3] transition-colors duration-300">Climbing</Link>
            <Link href="/fms-demo" className="text-[#8A8A8A] hover:text-[#D4A5A5] transition-colors duration-300">Movement Demo</Link>
            <Link href="/methodology" className="text-[#8A8A8A] hover:text-[#B8A9C9] transition-colors duration-300">Methodology</Link>
            <Link href="/privacy" className="text-[#8A8A8A] hover:text-[#D4A5A5] transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="text-[#8A8A8A] hover:text-[#B8A9C9] transition-colors duration-300">Terms of Service</Link>
            <a href="mailto:hello@dynalytix.com" className="text-[#8A8A8A] hover:text-[#7DB9A3] transition-colors duration-300">Contact</a>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent mb-4" />
          <p className="text-sm text-[#AFAFAF]">© {new Date().getFullYear()} Dynalytix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
