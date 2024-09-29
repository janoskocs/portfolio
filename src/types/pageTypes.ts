export type AppPageType = {
  position: { x: number; y: number };
  focus: number;
  minimised: boolean;
  setWindows: (_windows: Window[]) => void;
};
