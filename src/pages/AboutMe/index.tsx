import Window from "@/layout/Window";
import { AppPageType } from "@/types/pageTypes";

const AboutMe = ({ position, zIndex }: AppPageType) => {
  return (
    <Window position={position} zIndex={zIndex}>
      AboutMe
    </Window>
  );
};
export default AboutMe;
