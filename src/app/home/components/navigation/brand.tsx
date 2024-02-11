import Image from "next/image";

interface BrandProps {
  variant: "white" | "primary";
  height?: number;
  width?: number;
  title?: string;
}

function Brand({ variant, height = 50, width = 192, title }: BrandProps) {
  let srcLink = "main-logo.svg";

  if (variant === "white") {
    srcLink = "main-logo-white.svg";
  }

  return (
    <Image
      src={`/${srcLink}`}
      height={height}
      width={width}
      alt={title || "Logo"}
    />
  );
}

export default Brand;
