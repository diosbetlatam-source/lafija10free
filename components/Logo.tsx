import Image from "next/image";

const sizes = {
  sm: "h-9",
  lg: "h-12 sm:h-16",
} as const;

export default function Logo({ size = "lg" }: { size?: "sm" | "lg" }) {
  return (
    <Image
      src="/logo.png"
      alt="La Fija 10"
      width={460}
      height={100}
      priority
      className={`w-auto object-contain ${sizes[size]}`}
    />
  );
}
