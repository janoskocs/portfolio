import { routerType } from "@/router/types/router.types";

import { Dashboard } from "@/router/lazyImports/lazyImports.protected";

const protectedRoutes: routerType[] = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    title: "dashboard",
  },
];

export default protectedRoutes;
