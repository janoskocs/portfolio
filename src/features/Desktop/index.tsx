/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useRef } from "react";
import DesktopIcons from "./components/DesktopIcons";
import styles from "./styles/Desktop.module.css";

type DesktopProps = {
  setIsStartMenuOpen: (_isStartMenuOpen: boolean) => void;
};
const Desktop = ({ setIsStartMenuOpen }: DesktopProps) => {
  const minimisedClass = styles.minimised;
  const elemRef = useRef<HTMLDivElement | null>(null);
  const dragProps = useRef<
    undefined | { dragStartLeft: number; dragStartTop: number; dragStartX: number; dragStartY: number }
  >();

  const initialiseDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    const { target, clientX, clientY } = event;
    const { offsetTop, offsetLeft } = target as HTMLDivElement;
    const { left, top } = (elemRef.current as HTMLDivElement | null)?.getBoundingClientRect() || { left: 0, top: 0 };

    dragProps.current = {
      dragStartLeft: left - offsetLeft,
      dragStartTop: top - offsetTop,
      dragStartX: clientX,
      dragStartY: clientY,
    };
    window.addEventListener("mousemove", startDragging, false);
    window.addEventListener("mouseup", stopDragging, false);
  };

  const startDragging = ({ clientX, clientY }: { clientX: number; clientY: number }) => {
    if (dragProps.current) {
      (elemRef.current as HTMLDivElement)!.style.transform = `translate(${dragProps.current.dragStartLeft + clientX - dragProps.current.dragStartX}px, ${dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY}px)`;
    }
  };

  const stopDragging = () => {
    window.removeEventListener("mousemove", startDragging, false);
    window.removeEventListener("mouseup", stopDragging, false);
  };

  const minimise = (windowName: string) => {
    console.log("minimise", windowName);
    (elemRef.current as HTMLDivElement).classList.add(minimisedClass);
  };

  const closeWindow = (windowName: string) => {
    console.log(windowName);
  };

  return (
    <main className={styles.desktop}>
      <DesktopIcons setIsStartMenuOpen={setIsStartMenuOpen} />
      <article ref={elemRef} className={styles.window}>
        <div className={styles.titlebar} onMouseDown={initialiseDrag}>
          <div className={styles["title-container"]}>
            <img className={styles.icon} src="/images/icons/about-me.png" alt="icon" />
            <h2 className={styles.title}>Title</h2>
          </div>
          <div className={styles["window-controls"]}>
            <button
              onClick={() => {
                minimise("window");
              }}
              className={styles["window-control"]}
            >
              _
            </button>
            <button
              onClick={() => {
                closeWindow("window");
              }}
              className={styles["window-control"]}
            >
              +
            </button>
          </div>
        </div>
        <div> links</div>
        <div>content</div>
        <div>footer</div>
      </article>
    </main>
  );
};
export default Desktop;

