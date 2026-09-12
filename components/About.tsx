import { BookOpen, Code2, GraduationCap, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const infoCards = [
  {
    icon: GraduationCap,
    title: "Software Engineering",
    lines: ["3rd Year Student"],
  },
  {
    icon: BookOpen,
    title: "Metropolitan University",
    lines: ["CGPA 3.25"],
  },
  {
    icon: Code2,
    title: "Interested In",
    lines: ["Software Development", "Web Technologies", "AI"],
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            label="ABOUT ME"
            title="A quick introduction"
            description="Who I am, what I study, and where my interests are heading."
          />
        </Reveal>

        <div className="grid items-start gap-10 md:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border border-border bg-card p-8">
              <p className="leading-relaxed text-slate-300">
                I&apos;m a third-year Software Engineering student at
                Metropolitan University, interested in software development,
                web technologies, and exploring practical applications of AI.
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                I&apos;m currently building my skills through coursework,
                personal projects, and hands-on development — learning something
                new with every project I take on.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {infoCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                  <div className="rounded-lg border border-accent/20 bg-accent/10 p-2.5 text-accent">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{card.title}</h3>
                    <ul className="mt-1 space-y-0.5">
                      {card.lines.map((line) => (
                        <li key={line} className="text-sm text-muted">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150}>
          <p className="mt-8 flex items-center gap-2 font-mono text-sm text-muted">
            <Sparkles className="h-4 w-4 text-accent" />
            Focused on learning the fundamentals well before moving to the
            advanced stuff.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
