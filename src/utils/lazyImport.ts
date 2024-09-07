import React from "react";
export const lazyImport = (path: string) => React.lazy(() => import(/* @vite-ignore */ `${path}`));
