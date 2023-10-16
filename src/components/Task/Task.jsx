import "./Task.scss";

import { kebabToTitle } from "src/utils/kebabToTitle";

const Task = ({ active, window, setActiveWindow }) => {
  const title = kebabToTitle(window);
  return (
    <button
      className={active ? "task task--active" : "task"}
      onClick={() => setActiveWindow(window)}
    >
      <img src={`/images/icons/${window}.png`} alt="" className="task__icon" />
      <p className="task__text">{title}</p>
    </button>
  );
};
export default Task;
