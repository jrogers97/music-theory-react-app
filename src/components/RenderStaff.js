import Vex from 'vexflow';
import React from 'react';

const {
    Accidental,
    Formatter,
    Stave,
    StaveNote,
    Renderer,
} = Vex.Flow;

class Notes extends React.Component {

    render() {
        return <div id="staff" ref="outer" style={{
            padding: 0,
            borderRadius: 0,
            display: "inline-block",
        }}>
        </div>;
    }
    componentDidMount() {
        const {chord} = this.props;

        const svgContainer = document.createElement('div');
        svgContainer.id = "staff-div";
        const renderer = new Renderer(svgContainer, Renderer.Backends.SVG);
        renderer.resize(200,400);
        const ctx = renderer.getContext();
        const stave = new Stave(130, 40, 120);  // x, y, width
        stave.addClef("treble").setContext(ctx).draw();
        const bb = Formatter.FormatAndDraw(ctx, stave, chord);

        const svg = svgContainer.childNodes[0];
        const padding = 10;
        {/*const half = padding / 2;*/}
        {/*svg.style.top = -bb.y + half + Math.max(0, (100 - bb.h) * 2/3) + "px"; */}
        svg.style.height = Math.max(200, bb.h);
        svg.style.left = "0px";
        svg.style.width = 400 + "px";
        svg.style.position = "absolute";
        svg.style.overflow = "visible";
        svgContainer.style.height = Math.max(200, bb.h + padding) + "px";
        svgContainer.style.width = 400 + "px";
        svgContainer.style.position = "relative";
        svgContainer.style.display = "inlineBlock";

        {/*this.refs.outer.appendChild(svgContainer); */}
        document.getElementById("staff").appendChild(svgContainer);
    }

    componentDidUpdate() {
        const {chord} = this.props;

        const svgContainer = document.createElement('div');
        svgContainer.id = "staff-div";
        const renderer = new Renderer(svgContainer, Renderer.Backends.SVG);
        renderer.resize(200,400);
        const ctx = renderer.getContext();
        const stave = new Stave(130, 40, 120);  // x, y, width
        stave.addClef("treble").setContext(ctx).draw();
        const bb = Formatter.FormatAndDraw(ctx, stave, chord);

        const svg = svgContainer.childNodes[0];
        const padding = 10;
        {/*const half = padding / 2;*/}
        {/*svg.style.top = -bb.y + half + Math.max(0, (100 - bb.h) * 2/3) + "px"; */}
        svg.style.height = Math.max(200, bb.h);
        svg.style.left = "0px";
        svg.style.width = 400 + "px";
        svg.style.position = "absolute";
        svg.style.overflow = "visible";
        svgContainer.style.height = Math.max(200, bb.h + padding) + "px";
        svgContainer.style.width = 400 + "px";
        svgContainer.style.position = "relative";
        svgContainer.style.display = "inlineBlock";

      {/* this.refs.outer.appendChild(svgContainer); */}
       document.getElementById("staff").replaceChild(svgContainer,document.getElementById("staff-div"));
    }

}

export default Notes;
