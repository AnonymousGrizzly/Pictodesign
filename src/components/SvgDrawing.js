import React from 'react'
import "../design/SvgDrawing.css"

export default function SvgDrawing() {
    const svg = document.getElementById("svgPath");
    const length = svg.getTotalLength();
    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;

    return (
        <div>
            
        </div>
    )
}
