import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Science | Dynalytix",
  description: "Why we collect climbing data, how we use it, and the machine learning pipeline turning your movement into injury prevention. Learn about supervised and unsupervised learning for personalized movement analysis.",
  openGraph: {
    title: "Data Science | Dynalytix",
    description: "Why we collect climbing data, how we use it, and the machine learning pipeline turning your movement into injury prevention.",
    type: "website",
  },
};

export default function DataSciencePage() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-[#FEFBFB] via-white to-[#F8F6FF]">
      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#E0EDE8] to-[#C7DDD0] blob opacity-60 blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-[#E8E0F0] to-[#D4C4E0] blob opacity-50 blur-3xl" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-[#E0EDE8] to-[#C7DDD0] blob opacity-50 blur-3xl" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-gradient-to-r from-[#E8E0F0] to-[#E0EDE8] blob opacity-40 blur-3xl" style={{ animationDelay: '3s' }} />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-6xl mx-auto backdrop-blur-md bg-white/20 rounded-full mt-6 border border-white/20 shadow-lg shadow-black/5">
        <Link href="/climbing" className="flex items-center gap-3 group">
          <svg className="w-5 h-5 text-[#6A6A6A] group-hover:text-[#7DB9A3] transition-colors transform group-hover:-translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[#6A6A6A] group-hover:text-[#7DB9A3] transition-colors font-medium">Back to Climbing</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/climbing" className="px-5 py-2.5 text-[#6A6A6A] hover:text-[#7DB9A3] transition-colors text-sm font-medium">
            Climbing
          </Link>
          <Link href="/fms-demo" className="px-5 py-2.5 text-[#6A6A6A] hover:text-[#D4A5A5] transition-colors text-sm font-medium">
            Movement Demo
          </Link>
          <span className="px-5 py-2.5 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] text-white rounded-full text-sm font-medium shadow-lg shadow-[#7DB9A3]/25">
            Data Science
          </span>
          <Link href="/methodology" className="px-5 py-2.5 text-[#6A6A6A] hover:text-[#B8A9C9] transition-colors text-sm font-medium">
            Methodology
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pt-16 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-[#4A4A4A] via-[#6A5A6A] to-[#4A4A4A] bg-clip-text mb-4 leading-tight">
          The Data Behind Better Movement
        </h1>
        <p className="text-xl text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed">
          Why we collect climbing data, how we use it, and the machine learning pipeline turning your movement into injury prevention.
        </p>
      </section>

      {/* Section 1: Why Data Collection Matters */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-6">
            Why Data Collection Matters
          </h2>

          <div className="space-y-6 text-[#6A6A6A] leading-relaxed text-lg">
            <p>
              Most climbing injuries come from accumulated stress and poor movement patterns that go undetected until pain shows up. The problem is that there&apos;s almost no large-scale biomechanical data on climbers. Sports like running, swimming, and football have decades of motion capture research. Climbing has almost none — and what exists comes from small lab studies with expensive equipment.
            </p>

            <p>
              <span className="font-semibold text-[#4A4A4A]">Dynalytix is building the first open dataset of climbing biomechanics.</span> Every video a contributor uploads generates 40+ data points per frame — joint angles, speeds, velocities, body positions — all labeled with move types, sensation data, and quality ratings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-gradient-to-br from-[#7DB9A3]/10 to-[#6AA892]/5 rounded-2xl p-6 border border-[#7DB9A3]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#4A4A4A]">Immediately</h3>
              </div>
              <p className="text-[#6A6A6A]">
                Get a detailed breakdown of your own movement patterns — where you&apos;re compensating, where you&apos;re strong, where you&apos;re at risk.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#B8A9C9]/10 to-[#A598B8]/5 rounded-2xl p-6 border border-[#B8A9C9]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#4A4A4A]">Over Time</h3>
              </div>
              <p className="text-[#6A6A6A]">
                Trains machine learning models that can detect dangerous patterns before they lead to injury — not just for you, but for all climbers.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#7DB9A3]/10 to-[#6AA892]/10 rounded-2xl p-6 border border-[#7DB9A3]/20">
            <p className="text-[#4A4A4A] text-center font-medium">
              The more data we collect, the smarter the system gets. Every labeled video makes the models more accurate for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: What We Collect */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-6">
            What We Collect
          </h2>
          <p className="text-[#6A6A6A] leading-relaxed mb-10 text-lg">
            Every video processed through Dynalytix generates a rich biomechanical dataset. Here&apos;s exactly what we extract — and what you label.
          </p>

          {/* Pose Data */}
          <h3 className="text-2xl font-bold text-[#4A4A4A] mb-6">Pose Data <span className="text-base font-normal text-[#6A6A6A]">(Automatic — Extracted by Computer Vision)</span></h3>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">12</span>
                </div>
                <h4 className="font-bold text-[#4A4A4A]">Joint Angles per Frame</h4>
              </div>
              <p className="text-sm text-[#6A6A6A]">Left/right elbow, shoulder, hip, knee, ankle, plus upper and lower back angles. Measured in degrees, calculated from 3-point landmark positions.</p>
            </div>

            <div className="bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">15</span>
                </div>
                <h4 className="font-bold text-[#4A4A4A]">Landmark Positions</h4>
              </div>
              <p className="text-sm text-[#6A6A6A]">Full body tracking (nose, shoulders, elbows, wrists, hips, knees, ankles) with x, y, z coordinates and visibility confidence.</p>
            </div>

            <div className="bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#4A4A4A]">Speed & Velocity</h4>
              </div>
              <p className="text-sm text-[#6A6A6A]">Center of mass speed, individual landmark speeds, and wrist/hip velocity vectors (x, y components). Captures acceleration patterns across movement phases.</p>
            </div>

            <div className="bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">40+</span>
                </div>
                <h4 className="font-bold text-[#4A4A4A]">Data Points per Frame</h4>
              </div>
              <p className="text-sm text-[#6A6A6A]">All of the above, exported as CSV with frame number and timestamp.</p>
            </div>
          </div>

          {/* Labels */}
          <h3 className="text-2xl font-bold text-[#4A4A4A] mb-6">Labels <span className="text-base font-normal text-[#6A6A6A]">(You Provide)</span></h3>

          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-4 bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-[#4A4A4A] mb-1">Move Type</h4>
                <p className="text-sm text-[#6A6A6A]">12 supported: Static, Deadpoint, Dyno, Lock-off, Gaston, Undercling, Drop Knee, Heel Hook, Toe Hook, Flag, Mantle, Campus</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-[#4A4A4A] mb-1">Quality Rating</h4>
                <p className="text-sm text-[#6A6A6A]">1–5 form quality score per move</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-[#4A4A4A] mb-1">Effort Level</h4>
                <p className="text-sm text-[#6A6A6A]">0–10 perceived effort</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">4</span>
              </div>
              <div>
                <h4 className="font-bold text-[#4A4A4A] mb-1">Sensation Tags</h4>
                <p className="text-sm text-[#6A6A6A]">9 types (Sharp Pain, Dull Pain, Pop, Unstable, Stretch/Awkward, Strong/Controlled, Weak, Pumped, Fatigue) with body part location and intensity</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">5</span>
              </div>
              <div>
                <h4 className="font-bold text-[#4A4A4A] mb-1">Move Boundaries</h4>
                <p className="text-sm text-[#6A6A6A]">Frame-accurate start/end markers for each move</p>
              </div>
            </div>
          </div>

          {/* Privacy callout */}
          <div className="bg-gradient-to-r from-[#7DB9A3]/10 to-[#6AA892]/10 rounded-2xl p-6 border border-[#7DB9A3]/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-[#4A4A4A]">
                <span className="font-semibold">Video never leaves your browser.</span> MediaPipe JS runs pose extraction entirely client-side — we only store the extracted pose data and your labels, never the video itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The ML Pipeline */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-6">
            From Your Video to Personalized Insights
          </h2>
          <p className="text-[#6A6A6A] leading-relaxed mb-10 text-lg">
            Dynalytix uses a two-stage model architecture that combines supervised learning on labeled data with unsupervised pattern detection — delivering value from day one while getting smarter with every contribution.
          </p>

          {/* Two Stage Pipeline Visualization */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Stage 1 */}
            <div className="bg-gradient-to-br from-[#7DB9A3]/10 to-[#6AA892]/5 rounded-2xl p-6 border border-[#7DB9A3]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#4A4A4A]">Base Model</h3>
                  <p className="text-sm text-[#6A6A6A]">Supervised Learning</p>
                </div>
              </div>
              <p className="text-[#6A6A6A] text-sm mb-4">
                The base model trains on the collective dataset of all contributors. Using labeled data (move types, quality ratings, sensation tags), it learns:
              </p>
              <ul className="space-y-2 text-sm text-[#6A6A6A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#7DB9A3] mt-1">•</span>
                  What &quot;good form&quot; looks like across different move types
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7DB9A3] mt-1">•</span>
                  Which joint angle patterns correlate with reported pain
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7DB9A3] mt-1">•</span>
                  How high-quality (4-5) differs from low-quality (1-2) execution
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7DB9A3] mt-1">•</span>
                  Common compensation patterns that precede injury
                </li>
              </ul>
            </div>

            {/* Stage 2 */}
            <div className="bg-gradient-to-br from-[#B8A9C9]/10 to-[#A598B8]/5 rounded-2xl p-6 border border-[#B8A9C9]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#4A4A4A]">Personalized Model</h3>
                  <p className="text-sm text-[#6A6A6A]">Transfer Learning + Unsupervised</p>
                </div>
              </div>
              <p className="text-[#6A6A6A] text-sm mb-4">
                Once you&apos;ve uploaded enough sessions, the base model is fine-tuned on YOUR data:
              </p>
              <ul className="space-y-2 text-sm text-[#6A6A6A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#B8A9C9] mt-1">•</span>
                  Adapts to your specific body proportions and climbing style
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8A9C9] mt-1">•</span>
                  Detects YOUR compensation patterns — not generic ones
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8A9C9] mt-1">•</span>
                  Uses unsupervised clustering to find hidden patterns
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8A9C9] mt-1">•</span>
                  Discovers technique drift as you get tired
                </li>
              </ul>
            </div>
          </div>

          {/* Flow Diagram */}
          <div className="bg-[#1E1E2E] rounded-2xl p-6 md:p-8 overflow-x-auto shadow-xl mb-10">
            <div className="space-y-4 text-sm md:text-base font-mono">
              <div className="text-center">
                <span className="inline-block bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] text-white px-4 py-2 rounded-lg font-semibold">Base Model</span>
                <span className="text-[#6C7086] ml-2">(trained on all climbers)</span>
              </div>
              <div className="text-[#6C7086] pl-4 border-l-2 border-[#7DB9A3]/30 ml-4 md:ml-8">
                <p><span className="text-[#A6E3A1]">├──</span> <span className="text-[#89B4FA]">Supervised:</span> learns from labeled move quality + sensation data</p>
                <p><span className="text-[#A6E3A1]">└──</span> Recognizes general &quot;safe&quot; vs &quot;risky&quot; movement patterns</p>
              </div>
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-[#7DB9A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="text-center text-[#CDD6F4]">Generic movement knowledge</div>
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-[#B8A9C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="text-center text-[#F9E2AF]">You upload YOUR climbing sessions</div>
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-[#B8A9C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="text-center">
                <span className="inline-block bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] text-white px-4 py-2 rounded-lg font-semibold">Personalized Model</span>
                <span className="text-[#6C7086] ml-2">(fine-tuned on you)</span>
              </div>
              <div className="text-[#6C7086] pl-4 border-l-2 border-[#B8A9C9]/30 ml-4 md:ml-8">
                <p><span className="text-[#A6E3A1]">├──</span> <span className="text-[#89B4FA]">Transfer learning:</span> adapts base model to your body</p>
                <p><span className="text-[#A6E3A1]">└──</span> <span className="text-[#89B4FA]">Unsupervised:</span> discovers YOUR hidden patterns</p>
              </div>
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-[#D4A5A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="text-center">
                <span className="inline-block bg-gradient-to-r from-[#D4A5A5] to-[#C49494] text-white px-4 py-2 rounded-lg font-semibold">Personalized Feedback</span>
              </div>
              <div className="text-[#CDD6F4] pl-4 border-l-2 border-[#D4A5A5]/30 ml-4 md:ml-8 space-y-1">
                <p><span className="text-[#A6E3A1]">├──</span> &quot;Your left shoulder drops 15° more on dynos vs deadpoints&quot;</p>
                <p><span className="text-[#A6E3A1]">├──</span> &quot;Your knee valgus increases after minute 40 — fatigue signal&quot;</p>
                <p><span className="text-[#A6E3A1]">└──</span> &quot;Your lock-off form degrades when effort &gt; 7&quot;</p>
              </div>
            </div>
          </div>

          {/* Model Training Approaches Table */}
          <h3 className="text-2xl font-bold text-[#4A4A4A] mb-4">Model Training Approaches</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#E5E5E5]">
                  <th className="text-left py-4 px-4 text-[#4A4A4A] font-bold">Approach</th>
                  <th className="text-left py-4 px-4 text-[#4A4A4A] font-bold">Use Case</th>
                  <th className="text-left py-4 px-4 text-[#4A4A4A] font-bold">Data Needed</th>
                </tr>
              </thead>
              <tbody className="text-[#6A6A6A]">
                <tr className="border-b border-[#F0F0F0]">
                  <td className="py-4 px-4 font-medium">Rule-based engine</td>
                  <td className="py-4 px-4">Movement assessments with explicit criteria (deep squat)</td>
                  <td className="py-4 px-4">None — works immediately</td>
                </tr>
                <tr className="border-b border-[#F0F0F0]">
                  <td className="py-4 px-4 font-medium">Supervised ML</td>
                  <td className="py-4 px-4">Complex movements like climbing (needs labeled examples)</td>
                  <td className="py-4 px-4">500–2,000+ labeled examples</td>
                </tr>
                <tr className="border-b border-[#F0F0F0]">
                  <td className="py-4 px-4 font-medium">Unsupervised ML</td>
                  <td className="py-4 px-4">Hidden pattern detection, anomaly flagging</td>
                  <td className="py-4 px-4">Accumulates over time per user</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Hybrid</td>
                  <td className="py-4 px-4">Best of all — rules for known criteria, supervised for classification, unsupervised for discovery</td>
                  <td className="py-4 px-4">Builds progressively</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Current status note */}
          <div className="bg-gradient-to-r from-[#D4A5A5]/10 to-[#B8A9C9]/10 rounded-2xl p-6 border border-[#D4A5A5]/20">
            <p className="text-[#4A4A4A]">
              <span className="font-semibold">We&apos;re currently in the data collection phase</span> — building the labeled dataset that will train the base model. The rule-based scoring engine (used in the clinical movement assessment tool) works today. The ML models are next.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: The Data Flywheel */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-6">
            The Data Flywheel
          </h2>
          <p className="text-[#6A6A6A] leading-relaxed mb-10 text-lg">
            Every contribution makes the system better for everyone. Here&apos;s the cycle:
          </p>

          {/* Circular Flywheel Visualization */}
          <div className="relative mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Row 1 */}
              <div className="md:col-start-2 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-2xl p-4 text-center text-white shadow-lg">
                <p className="font-semibold">Contributors upload climbing videos</p>
              </div>

              {/* Row 2 */}
              <div className="hidden md:flex items-center justify-end">
                <svg className="w-8 h-8 text-[#7DB9A3] rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="flex justify-center md:hidden">
                <svg className="w-6 h-6 text-[#7DB9A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="bg-white/60 rounded-2xl p-4 text-center border border-[#7DB9A3]/30 shadow-md">
                <p className="text-[#4A4A4A] font-medium">Pose extraction generates biomechanical data</p>
              </div>
              <div className="hidden md:flex items-center justify-start">
                <svg className="w-8 h-8 text-[#B8A9C9] -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Row 3 */}
              <div className="flex justify-center md:hidden">
                <svg className="w-6 h-6 text-[#B8A9C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="bg-white/60 rounded-2xl p-4 text-center border border-[#B8A9C9]/30 shadow-md">
                <p className="text-[#4A4A4A] font-medium">Contributors label moves + tag sensations</p>
              </div>
              <div className="hidden md:block"></div>
              <div className="bg-white/60 rounded-2xl p-4 text-center border border-[#D4A5A5]/30 shadow-md">
                <p className="text-[#4A4A4A] font-medium">More contributors = more diverse data</p>
              </div>

              {/* Row 4 */}
              <div className="flex justify-center md:hidden">
                <svg className="w-6 h-6 text-[#D4A5A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="hidden md:flex items-center justify-end">
                <svg className="w-8 h-8 text-[#B8A9C9] rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <div className="bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] rounded-2xl p-4 text-center text-white shadow-lg">
                <p className="font-semibold">Labeled data trains the base model</p>
              </div>
              <div className="hidden md:flex items-center justify-start">
                <svg className="w-8 h-8 text-[#D4A5A5] -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>

              {/* Row 5 */}
              <div className="flex justify-center md:hidden">
                <svg className="w-6 h-6 text-[#7DB9A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="bg-white/60 rounded-2xl p-4 text-center border border-[#7DB9A3]/30 shadow-md">
                <p className="text-[#4A4A4A] font-medium">Better feedback attracts more contributors</p>
              </div>
              <div className="hidden md:block"></div>
              <div className="bg-white/60 rounded-2xl p-4 text-center border border-[#D4A5A5]/30 shadow-md">
                <p className="text-[#4A4A4A] font-medium">Better model = more accurate feedback</p>
              </div>

              {/* Cycle indicator for mobile */}
              <div className="flex justify-center md:hidden">
                <svg className="w-6 h-6 text-[#7DB9A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
          </div>

          {/* Key Points */}
          <h3 className="text-2xl font-bold text-[#4A4A4A] mb-6">Key Points</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#7DB9A3]/10 to-[#6AA892]/5 rounded-2xl p-6 border border-[#7DB9A3]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#4A4A4A]">More climbers = better models</h4>
              </div>
              <p className="text-sm text-[#6A6A6A]">A model trained on 50 climbers will miss patterns that a model trained on 5,000 climbers catches. Diversity of body types, climbing styles, and skill levels makes the model more robust.</p>
            </div>

            <div className="bg-gradient-to-br from-[#B8A9C9]/10 to-[#A598B8]/5 rounded-2xl p-6 border border-[#B8A9C9]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#4A4A4A]">Your data helps others</h4>
              </div>
              <p className="text-sm text-[#6A6A6A]">A pattern discovered in your movement data might prevent an injury for someone with a similar climbing style.</p>
            </div>

            <div className="bg-gradient-to-br from-[#D4A5A5]/10 to-[#C49494]/5 rounded-2xl p-6 border border-[#D4A5A5]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#4A4A4A]">The dataset is open</h4>
              </div>
              <p className="text-sm text-[#6A6A6A]">Labeled data syncs to a public GitHub repository. Researchers and the climbing community can access it.</p>
            </div>

            <div className="bg-gradient-to-br from-[#6A6A6A]/10 to-[#5A5A5A]/5 rounded-2xl p-6 border border-[#6A6A6A]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#6A6A6A] to-[#5A5A5A] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#4A4A4A]">Early contributors get the most value</h4>
              </div>
              <p className="text-sm text-[#6A6A6A]">Beta contributors get free access to personalized insights when the ML models go live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-16 text-center">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/60">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
            Ready to contribute?
          </h2>
          <p className="text-[#6A6A6A] mb-8 max-w-lg mx-auto">
            Help build the future of climbing injury prevention. Every video you label makes the models smarter for everyone.
          </p>
          <a
            href="https://collect.dynalytix.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] text-white rounded-full hover:from-[#6AA892] hover:to-[#5A9A82] transition-all duration-500 hover:scale-110 text-lg font-semibold shadow-2xl shadow-[#7DB9A3]/30 hover:shadow-[#7DB9A3]/50"
          >
            <span>Start contributing data</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
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
