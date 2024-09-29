import Window from "@/layout/Window";
import { WindowType } from "../Main/types";

const AboutMe = ({ id, position, focus, minimised, appName, setWindows }: WindowType) => {
  console.log(position);
  return (
    <Window
      id={id}
      appName={appName}
      position={{ x: position.x, y: position.y }}
      focus={focus}
      minimised={minimised}
      setWindows={setWindows}
    >
      AboutMe
    </Window>
  );
};
export default AboutMe;

