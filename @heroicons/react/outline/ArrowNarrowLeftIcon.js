const React = require("react");

function ArrowNarrowLeftIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7 16l-4-4m0 0l4-4m-4 4h18"
  }));
}

const ForwardRef = React.forwardRef(ArrowNarrowLeftIcon);
module.exports = ForwardRef;