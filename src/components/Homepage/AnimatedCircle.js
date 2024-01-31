// AnimatedCircle.js
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const AnimatedCircle = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const circle = svg.append("circle");

    const bounce = () => {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;

      circle
        .transition()
        .duration(2000)
        .ease(d3.easeCubicInOut)
        .attr("cx", randomX)
        .attr("cy", randomY)
        .on("end", bounce)
        .style("fill", "#e9f1df")
        .attr("r", 20)
    };

    bounce();
  }, []);

  return (
    <svg
      ref={svgRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 9999 }}
    />
  );
};

export default AnimatedCircle;