import AboutWindow from "../AboutWindow";
import ContactWindow from "../ContactWindow";
import ProjectsWindow from "../ProjectsWindow";
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
            return (
              <ProjectsWindow
                handleOpenWindow={handleOpenWindow}
                handleCloseWindow={handleCloseWindow}
              />
            );
          default:
            return " ";
        }
      })()}
    </main>
  );
};

export default Desktop;
