import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./home/home";
import DefaultChart from "./default-chart/default-chart";
import PanZoomChart from "./pan-zoom-chart/pan-zoom-chart";
import CustomNodeChart from "./custom-node-chart/custom-node-chart";
import ExportChart from "./export-chart/export-chart";
import DragDropChart from "./drag-drop-chart/drag-drop-chart";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <nav>
          <NavLink to="/" exact activeClassName="selected">Home</NavLink>
          <NavLink to="/default-chart" activeClassName="selected">Deault Chart</NavLink>
          <NavLink to="/pan-zoom-chart" activeClassName="selected">Pan & Zoom Chart</NavLink>
          <NavLink to="/custom-node-chart" activeClassName="selected">Custom Node Chart</NavLink>
          <NavLink to="/export-chart" activeClassName="selected">Export Chart</NavLink>
          <NavLink to="/drag-drop-chart" activeClassName="selected">Drap & Drop Chart</NavLink>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/default-chart" component={DefaultChart} />
        <Route path="/pan-zoom-chart" component={PanZoomChart} />
        <Route path="/custom-node-chart" component={CustomNodeChart} />
        <Route path="/export-chart" component={ExportChart} />
        <Route path="/drag-drop-chart" component={DragDropChart} />
      </div>
    </Router>
  );
};

export default App;
