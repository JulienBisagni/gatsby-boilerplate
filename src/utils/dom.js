export default {
  getScrollTop: () => {
    const supportPageOffset = window.pageXOffset !== undefined;
    const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';

    const scrollLeft = supportPageOffset
      ? window.pageXOffset
      : isCSS1Compat
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft;

    const scrollTop = supportPageOffset
      ? window.pageYOffset
      : isCSS1Compat
      ? document.documentElement.scrollTop
      : document.body.scrollTop;

    return scrollTop;
  },

  hasClass: (node, className) => {
    node.classList.contains(className);
  },
  addClass: (node, className) => {
    node.classList.add(className);
  },
  removeClass: (node, className) => {
    node.classList.remove(className);
  },
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const scrollToNode = (selector, { fallback = true, offset } = {}) => {
  const node = document.querySelector(selector);
  const offsetVal = offset || -100;
  if (node) {
    const rect = node.getBoundingClientRect();
    window.scrollTo(0, rect.top + window.scrollY + offsetVal);
  } else if (fallback) {
    scrollToTop();
  }
};
