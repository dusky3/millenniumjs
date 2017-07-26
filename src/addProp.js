/**
 * Add a new prop in any real DOM element
 * @module src/addProp
 *
 * @param {object} element - Real DOM element
 * @param {string} propName - New prop name
 * @param {string} propValue - New prop value
 *
 */

export default function addProp(element, propName, propValue) {
  if (propName === 'className') {
    propName = 'class'
  }

  element.setAttribute(propName, propValue);
}
