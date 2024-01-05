import DividerLine from "../DividerLine";
import "./ProjectView.scss";

const ProjectView = ({ selectedProjectDetails }) => {
  if (selectedProjectDetails) {
    return (
      <section className="view">
        <h3 className="view__title">
          C:\Projects\{selectedProjectDetails[0].title}
        </h3>
        <p className="view__description">
          {selectedProjectDetails[0].description}
        </p>

        <DividerLine orientation="horizontal" colour={true} />
      </section>
    );
  }

  if (!selectedProjectDetails) {
    return (
      <section className="view">
        <h3 className="view__title">C:\Projects</h3>
        <p className="view__description">
          Please select an app below to learn more about the projects.
        </p>
        <DividerLine orientation="horizontal" colour={true} />
      </section>
    );
  }
};
export default ProjectView;
