import { useState, useEffect, RefObject } from "react";

interface DragOptions {
  onPointerDown?: (_e: PointerEvent) => void;
  onPointerUp?: (_e: PointerEvent) => void;
  onPointerMove?: (_e: PointerEvent) => void;
  onDrag?: (_e: PointerEvent) => void;
}

const useDrag = (ref: RefObject<HTMLElement>, dependencies: unknown[] = [], options: DragOptions = {}) => {
  const { onPointerDown = () => {}, onPointerUp = () => {}, onPointerMove = () => {}, onDrag = () => {} } = options;

  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e: PointerEvent) => {
    e.stopPropagation();
    setIsDragging(true);
    onPointerDown(e);
  };

  const handlePointerUp = (e: PointerEvent) => {
    setIsDragging(false);
    onPointerUp(e);
  };

  const handlePointerMove = (e: PointerEvent) => {
    e.stopPropagation();
    onPointerMove(e);
    if (isDragging) {
      onDrag(e);
    }
  };

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("pointerdown", handlePointerDown, { once: true });
      element.addEventListener("pointerup", handlePointerUp, { once: true });
      element.addEventListener("pointermove", handlePointerMove, { once: true });

      // return () => {
      //   element.removeEventListener("pointerdown", handlePointerDown);
      //   element.removeEventListener("pointerup", handlePointerUp);
      //   element.removeEventListener("pointermove", handlePointerMove);
      // };
    }

    // return () => {};
  }, [...dependencies, isDragging]);

  return { isDragging };
};

export default useDrag;
