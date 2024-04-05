import Image from "next/image";

interface BrandProps {
  variant: "white" | "primary";
  height?: number;
  width?: number;
  title?: string;
  className?: string;
}

function Brand({
  variant,
  height = 50,
  width = 192,
  title,
  className,
  ...props
}: BrandProps) {
  let srcLink = "main-logo.svg";

  if (variant === "white") {
    srcLink = "main-logo-white.svg";
  }

  return (
    <Image
      className={className}
      src={`/${srcLink}`}
      height={height}
      width={width}
      alt={title || "Logo"}
      priority={true}
      {...props}
    />
  );
}

export default Brand;
