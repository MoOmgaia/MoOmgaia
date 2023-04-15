import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "d70af8d053bacad4";

function Notebook() {
  const cloudsRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "clouds") return new Inspector(cloudsRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={cloudsRef} />
    </>
  );
}

export default Notebook;