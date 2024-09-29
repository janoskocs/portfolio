import { useState, useEffect, RefObject } from "react";

interface DragOptions {
  onPointerDown?: (_e: PointerEvent) => void;
  onPointerUp?: (_e: PointerEvent) => void;
  onPointerMove?: (_e: PointerEvent) => void;
  onDrag?: (_e: PointerEvent) => void;
}

const useDrag = (ref: RefObject<HTMLElement>, deps: unknown[] = [], options: DragOptions = {}) => {
  const { onPointerDown = () => {}, onPointerUp = () => {}, onPointerMove = () => {}, onDrag = () => {} } = options;

  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e: PointerEvent) => {
    setIsDragging(true);
    onPointerDown(e);
  };

  const handlePointerUp = (e: PointerEvent) => {
    setIsDragging(false);
    onPointerUp(e);
  };

  const handlePointerMove = (e: PointerEvent) => {
    onPointerMove(e);
    if (isDragging) {
      onDrag(e);
    }
  };

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("pointerdown", handlePointerDown);
      element.addEventListener("pointerup", handlePointerUp);
      element.addEventListener("pointermove", handlePointerMove);

      return () => {
        element.removeEventListener("pointerdown", handlePointerDown);
        element.removeEventListener("pointerup", handlePointerUp);
        element.removeEventListener("pointermove", handlePointerMove);
      };
    }

    return () => {};
  }, [...deps, isDragging]);

  return { isDragging };
};

export default useDrag;
