import { useRoutes } from "react-router-dom";

import protectedRoutes from "@/router/routes/protected.routes";
import publicRoutes from "@/router/routes/public.routes";

import { Suspense } from "react";
import Spinner from "@components/Spinner/index";
import { Main } from "@/router/lazyImports/lazyImports.public";

export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: "/",
      element: <Main />,
    },
  ];

  const auth = { user: false };

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return (
    <>
      <Suspense fallback={<Spinner />}>{element}</Suspense>
    </>
  );
};
