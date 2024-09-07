// https://github.com/ArnaudBarre/eslint-plugin-react-refresh/issues/25#issuecomment-1729071347

import { lazyImport } from "@/utils/lazyImport";

const Dashboard = lazyImport("../pages/Dashboard");

export { Dashboard };
