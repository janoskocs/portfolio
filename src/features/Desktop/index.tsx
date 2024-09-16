/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useRef } from "react";
import DesktopIcons from "./components/DesktopIcons";
import styles from "./styles/Desktop.module.css";

type DesktopProps = {
  setIsStartMenuOpen: (_isStartMenuOpen: boolean) => void;
};
const Desktop = ({ setIsStartMenuOpen }: DesktopProps) => {
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
  return (
    <main className={styles.desktop}>
      <DesktopIcons setIsStartMenuOpen={setIsStartMenuOpen} />
      <article onMouseDown={initialiseDrag} ref={elemRef} className={styles.window}>
        <div> title X</div>
        <div> links</div>
        <div>content</div>
        <div>footer</div>
      </article>
    </main>
  );
};
export default Desktop;
