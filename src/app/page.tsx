// import styles from "./page.module.css";
import Button from "@/components/ui/button/button";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export default function Home() {
  return (
    <>
      <Button
        starticon={<GoArrowUpRight />}
        color="default"
        variant="bordered"
        size="lg"
        radius="sm"
        fontWeight="medium"
      >
        Search
      </Button>
      <div>&nbsp;</div>
      <Button
        href="/"
        color="default"
        size="lg"
        radius="sm"
        endicon={<GoArrowUpRight />}
      >
        Search
      </Button>
      <div>&nbsp;</div>
      <Button
        color="white"
        variant="bordered"
        size="md"
        radius="sm"
        fontWeight="normal"
      >
        Become An Expert
      </Button>
      <div>&nbsp;</div>
      <Button href="/" color="white" size="lg" radius="sm" fontWeight="normal">
        Become An Expert
      </Button>
      <div>&nbsp;</div>
      <Button href="/" color="blue">
        Search
      </Button>
      <Button color="blue" variant="bordered">
        Search
      </Button>
      <div>&nbsp;</div>
      <Button color="dark-blue" variant="bordered">
        Become An Expert
      </Button>
      <div>&nbsp;</div>
      <Button color="darker-blue" variant="bordered" size="md">
        Search
      </Button>
      <div>&nbsp;</div>
      <Button color="darkest-gray" variant="bordered">
        Become An Expert
      </Button>
      <br />
      <br />
      <Button href="/" color="darkest-gray" variant="bordered" radius="lg">
        Become An Expert
      </Button>
      <br />
      <br />
      <Button href="/" color="darkest-gray" radius="sm" size="sm">
        ViewAll <GoArrowUpRight size={20} />
      </Button>
      <br />
      <br />
      <Button color="darkest-gray" variant="bordered" radius="sm">
        View All
      </Button>
    </>
  );
}
