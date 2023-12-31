import contains from './contains';
import ownerDocument from './ownerDocument';
import scrollLeft from './scrollLeft';
import scrollTop from './scrollTop';
export default function offset(node) {
  var doc = ownerDocument(node);
  var box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  var docElem = doc && doc.documentElement; // Make sure it's not a disconnected DOM node

  if (!docElem || !contains(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
  box = {
    top: box.top + scrollTop(node) - (docElem.clientTop || 0),
    left: box.left + scrollLeft(node) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}