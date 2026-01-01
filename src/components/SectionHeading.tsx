interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal-950">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-charcoal-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
