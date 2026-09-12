import { GraduationCap, School } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const education = [
  {
    icon: GraduationCap,
    institution: "Metropolitan University",
    degree: "Software Engineering",
    period: "2024 – Present",
    details: ["3rd Year", "CGPA 3.25"],
    current: true,
  },
  {
    icon: School,
    institution: "RISE (Royal Institute of Smart Education)",
    degree: "A Level",
    period: "2024",
    details: ["B Grade", "70%+ marks"],
  },
  {
    icon: School,
    institution: "RISE (Royal Institute of Smart Education)",
    degree: "O Level",
    period: "2022",
    details: ["B Grade", "70%+ marks"],
  },
];

export default function Education() {
  return (
    <section id="education" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            label="EDUCATION"
            title="My academic journey"
            description="Where I've studied and what I'm working towards."
          />
        </Reveal>

        <div className="relative max-w-3xl">
          {/* vertical timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[22px] top-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent"
          />

          <ol className="space-y-8">
            {education.map((item, i) => (
              <li key={`${item.degree}-${item.period}`}>
                <Reveal delay={i * 120}>
                  <div className="relative flex gap-6 pl-0">
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-surface text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-semibold text-white">
                          {item.institution}
                        </h3>
                        <span
                          className={`rounded-full px-3 py-1 font-mono text-xs ${
                            item.current
                              ? "border border-accent/30 bg-accent/10 text-accent"
                              : "border border-border bg-surface text-muted"
                          }`}
                        >
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-1 text-slate-300">{item.degree}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.details.map((detail) => (
                          <span
                            key={detail}
                            className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
