import "./Taskbar.scss";

const Taskbar = () => {
  return (
    <footer className="taskbar">
      <button className="taskbar__start">Start</button>
      <section className="taskbar__tasks"></section>
      <section className="taskbar__time"></section>
    </footer>
  );
};

export default Taskbar;
