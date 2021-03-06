import isEventProp from './../helpers/isEventProp';
import addEventListener from './../helpers/addEventListener';
import addProp from './../helpers/addProp';

/**
 * Generate real DOM elements.
 * @module src/diff/makeElements/makeElements
 *
 * @param {object} vNode - virtual DOM representation
 *
 * @returns Real DOM elements.
 *
 */

export default function makeElements(vNode) {

  // Only text node
  // --------------------------
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  // Element node
  // --------------------------
  const element = document.createElement(vNode.type);

  // props
  // --------------------------
  if(vNode.props) {
    Object.keys(vNode.props).forEach(propName => {
      if(isEventProp(propName)) {
        addEventListener(element, propName, vNode.props[propName]);
      } else {
        addProp(element, propName, vNode.props[propName]);
      }
    });
  }

  // children
  // --------------------------

  // text node
  if(typeof vNode.children === 'string') {

    const textNode = document.createTextNode(vNode);
    element.appendChild(textNode);

  } else {

    // Elements nodes
    if(vNode.children) {
      const appendElement = element.appendChild.bind(element);
      vNode.children.map(makeElements).forEach(appendElement);
    }

  }

  return element;

}
