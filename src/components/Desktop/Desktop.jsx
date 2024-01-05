import AboutWindow from "../AboutWindow";
import CVWindow from "../CVWindow";
import ContactWindow from "../ContactWindow";
import ProjectDetailWindow from "../ProjectDetailWindow";
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
          case "my-CV":
            return <CVWindow handleCloseWindow={handleCloseWindow} />;

          case "memovault":
            return (
              <ProjectDetailWindow
                activeProject="memovault"
                handleCloseWindow={handleCloseWindow}
                handleOpenWindow={handleOpenWindow}
              />
            );
          case "sunset-restaurant":
            return (
              <ProjectDetailWindow
                activeProject="sunset-restaurant"
                handleCloseWindow={handleCloseWindow}
                handleOpenWindow={handleOpenWindow}
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
