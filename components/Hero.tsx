import Image from "next/image";
import { ArrowRight } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import { GITHUB_URL } from "@/lib/profile";
import profilePhoto from "@/public/profile.png";

export default function Hero() {
  return (
    <section id="home" className="bg-grid relative overflow-hidden">
      {/* soft radial glow behind the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-36 sm:pt-40 md:grid-cols-[1.2fr_1fr] md:pb-32 md:pt-44">
        <div>
          <p
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs tracking-widest text-accent"
            style={{ animation: "fade-up 0.7s ease-out both" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            SOFTWARE ENGINEERING STUDENT
          </p>

          <h1
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animation: "fade-up 0.7s ease-out 0.1s both" }}
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-accent to-accent-dim bg-clip-text text-transparent">
              Asif Shadman Khan
            </span>
            .
          </h1>

          <p
            className="mt-4 font-mono text-base text-slate-400 sm:text-lg"
            style={{ animation: "fade-up 0.7s ease-out 0.2s both" }}
          >
            Software Engineering Student · 3rd Year
          </p>

          <p
            className="mt-6 max-w-xl leading-relaxed text-muted"
            style={{ animation: "fade-up 0.7s ease-out 0.3s both" }}
          >
            I&apos;m a third-year Software Engineering student at Metropolitan
            University, interested in software development, web technologies,
            and exploring practical applications of AI. I&apos;m currently
            building my skills through coursework, personal projects, and
            hands-on development.
          </p>

          <div
            className="mt-9 flex flex-wrap gap-4"
            style={{ animation: "fade-up 0.7s ease-out 0.4s both" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-sky-300 hover:shadow-lg hover:shadow-accent/20"
            >
              View My Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-accent/50 hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* Photo with decorative frame */}
        <div
          className="relative mx-auto w-full max-w-xs sm:max-w-sm"
          style={{ animation: "fade-up 0.8s ease-out 0.35s both" }}
        >
          <div className="animate-float-slow">
            <div className="absolute -inset-3 rounded-2xl border border-accent/20" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src={profilePhoto}
                alt="Photo of Asif Shadman Khan"
                priority
                sizes="(max-width: 768px) 90vw, 380px"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* small decorative floating tag */}
          <div className="absolute -bottom-5 -left-4 hidden rounded-lg border border-border bg-surface px-4 py-2 font-mono text-xs text-accent shadow-lg sm:block">
            &lt;/&gt; learning by building
          </div>
        </div>
      </div>
    </section>
  );
}
