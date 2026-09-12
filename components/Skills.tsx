import { Code2, Database, Globe, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const skillGroups = [
  {
    icon: Code2,
    category: "Programming",
    skills: ["Java", "Python", "C", "C++"],
  },
  {
    icon: Globe,
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
  },
  {
    icon: Database,
    category: "Database",
    skills: ["MySQL"],
  },
  {
    icon: Wrench,
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            label="SKILLS"
            title="Technologies I work with"
            description="Languages, frameworks, and tools I've been learning and using through my coursework and projects."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 100}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                <div className="mb-5 inline-flex rounded-lg border border-accent/20 bg-accent/10 p-2.5 text-accent transition-transform duration-300 group-hover:scale-110">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 font-semibold text-white">{group.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
