import React, {useRef, useEffect} from "react";
import {Runtime, Inspector, Library} from "@observablehq/runtime";
import {notebook} from "./notebook/index.js";

function Clouds() {
  let viewbox:HTMLFormElement = document.getElementById("hero_back");
  // Initialize the Observable Runtime, telling it to use our local copy of D3
  // rather than loading one from a CDN.
  const runtime = new Runtime(new Library(name => {
    switch (name) {
      case "d3@6": return d3;
    }
  }));
  const main = runtime.module(notebook, Inspector.into(viewbox));

}

export default Clouds;