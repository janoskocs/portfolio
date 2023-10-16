import "./Task.scss";

import { kebabToTitle } from "src/utils/kebabToTitle";

const Task = ({ active, window, setActiveWindow, shrink }) => {
  const title = kebabToTitle(window);
  return (
    <button
      className={active ? `task task--active ${shrink} ` : `task ${shrink}`}
      onClick={() => setActiveWindow(window)}
    >
      <img src={`/images/icons/${window}.png`} alt="" className="task__icon" />
      <p className="task__text">{title}</p>
    </button>
  );
};
export default Task;
