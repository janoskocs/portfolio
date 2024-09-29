/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRef, useState, useEffect } from "react";
import styles from "./Window.module.css";
import useDrag from "@/hooks/useDrag";
import { WindowType } from "@/pages/Main/types";
type WindowProps = {
  children: React.ReactNode | null;
  setWindows: (_value: React.SetStateAction<WindowType[]>) => void;
};
const Window = ({ children, appName, position, focus, minimised, setWindows }: WindowProps & WindowType) => {
  const minimise = (windowName: string) => {
    const windowElement = windowRef.current as HTMLDivElement;
    windowElement.style.removeProperty("transform");
    windowElement.style.transition = "0.6s all";

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
    setWindows((prevWindows) => {
      return prevWindows.filter((window) => window.appName !== windowName);
    });
  };

  console.log(minimised);
  const windowRef = useRef<HTMLElement>(null);
  const [translate, setTranslate] = useState({ x: position.x, y: position.y });
  const [scale, setScale] = useState(1);

  const handleDrag = (e: PointerEvent) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };

  const bringWindowToFront = () => {
    setWindows((prevWindows) => {
      const maxFocus = Math.max(...prevWindows.map((window) => window.focus));
      return prevWindows.map((window) => {
        if (window.appName === appName) {
          return { ...window, focus: maxFocus + 1 };
        }
        return window;
      });
    });
  };

  useEffect(() => {
    const element = windowRef.current;
    const handleClick = () => {
      bringWindowToFront();
    };
    if (element) {
      element.addEventListener("pointerdown", handleClick);
    }
    return () => {
      if (element) {
        element.removeEventListener("pointerdown", handleClick);
      }
    };
  }, []);

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
        zIndex: focus,
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
              closeWindow(appName);
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

