import { Mail } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import Reveal from "@/components/Reveal";
import { EMAIL, GITHUB_URL } from "@/lib/profile";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-8 py-14 text-center sm:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]"
            />

            <p className="mb-3 font-mono text-sm tracking-widest text-accent uppercase">
              Contact
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
              Feel free to reach out if you&apos;d like to connect or take a
              look at what I&apos;m building.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-sky-300 hover:shadow-lg hover:shadow-accent/20"
              >
                <Mail className="h-4 w-4" />
                {EMAIL}
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-accent/50 hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
