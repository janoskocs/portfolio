import { LazyExoticComponent, ComponentType } from "react";

export type Window = {
  id: number;
  component: React.ReactNode | LazyExoticComponent<ComponentType<unknown>>;
  appName: string;
};
