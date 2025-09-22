import { HeroHome } from "@/components/heros";
import { IntroBlock } from "@/blocks/introBlock";
import { Platformblock } from "@/blocks/platformBlock";

export default function Home() {
  return (
    <>
      <HeroHome />
      <IntroBlock />
      <Platformblock />
    </>
  );
}
