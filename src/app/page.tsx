import Button from "@/components/ui/button/button";
import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Button color="default" variant="bordered">
        Become An Expert
      </Button>
      <div>&nbsp;</div>
      <Button href="/" color="default" variant="bordered">
        Become An Expert
      </Button>
    </>
  );
}
