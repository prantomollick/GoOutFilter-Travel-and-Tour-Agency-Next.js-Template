// import styles from "./page.module.css";
import ArrowBtn from "@/components/ui/arrow-btn/arrow-btn";
import Button from "@/components/ui/button/button";
import { GoChevronRight } from "react-icons/go";

export default function Home() {
  return (
    <>
      <div style={{ display: "flex", gap: "5px" }}>
        <ArrowBtn direction="left" />
        <ArrowBtn href="/" direction="up" />
        <ArrowBtn href="/" direction="down" />
        <ArrowBtn direction="right" variant="bordered" />
      </div>
    </>
  );
}
