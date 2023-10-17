import AboutWindow from "../AboutWindow";
import DesktopWindow from "../DesktopWindow";
import ContactWindow from "../ContactWindow";
import "./Desktop.scss";

const Desktop = ({ handleOpenWindow, handleCloseWindow, activeWindow }) => {
  return (
    <main className="desktop">
      {(() => {
        switch (activeWindow) {
          case "about-me":
            return (
              <AboutWindow
                handleOpenWindow={handleOpenWindow}
                handleCloseWindow={handleCloseWindow}
              />
            );
          case "contact-me":
            return (
              <ContactWindow
                handleOpenWindow={handleOpenWindow}
                handleCloseWindow={handleCloseWindow}
              />
            );
          case "projects":
            return <DesktopWindow type={"projects"} />;
          default:
            return " ";
        }
      })()}
    </main>
  );
};

export default Desktop;
