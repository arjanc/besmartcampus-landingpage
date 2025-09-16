import { HeroHome } from "@/components/heros";
import { IntroBlock } from "@/blocks/introblock";
import { Platformblock } from "@/blocks/platformblock";

export default function Home() {
  return (
    <>
      <HeroHome />
      <IntroBlock />
      <Platformblock />
    </>
  );
}
