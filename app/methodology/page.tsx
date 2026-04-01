import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology | Dynalytix",
  description: "How Dynalytix scores movement — open source architecture, clinical research behind the scoring, and dual-angle assessment system for functional movement screening.",
  openGraph: {
    title: "Methodology | Dynalytix",
    description: "How Dynalytix scores movement — open source architecture, clinical research behind the scoring, and dual-angle assessment system for functional movement screening.",
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
        <Link href="/fms-demo" className="flex items-center gap-3 group">
          <svg className="w-5 h-5 text-[#6A6A6A] group-hover:text-[#D4A5A5] transition-colors transform group-hover:-translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[#6A6A6A] group-hover:text-[#D4A5A5] transition-colors font-medium">Back to Demo</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/climbing" className="px-5 py-2.5 text-[#6A6A6A] hover:text-[#7DB9A3] transition-colors text-sm font-medium">
            Climbing
          </Link>
          <Link href="/fms-demo" className="px-5 py-2.5 text-[#6A6A6A] hover:text-[#D4A5A5] transition-colors text-sm font-medium">
            Movement Demo
          </Link>
          <Link href="/data-science" className="px-5 py-2.5 text-[#6A6A6A] hover:text-[#7DB9A3] transition-colors text-sm font-medium">
            Data Science
          </Link>
          <span className="px-5 py-2.5 bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] text-white rounded-full text-sm font-medium shadow-lg shadow-[#B8A9C9]/25">
            Methodology
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pt-16 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-[#4A4A4A] via-[#6A5A6A] to-[#4A4A4A] bg-clip-text mb-4 leading-tight">
          Methodology
        </h1>
        <p className="text-xl text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed">
          How Dynalytix scores movement — architecture, clinical research, and dual-angle analysis.
        </p>
      </section>

      {/* Section 1: Open Source Architecture */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-6">
            Open Source Architecture
          </h2>
          <p className="text-[#6A6A6A] leading-relaxed mb-8 text-lg">
            Full transparency — here&apos;s exactly how the assessment pipeline is structured. Our codebase is open source and available on{" "}
            <a
              href="https://github.com/Jolieabadir/dynalytics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A5A5] hover:text-[#C49494] underline underline-offset-2 transition-colors"
            >
              GitHub
            </a>.
          </p>

          {/* File Tree */}
          <div className="bg-[#1E1E2E] rounded-2xl p-6 md:p-8 overflow-x-auto shadow-xl mb-8">
            <pre className="text-sm md:text-base font-mono leading-relaxed">
              <code>
                <span className="text-[#CDD6F4]">dynalytics/</span>{"\n"}
                <span className="text-[#6C7086]">├── </span><span className="text-[#89B4FA]">src/</span><span className="text-[#6C7086]">                            # Core pose analysis engine</span>{"\n"}
                <span className="text-[#6C7086]">│   ├── </span><span className="text-[#89B4FA]">core/</span>{"\n"}
                <span className="text-[#6C7086]">│   │   ├── </span><span className="text-[#A6E3A1]">landmark.py</span><span className="text-[#6C7086]">             # Landmark class (x, y, z, visibility)</span>{"\n"}
                <span className="text-[#6C7086]">│   │   └── </span><span className="text-[#A6E3A1]">angle.py</span><span className="text-[#6C7086]">                # Angle calculation (3 points → degrees)</span>{"\n"}
                <span className="text-[#6C7086]">│   ├── </span><span className="text-[#89B4FA]">pose/</span>{"\n"}
                <span className="text-[#6C7086]">│   │   └── </span><span className="text-[#A6E3A1]">estimator.py</span><span className="text-[#6C7086]">            # PoseEstimator (wraps MediaPipe)</span>{"\n"}
                <span className="text-[#6C7086]">│   ├── </span><span className="text-[#89B4FA]">analysis/</span>{"\n"}
                <span className="text-[#6C7086]">│   │   ├── </span><span className="text-[#A6E3A1]">joint_analyzer.py</span><span className="text-[#6C7086]">       # 12 joint angle calculations</span>{"\n"}
                <span className="text-[#6C7086]">│   │   ├── </span><span className="text-[#A6E3A1]">velocity.py</span><span className="text-[#6C7086]">             # Speed + velocity tracking</span>{"\n"}
                <span className="text-[#6C7086]">│   │   └── </span><span className="text-[#A6E3A1]">frame_data.py</span><span className="text-[#6C7086]">           # FrameData container</span>{"\n"}
                <span className="text-[#6C7086]">│   ├── </span><span className="text-[#89B4FA]">export/</span>{"\n"}
                <span className="text-[#6C7086]">│   │   └── </span><span className="text-[#A6E3A1]">csv_exporter.py</span><span className="text-[#6C7086]">         # CSV export (raw, minimal, landmarks)</span>{"\n"}
                <span className="text-[#6C7086]">│   └── </span><span className="text-[#89B4FA]">config/</span>{"\n"}
                <span className="text-[#6C7086]">│       └── </span><span className="text-[#A6E3A1]">settings.py</span><span className="text-[#6C7086]">             # Angle definitions & thresholds</span>{"\n"}
                <span className="text-[#6C7086]">│</span>{"\n"}
                <span className="text-[#6C7086]">├── </span><span className="text-[#89B4FA]">fms/</span><span className="text-[#6C7086]">                            # Movement scoring engine</span>{"\n"}
                <span className="text-[#6C7086]">│   ├── </span><span className="text-[#89B4FA]">scoring/</span>{"\n"}
                <span className="text-[#6C7086]">│   │   ├── </span><span className="text-[#A6E3A1]">deep_squat.py</span><span className="text-[#6C7086]">           # Rule engine: CSV → score 0-3</span>{"\n"}
                <span className="text-[#6C7086]">│   │   ├── </span><span className="text-[#A6E3A1]">dual_angle.py</span><span className="text-[#6C7086]">           # Front + side → merged score</span>{"\n"}
                <span className="text-[#6C7086]">│   │   └── </span><span className="text-[#A6E3A1]">thresholds.py</span><span className="text-[#6C7086]">           # Research-backed angle thresholds</span>{"\n"}
                <span className="text-[#6C7086]">│   ├── </span><span className="text-[#89B4FA]">reporting/</span>{"\n"}
                <span className="text-[#6C7086]">│   │   ├── </span><span className="text-[#A6E3A1]">report_generator.py</span><span className="text-[#6C7086]">     # Clinical report generation</span>{"\n"}
                <span className="text-[#6C7086]">│   │   └── </span><span className="text-[#A6E3A1]">templates.py</span><span className="text-[#6C7086]">            # Report prompt templates</span>{"\n"}
                <span className="text-[#6C7086]">│   ├── </span><span className="text-[#89B4FA]">billing/</span>{"\n"}
                <span className="text-[#6C7086]">│   │   └── </span><span className="text-[#A6E3A1]">cpt_codes.py</span><span className="text-[#6C7086]">            # Billing categories + CPT suggestions</span>{"\n"}
                <span className="text-[#6C7086]">│   ├── </span><span className="text-[#89B4FA]">ehr/</span><span className="text-[#6C7086]">                        # EHR integration layer</span>{"\n"}
                <span className="text-[#6C7086]">│   │   ├── </span><span className="text-[#A6E3A1]">payload.py</span><span className="text-[#6C7086]">              # AssessmentPayload schema</span>{"\n"}
                <span className="text-[#6C7086]">│   │   ├── </span><span className="text-[#A6E3A1]">adapter.py</span><span className="text-[#6C7086]">              # Abstract gateway interface</span>{"\n"}
                <span className="text-[#6C7086]">│   │   ├── </span><span className="text-[#A6E3A1]">medstatix.py</span><span className="text-[#6C7086]">            # MedStatix gateway</span>{"\n"}
                <span className="text-[#6C7086]">│   │   ├── </span><span className="text-[#A6E3A1]">events.py</span><span className="text-[#6C7086]">               # Webhook event types</span>{"\n"}
                <span className="text-[#6C7086]">│   │   ├── </span><span className="text-[#A6E3A1]">clinic_codes.py</span><span className="text-[#6C7086]">         # Clinic billing code cache</span>{"\n"}
                <span className="text-[#6C7086]">│   │   └── </span><span className="text-[#A6E3A1]">approval.py</span><span className="text-[#6C7086]">             # Provider approval workflow</span>{"\n"}
                <span className="text-[#6C7086]">│   ├── </span><span className="text-[#A6E3A1]">disclaimer.py</span><span className="text-[#6C7086]">               # Clinical + billing disclaimers</span>{"\n"}
                <span className="text-[#6C7086]">│   ├── </span><span className="text-[#A6E3A1]">integration.py</span><span className="text-[#6C7086]">              # FastAPI hooks</span>{"\n"}
                <span className="text-[#6C7086]">│   └── </span><span className="text-[#A6E3A1]">pipeline.py</span><span className="text-[#6C7086]">                 # CLI: CSV → score + report + billing</span>{"\n"}
                <span className="text-[#6C7086]">│</span>{"\n"}
                <span className="text-[#6C7086]">├── </span><span className="text-[#89B4FA]">data_collection/</span>{"\n"}
                <span className="text-[#6C7086]">│   ├── </span><span className="text-[#89B4FA]">backend/</span><span className="text-[#6C7086]">                    # FastAPI server</span>{"\n"}
                <span className="text-[#6C7086]">│   │   ├── </span><span className="text-[#89B4FA]">src/</span>{"\n"}
                <span className="text-[#6C7086]">│   │   │   ├── </span><span className="text-[#89B4FA]">labeling/</span><span className="text-[#6C7086]">           # Video, Assessment, FrameTag models</span>{"\n"}
                <span className="text-[#6C7086]">│   │   │   ├── </span><span className="text-[#89B4FA]">auth/</span><span className="text-[#6C7086]">               # Supabase auth (JWT, roles, tokens)</span>{"\n"}
                <span className="text-[#6C7086]">│   │   │   └── </span><span className="text-[#89B4FA]">web/</span>{"\n"}
                <span className="text-[#6C7086]">│   │   │       └── </span><span className="text-[#A6E3A1]">api.py</span><span className="text-[#6C7086]">          # REST endpoints</span>{"\n"}
                <span className="text-[#6C7086]">│   │   └── </span><span className="text-[#89B4FA]">migrations/</span>{"\n"}
                <span className="text-[#6C7086]">│   │       └── </span><span className="text-[#A6E3A1]">001_initial_schema.sql</span>{"\n"}
                <span className="text-[#6C7086]">│   └── </span><span className="text-[#89B4FA]">frontend/</span><span className="text-[#6C7086]">                   # React assessment app</span>{"\n"}
                <span className="text-[#6C7086]">│       └── </span><span className="text-[#89B4FA]">src/</span>{"\n"}
                <span className="text-[#6C7086]">│           ├── </span><span className="text-[#89B4FA]">components/</span>{"\n"}
                <span className="text-[#6C7086]">│           │   ├── </span><span className="text-[#F9E2AF]">AssessmentUpload.jsx</span><span className="text-[#6C7086]">     # Two-slot upload (front + side)</span>{"\n"}
                <span className="text-[#6C7086]">│           │   ├── </span><span className="text-[#F9E2AF]">AssessmentProcessing.jsx</span><span className="text-[#6C7086]"> # Loading state</span>{"\n"}
                <span className="text-[#6C7086]">│           │   ├── </span><span className="text-[#F9E2AF]">AssessmentResults.jsx</span><span className="text-[#6C7086]">    # Score + criteria display</span>{"\n"}
                <span className="text-[#6C7086]">│           │   ├── </span><span className="text-[#F9E2AF]">VideoPlayer.jsx</span><span className="text-[#6C7086]">          # Video playback</span>{"\n"}
                <span className="text-[#6C7086]">│           │   └── </span><span className="text-[#F9E2AF]">SkeletonOverlay.jsx</span><span className="text-[#6C7086]">      # Pose overlay on video</span>{"\n"}
                <span className="text-[#6C7086]">│           ├── </span><span className="text-[#89B4FA]">lib/</span>{"\n"}
                <span className="text-[#6C7086]">│           │   └── </span><span className="text-[#F9E2AF]">supabase.js</span>{"\n"}
                <span className="text-[#6C7086]">│           ├── </span><span className="text-[#89B4FA]">services/</span>{"\n"}
                <span className="text-[#6C7086]">│           │   └── </span><span className="text-[#F9E2AF]">PoseExtractor.js</span><span className="text-[#6C7086]">         # Client-side MediaPipe JS</span>{"\n"}
                <span className="text-[#6C7086]">│           └── </span><span className="text-[#89B4FA]">store/</span>{"\n"}
                <span className="text-[#6C7086]">│               ├── </span><span className="text-[#F9E2AF]">useStore.js</span>{"\n"}
                <span className="text-[#6C7086]">│               └── </span><span className="text-[#F9E2AF]">useAuthStore.js</span>{"\n"}
                <span className="text-[#6C7086]">│</span>{"\n"}
                <span className="text-[#6C7086]">├── </span><span className="text-[#A6E3A1]">main.py</span><span className="text-[#6C7086]">                         # CLI pose extraction</span>{"\n"}
                <span className="text-[#6C7086]">└── </span><span className="text-[#A6E3A1]">requirements.txt</span>
              </code>
            </pre>
          </div>

          {/* Directory explanations */}
          <div className="space-y-4 text-[#6A6A6A] leading-relaxed">
            <p>
              <span className="font-semibold text-[#4A4A4A]">src/</span> is the core pose analysis engine — it handles pose estimation via MediaPipe, calculates 12 joint angles per frame, tracks speed and velocity, and exports raw data to CSV.
            </p>
            <p>
              <span className="font-semibold text-[#4A4A4A]">fms/</span> is the movement scoring engine — it takes the pose data and runs it through a rule-based scoring system with research-backed thresholds, generates clinical reports, maps billing categories, and handles the EHR integration layer.
            </p>
            <p>
              <span className="font-semibold text-[#4A4A4A]">data_collection/</span> is the web application — a React frontend where patients upload video and a FastAPI backend that orchestrates the pipeline.
            </p>
          </div>

          {/* Privacy callout */}
          <div className="mt-8 bg-gradient-to-r from-[#7DB9A3]/10 to-[#6AA892]/10 rounded-2xl p-6 border border-[#7DB9A3]/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-[#4A4A4A]">
                <span className="font-semibold">Video never leaves the browser.</span> MediaPipe JS runs pose extraction entirely client-side — no video is uploaded to any server.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Clinical Research Behind the Scoring */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-6">
            Clinical Research Behind the Scoring
          </h2>
          <p className="text-[#6A6A6A] leading-relaxed mb-10 text-lg">
            Our scoring engine is rule-based, not a black box. Every threshold has a published source, and every score is explainable.
          </p>

          {/* Scoring Scale */}
          <h3 className="text-2xl font-bold text-[#4A4A4A] mb-6">Scoring Scale</h3>
          <p className="text-[#6A6A6A] mb-6">
            The deep squat is scored 0–3 following standard Functional Movement Screening protocol:
          </p>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-br from-[#7DB9A3]/10 to-[#6AA892]/10 rounded-2xl p-5 border border-[#7DB9A3]/20">
              <div className="w-10 h-10 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-xl flex items-center justify-center mb-3 shadow-md">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-bold text-[#4A4A4A] mb-1">Perfect</h4>
              <p className="text-sm text-[#6A6A6A]">Performs movement correctly without compensation</p>
            </div>
            <div className="bg-gradient-to-br from-[#B8A9C9]/10 to-[#A598B8]/10 rounded-2xl p-5 border border-[#B8A9C9]/20">
              <div className="w-10 h-10 bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] rounded-xl flex items-center justify-center mb-3 shadow-md">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-bold text-[#4A4A4A] mb-1">Compensation</h4>
              <p className="text-sm text-[#6A6A6A]">Completes with compensations (heels rise, excessive forward lean)</p>
            </div>
            <div className="bg-gradient-to-br from-[#D4A5A5]/10 to-[#C49494]/10 rounded-2xl p-5 border border-[#D4A5A5]/20">
              <div className="w-10 h-10 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-xl flex items-center justify-center mb-3 shadow-md">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-bold text-[#4A4A4A] mb-1">Cannot Complete</h4>
              <p className="text-sm text-[#6A6A6A]">Unable to complete the movement pattern</p>
            </div>
            <div className="bg-gradient-to-br from-[#6A6A6A]/10 to-[#5A5A5A]/10 rounded-2xl p-5 border border-[#6A6A6A]/20">
              <div className="w-10 h-10 bg-gradient-to-r from-[#6A6A6A] to-[#5A5A5A] rounded-xl flex items-center justify-center mb-3 shadow-md">
                <span className="text-white font-bold">0</span>
              </div>
              <h4 className="font-bold text-[#4A4A4A] mb-1">Pain</h4>
              <p className="text-sm text-[#6A6A6A]">Pain reported during any part of the movement</p>
            </div>
          </div>

          {/* 5 Biomechanical Criteria */}
          <h3 className="text-2xl font-bold text-[#4A4A4A] mb-6">5 Biomechanical Criteria</h3>
          <div className="space-y-4 mb-12">
            <div className="flex items-start gap-4 bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-[#4A4A4A] mb-1">Squat Depth</h4>
                <p className="text-[#6A6A6A] text-sm">Measured by knee flexion angle. Score 3 requires &gt;120° of knee flexion at the deepest point.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-[#4A4A4A] mb-1">Torso-Tibia Alignment</h4>
                <p className="text-[#6A6A6A] text-sm">The angle of the trunk relative to the tibia. Excessive forward lean indicates compensation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-[#4A4A4A] mb-1">Knee-Over-Foot Alignment</h4>
                <p className="text-[#6A6A6A] text-sm">Detected from the front view. Identifies knee valgus (inward collapse) or varus (outward drift).</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <div>
                <h4 className="font-bold text-[#4A4A4A] mb-1">Heel Position</h4>
                <p className="text-[#6A6A6A] text-sm">Measured by ankle dorsiflexion angle. Heels rising off the ground is a common compensation pattern indicating limited ankle mobility.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/50 rounded-xl p-5 border border-white/60">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white text-sm font-bold">5</span>
              </div>
              <div>
                <h4 className="font-bold text-[#4A4A4A] mb-1">Lumbar Flexion Control</h4>
                <p className="text-[#6A6A6A] text-sm">Trunk angle change from standing to the deepest point of the squat. Excessive lumbar flexion (&quot;butt wink&quot;) indicates poor core or hip mobility.</p>
              </div>
            </div>
          </div>

          {/* Research-Backed Thresholds */}
          <h3 className="text-2xl font-bold text-[#4A4A4A] mb-4">Research-Backed Thresholds</h3>
          <p className="text-[#6A6A6A] mb-6">
            These angle thresholds are derived from peer-reviewed biomechanics research:
          </p>

          {/* Sources */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-br from-[#B8A9C9]/10 to-[#A598B8]/10 rounded-xl p-5 border border-[#B8A9C9]/20">
              <h4 className="font-bold text-[#4A4A4A] mb-2">Butler et al. (2010)</h4>
              <p className="text-sm text-[#6A6A6A]">Established normative joint angle ranges for FMS deep squat scoring across score levels 1–3. This study measured actual joint angles across a large sample of participants scored by certified FMS practitioners.</p>
            </div>
            <div className="bg-gradient-to-br from-[#7DB9A3]/10 to-[#6AA892]/10 rounded-xl p-5 border border-[#7DB9A3]/20">
              <h4 className="font-bold text-[#4A4A4A] mb-2">Heredia et al. (2021)</h4>
              <p className="text-sm text-[#6A6A6A]">Validated biomechanical criteria for computer vision–based movement screening, confirming that pose estimation can reliably replicate manual FMS scoring.</p>
            </div>
          </div>

          {/* Thresholds Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#E5E5E5]">
                  <th className="text-left py-4 px-4 text-[#4A4A4A] font-bold">Measurement</th>
                  <th className="text-center py-4 px-4 text-[#4A4A4A] font-bold">Score 1</th>
                  <th className="text-center py-4 px-4 text-[#4A4A4A] font-bold">Score 2</th>
                  <th className="text-center py-4 px-4 text-[#4A4A4A] font-bold">Score 3</th>
                </tr>
              </thead>
              <tbody className="text-[#6A6A6A]">
                <tr className="border-b border-[#F0F0F0]">
                  <td className="py-4 px-4 font-medium">Knee flexion</td>
                  <td className="py-4 px-4 text-center">~84.7°</td>
                  <td className="py-4 px-4 text-center">~110°</td>
                  <td className="py-4 px-4 text-center">&gt;120°</td>
                </tr>
                <tr className="border-b border-[#F0F0F0]">
                  <td className="py-4 px-4 font-medium">Hip flexion</td>
                  <td className="py-4 px-4 text-center">~88.1°</td>
                  <td className="py-4 px-4 text-center">~117.5°</td>
                  <td className="py-4 px-4 text-center">—</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Ankle dorsiflexion (heel rise)</td>
                  <td className="py-4 px-4 text-center">—</td>
                  <td className="py-4 px-4 text-center">&lt;140°</td>
                  <td className="py-4 px-4 text-center">≥140°</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bilateral asymmetry note */}
          <div className="mt-8 bg-gradient-to-r from-[#D4A5A5]/10 to-[#B8A9C9]/10 rounded-2xl p-6 border border-[#D4A5A5]/20">
            <p className="text-[#4A4A4A]">
              The system also computes <span className="font-semibold">bilateral asymmetry</span> — comparing left vs. right joint angles frame-by-frame and flagging significant differences. This supports clinical identification of compensatory movement patterns that may not be visible to the naked eye.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Dual-Angle Assessment System */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-6">
            Dual-Angle Assessment
          </h2>
          <p className="text-[#6A6A6A] leading-relaxed mb-10 text-lg">
            A single camera angle can&apos;t capture all movement faults. Our system uses two views — front and side — scored independently and merged at the criterion level.
          </p>

          {/* Pipeline Visualization */}
          <div className="mb-12">
            {/* Two columns that merge */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Front View Column */}
              <div className="bg-gradient-to-br from-[#D4A5A5]/10 to-[#C49494]/5 rounded-2xl p-6 border border-[#D4A5A5]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#4A4A4A]">Front View</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/60 rounded-xl p-4 border border-white/80">
                    <p className="text-sm text-[#6A6A6A]"><span className="font-medium text-[#4A4A4A]">Patient films from FRONT</span></p>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-[#D4A5A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-white/60 rounded-xl p-4 border border-white/80">
                    <p className="text-sm text-[#6A6A6A]"><span className="font-medium text-[#4A4A4A]">MediaPipe extracts pose</span></p>
                    <p className="text-xs text-[#8A8A8A] mt-1">(client-side, in browser)</p>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-[#D4A5A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-white/60 rounded-xl p-4 border border-white/80">
                    <p className="text-sm font-medium text-[#4A4A4A] mb-2">Front-view scoring:</p>
                    <ul className="text-sm text-[#6A6A6A] space-y-1">
                      <li>• Knee valgus/varus</li>
                      <li>• Bilateral asymmetry</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Side View Column */}
              <div className="bg-gradient-to-br from-[#B8A9C9]/10 to-[#A598B8]/5 rounded-2xl p-6 border border-[#B8A9C9]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#4A4A4A]">Side View</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/60 rounded-xl p-4 border border-white/80">
                    <p className="text-sm text-[#6A6A6A]"><span className="font-medium text-[#4A4A4A]">Patient films from SIDE</span></p>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-[#B8A9C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-white/60 rounded-xl p-4 border border-white/80">
                    <p className="text-sm text-[#6A6A6A]"><span className="font-medium text-[#4A4A4A]">MediaPipe extracts pose</span></p>
                    <p className="text-xs text-[#8A8A8A] mt-1">(client-side, in browser)</p>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-[#B8A9C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-white/60 rounded-xl p-4 border border-white/80">
                    <p className="text-sm font-medium text-[#4A4A4A] mb-2">Side-view scoring:</p>
                    <ul className="text-sm text-[#6A6A6A] space-y-1">
                      <li>• Squat depth (knee flexion)</li>
                      <li>• Torso-tibia alignment</li>
                      <li>• Heel position</li>
                      <li>• Lumbar flexion control</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Merge indicator */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4A5A5] to-[#D4A5A5]"></div>
                <svg className="w-8 h-8 text-[#6A6A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <div className="w-24 h-px bg-gradient-to-l from-transparent via-[#B8A9C9] to-[#B8A9C9]"></div>
              </div>
            </div>

            {/* Merged output */}
            <div className="bg-gradient-to-r from-[#D4A5A5]/10 via-white/80 to-[#B8A9C9]/10 rounded-2xl p-6 border border-white/50 text-center">
              <h4 className="font-bold text-[#4A4A4A] mb-2">Criterion-level merge</h4>
              <p className="text-sm text-[#6A6A6A] mb-4">(each criterion scored by its optimal view)</p>
              <div className="flex justify-center mb-4">
                <svg className="w-6 h-6 text-[#6A6A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="inline-flex flex-col items-center bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] text-white rounded-xl px-8 py-4 shadow-lg">
                <span className="font-bold text-lg">Final score 0–3</span>
                <span className="text-sm opacity-90">+ detailed findings</span>
                <span className="text-sm opacity-90">+ clinical report</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#4A4A4A]">Privacy by design</h4>
              </div>
              <p className="text-sm text-[#6A6A6A]">Video never leaves the browser. MediaPipe JS runs pose extraction entirely client-side. No video is uploaded to any server, ever.</p>
            </div>

            <div className="bg-gradient-to-br from-[#B8A9C9]/10 to-[#A598B8]/5 rounded-2xl p-6 border border-[#B8A9C9]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#4A4A4A]">Each view captures what it&apos;s best at</h4>
              </div>
              <p className="text-sm text-[#6A6A6A]">The front view detects knee alignment (valgus/varus) and bilateral asymmetry. The side view measures squat depth, torso position, heel rise, and lumbar control. Neither view alone can see everything.</p>
            </div>

            <div className="bg-gradient-to-br from-[#D4A5A5]/10 to-[#C49494]/5 rounded-2xl p-6 border border-[#D4A5A5]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#4A4A4A]">Criterion-level merge, not averaging</h4>
              </div>
              <p className="text-sm text-[#6A6A6A]">The system doesn&apos;t average the two views or pick the &quot;better&quot; one. It selects the optimal view for each specific biomechanical criterion and merges results at that level. Front view data is authoritative for knee alignment; side view data is authoritative for depth.</p>
            </div>

            <div className="bg-gradient-to-br from-[#6A6A6A]/10 to-[#5A5A5A]/5 rounded-2xl p-6 border border-[#6A6A6A]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#6A6A6A] to-[#5A5A5A] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#4A4A4A]">Provider always reviews</h4>
              </div>
              <p className="text-sm text-[#6A6A6A]">The automated score lands as a &quot;draft&quot; in the provider&apos;s dashboard. A licensed provider reviews the findings, can override any criterion, and approves the assessment before it reaches the patient chart. This keeps the system compliant with FDA Clinical Decision Support guidelines — the tool informs, the clinician decides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-16 text-center">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/60">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
            Ready to see it in action?
          </h2>
          <p className="text-[#6A6A6A] mb-8 max-w-lg mx-auto">
            Try the movement assessment yourself and see how the dual-angle system scores a deep squat in real time.
          </p>
          <a
            href="https://analysis.dynalytix.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] text-white rounded-full hover:from-[#C49494] hover:to-[#A598B8] transition-all duration-500 hover:scale-110 text-lg font-semibold shadow-2xl shadow-[#D4A5A5]/30 hover:shadow-[#D4A5A5]/50"
          >
            <span>Try the assessment yourself</span>
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
            <Link href="/data-science" className="text-[#8A8A8A] hover:text-[#7DB9A3] transition-colors duration-300">Data Science</Link>
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
