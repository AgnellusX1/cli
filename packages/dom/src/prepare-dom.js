// Returns a mostly random uid.
export function uid() {
  return `_${Math.random().toString(36).substr(2, 9)}`;
}

export function markElement(domElement, disableShadowDOM) {
  // Mark elements that are to be serialized later with a data attribute.
  if (['input', 'textarea', 'select', 'iframe', 'canvas', 'video', 'style'].includes(domElement.tagName?.toLowerCase())) {
    domElement.setAttribute('data-percy-element-id', uid());
  }

  // add special marker for shadow host
  if (!disableShadowDOM && domElement.shadowRoot) {
    domElement.setAttribute('data-percy-shadow-host', '');
    domElement.setAttribute('data-percy-element-id', uid());
  }
}

export default markElement;
