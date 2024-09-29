import Window from "@/layout/Window";
import { WindowType } from "@/pages/Main/types";

const ContactMe = ({ id, appName, position, focus, minimised, setWindows }: WindowType) => {
  console.log(position);
  return (
    <Window id={id} appName={appName} position={position} focus={focus} minimised={minimised} setWindows={setWindows}>
      CONTAT ME
    </Window>
  );
};
export default ContactMe;

