/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRef, useState } from "react";
import styles from "./Window.module.css";
import useDrag from "@/hooks/useDrag";
type WindowProps = {
  children: React.ReactNode | null;
  position: { x: number; y: number };
  zIndex: number;
};
const Window = ({ children, position, zIndex }: WindowProps) => {
  const minimise = (windowName: string) => {
    const windowElement = windowRef.current as HTMLDivElement;
    windowElement.style.removeProperty("transform");
    windowElement.style.transition = "0.6s all";

    setTranslate({ x: -300, y: 1000 });

    let opacity = 1;
    const opacityInterval = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(opacityInterval);
      }
      windowElement.style.opacity = `${opacity}`;
      setScale(opacity);
      opacity -= 0.2;
    }, 50);

    setTimeout(() => {
      windowElement.style.removeProperty("transition");
    }, 600);
    console.log(windowName);
  };

  const closeWindow = (windowName: string) => {
    console.log(windowName);
  };

  const windowRef = useRef<HTMLDivElement>(null);

  const [translate, setTranslate] = useState({ x: position.x, y: position.y });
  const [scale, setScale] = useState(1);

  const handleDrag = (e: PointerEvent) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };

  useDrag(windowRef, [translate], {
    onDrag: handleDrag,
  });

  return (
    <article
      ref={windowRef}
      className={styles.window}
      style={{
        transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
        scale: `${scale}`,
        zIndex: zIndex,
      }}
    >
      <div className={styles.titlebar}>
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
            &#9866;
          </button>
          <button
            onClick={() => {
              closeWindow("window");
            }}
            className={styles["window-control"]}
          >
            &#10006;
          </button>
        </div>
      </div>
      {children}
    </article>
  );
};
export default Window;
