import { HeroHome } from "@/components/heros";
import { IntroBlock } from "@/components/blocks/introBlock";
import { Platformblock } from "@/components/blocks/platformBlock";

export default function Home() {
  return (
    <>
      <HeroHome />
      <IntroBlock />
      <Platformblock />
    </>
  );
}
