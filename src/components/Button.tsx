import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200";

  const variants = {
    primary: "bg-gold-500 text-white hover:bg-gold-600 shadow-sm",
    secondary: "bg-teal-500 text-white hover:bg-teal-600 shadow-sm",
    outline:
      "border-2 border-gold-500 text-gold-600 hover:bg-gold-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
