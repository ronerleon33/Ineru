import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SmartScales } from "./pages/SmartScales";
import { SIZ } from "./pages/SIZ";
import { Traffic } from "./pages/Traffic";
import { Shelves } from "./pages/Shelves";
import { Inventory } from "./pages/Inventory";
import { ThermalControl } from "./pages/ThermalControl";
import { VendAI } from "./pages/VendAI";
import { RailwayTracking } from "./pages/RailwayTracking";
import { Electromechanical } from "./pages/Electromechanical";
import { SmartEyeVector } from "./pages/SmartEyeVector";
import { CustomCV } from "./pages/CustomCV";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { Cases } from "./pages/Cases";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "smart-scales", Component: SmartScales },
      { path: "siz", Component: SIZ },
      { path: "traffic", Component: Traffic },
      { path: "shelves", Component: Shelves },
      { path: "inventory", Component: Inventory },
      { path: "thermal-control", Component: ThermalControl },
      { path: "vend-ai", Component: VendAI },
      { path: "railway-tracking", Component: RailwayTracking },
      { path: "electromechanical", Component: Electromechanical },
      { path: "smart-eye-vector", Component: SmartEyeVector },
      { path: "custom-cv", Component: CustomCV },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "cases", Component: Cases },
      { path: "*", Component: NotFound },
    ],
  },
]);
