import { routerType } from "@/router/types/router.types";

import { Main } from "@/router/lazyImports/lazyImports.public";

const publicRoutes: routerType[] = [
  {
    path: "/",
    element: <Main />,
    title: "main",
  },
];

export default publicRoutes;

