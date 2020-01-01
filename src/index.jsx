// @flow
/**
 * @author [Ehtesham Ul Haq]
 */

import ReactDOM from "react-dom"
import { ApplicationRoutes } from "./routes"

let applicationRoutes = new ApplicationRoutes()
ReactDOM.render(applicationRoutes, (document.getElementById("root"): any))
