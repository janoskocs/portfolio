import AboutWindow from "../AboutWindow";
import DesktopWindow from "../DesktopWindow";
import "./Desktop.scss";

const Desktop = ({ activeWindow }) => {
  return (
    <main className="desktop">
      {(() => {
        switch (activeWindow) {
          case "about-me":
            return <AboutWindow />;
          case "contact-me":
            return <DesktopWindow type={"contact-me"} />;
          case "projects":
            return <DesktopWindow type={"projects"} />;
          default:
            return <DesktopWindow type={"about-me"} />;
        }
      })()}
    </main>
  );
};

export default Desktop;
