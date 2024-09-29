export type WindowType = {
  id: number;
  appName: string;
  minimised: boolean;
  focus: number;
  position: { x: number; y: number };
  setWindows: (_value: React.SetStateAction<WindowType[]>) => void;
};

