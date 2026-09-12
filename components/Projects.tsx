import { FileText, Music } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { GITHUB_URL } from "@/lib/profile";

const projects = [
  {
    title: "AI Thesis Analyzer",
    tags: ["Python", "Google Colab", "PDF Processing", "Language Model"],
    description:
      "A Python-based tool developed in Google Colab that processes thesis PDFs, identifies and extracts important sections, and generates a concise overview from the selected content using a language model.",
    link: { href: GITHUB_URL, label: "GitHub", icon: GithubIcon },
    preview: "thesis" as const,
  },
  {
    title: "Flames Musical Club — Website Design",
    tags: ["Figma", "UI/UX", "Web Design"],
    description:
      "A Figma-based website design concept for Flames Musical Club, focusing on a clean and engaging interface for presenting the club, its activities, and musical content.",
    link: null,
    preview: "design" as const,
  },
];

function ThesisPreview() {
  return (
    <div className="flex h-44 flex-col justify-end gap-2 bg-gradient-to-br from-slate-900 to-background p-5 font-mono text-[11px]">
      <div className="flex items-center gap-2 text-slate-500">
        <FileText className="h-4 w-4 text-accent" />
        <span>thesis.pdf → extracting sections…</span>
      </div>
      <div className="space-y-1.5">
        <div className="h-1.5 w-3/4 rounded bg-accent/40" />
        <div className="h-1.5 w-full rounded bg-border" />
        <div className="h-1.5 w-5/6 rounded bg-border" />
      </div>
      <div className="rounded-md border border-accent/30 bg-accent/10 p-2.5 text-accent">
        → concise overview generated
      </div>
    </div>
  );
}

function DesignPreview() {
  return (
    <div className="h-44 bg-gradient-to-br from-slate-900 to-background p-5">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-rose-400/70" />
          <span className="h-2 w-2 rounded-full bg-amber-400/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
          <span className="ml-2 font-mono text-[10px] text-slate-500">
            flames-music-club.fig
          </span>
        </div>
        <div className="flex flex-1 items-center justify-center gap-3 p-4">
          <div className="h-12 w-12 shrink-0 rounded-full border border-accent/40 bg-accent/10 p-3 text-accent">
            <Music className="h-full w-full" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-2 w-4/5 rounded bg-slate-500/50" />
            <div className="h-1.5 w-full rounded bg-border" />
            <div className="h-1.5 w-2/3 rounded bg-border" />
            <div className="mt-2 h-4 w-16 rounded bg-accent/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

const previews = {
  thesis: ThesisPreview,
  design: DesignPreview,
};

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            label="PROJECTS"
            title="Things I've built and designed"
            description="A look at what I've been working on — from coursework ideas to personal experiments."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const Preview = previews[project.preview];
            return (
              <Reveal key={project.title} delay={i * 120}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
                  <Preview />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <div className="mt-6">
                        <a
                          href={project.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-accent/50 hover:text-accent"
                        >
                          <project.link.icon className="h-4 w-4" />
                          {project.link.label}
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 font-mono text-sm text-muted">
            More projects are on the way as I keep learning and building.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
