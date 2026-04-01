import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movement Assessment Demo — Dynalytix",
  description: "Computer vision-powered functional movement screening with automated pose extraction, scoring, and clinical report generation. Try the deep squat assessment tool.",
  openGraph: {
    title: "Movement Assessment Demo — Dynalytix",
    description: "Computer vision-powered functional movement screening with automated pose extraction and scoring.",
    type: "website",
  },
};

export default function FMSDemoPage() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-[#FEFBFB] via-white to-[#F8F6FF]">
      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#F8E8E8] to-[#E8D5D5] blob opacity-60 blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-[#E8E0F0] to-[#D4C4E0] blob opacity-50 blur-3xl" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-[#E0EDE8] to-[#C7DDD0] blob opacity-50 blur-3xl" style={{ animationDelay: '2s' }} />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-6xl mx-auto backdrop-blur-md bg-white/20 rounded-full mt-6 border border-white/20 shadow-lg shadow-black/5">
        <Link href="/" className="flex items-center gap-3 group">
          <svg className="w-5 h-5 text-[#6A6A6A] group-hover:text-[#D4A5A5] transition-colors transform group-hover:-translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[#6A6A6A] group-hover:text-[#D4A5A5] transition-colors font-medium">Home</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/climbing" className="px-5 py-2.5 text-[#6A6A6A] hover:text-[#7DB9A3] transition-colors text-sm font-medium">
            Climbing
          </Link>
          <span className="px-5 py-2.5 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] text-white rounded-full text-sm font-medium shadow-lg shadow-[#D4A5A5]/25">
            Movement Demo
          </span>
          <Link href="/methodology" className="px-5 py-2.5 text-[#6A6A6A] hover:text-[#B8A9C9] transition-colors text-sm font-medium">
            Methodology
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pt-16 pb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-[#4A4A4A] via-[#6A5A6A] to-[#4A4A4A] bg-clip-text mb-4 leading-tight">
          Deep Squat Movement Assessment
        </h1>
        <p className="text-xl text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed">
          Computer vision–powered functional movement screening with automated pose extraction,
          scoring, and clinical report generation.
        </p>
      </section>

      {/* Try It Card */}
      <section className="relative z-10 max-w-2xl mx-auto px-8 py-6">
        <a
          href="https://analysis.dynalytix.net"
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-gradient-to-r from-[#D4A5A5]/10 via-white/80 to-[#B8A9C9]/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl hover:shadow-[#D4A5A5]/20 transition-all duration-500 hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">
                  Test it out for yourself
                </h3>
                <p className="text-sm text-[#8A8A8A]">Try the live movement assessment tool</p>
              </div>
            </div>
            <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md group-hover:bg-gradient-to-r group-hover:from-[#D4A5A5] group-hover:to-[#B8A9C9] transition-all duration-300">
              <svg className="w-5 h-5 text-[#6A6A6A] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </a>
      </section>

      {/* Demo Video */}
      <section className="relative z-10 max-w-3xl mx-auto px-8 py-12">
        <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden p-4 md:p-6">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full rounded-2xl shadow-lg"
            style={{ aspectRatio: "1/1" }}
          >
            <source src="/fms-demo/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Methodology Link */}
        <div className="mt-8 text-center">
          <Link
            href="/methodology"
            className="group inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#D4A5A5]/10 via-white/80 to-[#B8A9C9]/10 backdrop-blur-lg rounded-2xl border border-white/50 hover:shadow-xl hover:shadow-[#D4A5A5]/10 transition-all duration-500 hover:scale-[1.02]"
          >
            <span className="text-[#6A6A6A] group-hover:text-[#4A4A4A] transition-colors">
              Want to know how it works under the hood?
            </span>
            <span className="font-semibold bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] bg-clip-text text-transparent group-hover:from-[#C49494] group-hover:to-[#A598B8]">
              Read our methodology
            </span>
            <svg className="w-5 h-5 text-[#D4A5A5] group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">
          What It Does
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-[#D4A5A5]/20 transition-all duration-500 hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-r from-[#D4A5A5]/20 to-[#C49494]/20 rounded-2xl flex items-center justify-center mb-5 group-hover:from-[#D4A5A5] group-hover:to-[#C49494] transition-all duration-300">
              <span className="text-xl group-hover:text-white">📹</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#4A4A4A]">Pose Extraction</h3>
            <p className="text-[#6A6A6A] text-sm leading-relaxed">
              Automatic skeleton overlay with frame-by-frame joint tracking from uploaded video.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-[#B8A9C9]/20 transition-all duration-500 hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-r from-[#B8A9C9]/20 to-[#A598B8]/20 rounded-2xl flex items-center justify-center mb-5 group-hover:from-[#B8A9C9] group-hover:to-[#A598B8] transition-all duration-300">
              <span className="text-xl group-hover:text-white">📊</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#4A4A4A]">Automated Movement Scoring</h3>
            <p className="text-[#6A6A6A] text-sm leading-relaxed">
              Score 0–3 with Quick Mode or detailed criteria. Bilateral difference and asymmetry detection built in.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-[#7DB9A3]/20 transition-all duration-500 hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-r from-[#7DB9A3]/20 to-[#6AA892]/20 rounded-2xl flex items-center justify-center mb-5 group-hover:from-[#7DB9A3] group-hover:to-[#6AA892] transition-all duration-300">
              <span className="text-xl group-hover:text-white">📋</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#4A4A4A]">Clinical Reports</h3>
            <p className="text-[#6A6A6A] text-sm leading-relaxed">
              Patient &amp; provider reports with assessment details, focus areas, and suggested CPT codes.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pb-8">
        <div className="bg-gradient-to-r from-[#7DB9A3]/10 to-[#6AA892]/10 rounded-2xl p-6 border border-[#7DB9A3]/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-sm text-[#4A4A4A]">
              <p className="font-semibold mb-1">For Clinicians</p>
              <p className="text-[#6A6A6A]">
                Our provider approval workflow is designed to comply with FDA Clinical Decision Support guidelines — the tool surfaces data, the clinician makes the decision. Video never leaves the browser. We&apos;re partnered with MedStatix for HIPAA-compliant clinical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-16 text-center">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/60">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
            Interested in the Movement Assessment Tool?
          </h2>
          <p className="text-[#6A6A6A] mb-8 max-w-lg mx-auto">
            We&apos;re building the future of movement assessment. Get in touch to learn more or request early access.
          </p>
          <Link
            href="/#signup"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] text-white rounded-full hover:from-[#C49494] hover:to-[#A598B8] transition-all duration-500 hover:scale-110 text-lg font-semibold shadow-2xl shadow-[#D4A5A5]/30 hover:shadow-[#D4A5A5]/50"
          >
            <span>Request Access</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
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
