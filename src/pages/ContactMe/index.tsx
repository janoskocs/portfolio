import Window from "@/layout/Window";
import { AppPageType } from "@/types/pageTypes";
const ContactMe = ({ position, zIndex }: AppPageType) => {
  return (
    <Window position={position} zIndex={zIndex}>
      CONTAT ME
    </Window>
  );
};
export default ContactMe;
