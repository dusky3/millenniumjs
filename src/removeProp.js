/**
 * Remove a prop in any real DOM element
 * @module src/removeProp
 *
 * @param {object} element - Real DOM element
 * @param {string} propName - Prop name
 *
 */

export default function removeProp(element, propName) {
  if (propName === 'className') {
    propName = 'class'
  }
  element.removeAttribute(propName);
}
