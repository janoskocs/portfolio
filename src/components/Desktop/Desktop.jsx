import AboutMeWindow from "../AboutMeWindow";
import "./Desktop.scss";

const Desktop = ({ activeWindow }) => {
  return (
    <main className="desktop">
      {(() => {
        switch (activeWindow) {
          case "about-me":
            return <AboutMeWindow />;
          case "contact-me":
            return <h1>contact me</h1>;
          case "projects":
            return <h1>projects</h1>;
          default:
            return <AboutMeWindow />;
        }
      })()}
    </main>
  );
};

export default Desktop;
