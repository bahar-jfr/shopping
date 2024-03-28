import { Router } from "./src/router";
import { Main_Route } from "./src/router/routes";
import "./src/style/index.css";

if (location.pathname === "/") {
  Router().navigate(Main_Route);
} else {
  Router().navigate(location.pathname);
}
