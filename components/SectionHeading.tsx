type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm tracking-widest text-accent uppercase">{label}</p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-muted leading-relaxed">{description}</p>}
    </div>
  );
}
