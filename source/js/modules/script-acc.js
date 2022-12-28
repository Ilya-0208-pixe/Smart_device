const Accordions = (function () {
  const closeOthers = function (current, parent) {
    let opened = Array.from(
        parent.querySelectorAll('.accordion__sections[open]')
    );
    opened.forEach(function (accordion) {
      if (accordion === current) {
        return;
      }
      accordion.removeAttribute('open');
    });
  };

  const toggle = function (event, selector) {
    let parent = event.target.closest(selector);
    if (!parent) {
      return;
    }
    if (!event.target.hasAttribute('open')) {
      return;
    }
    closeOthers(event.target, parent);
  };

  const Constructor = function (selector) {
    const publicAPIs = {};
    const toggleHandler = function (event) {
      toggle(event, selector);
    };
    publicAPIs.destroy = function () {
      document.removeEventListener('toggle', toggleHandler, true);
    };
    publicAPIs.init = function () {
      if (!selector || typeof selector !== 'string') {
        throw new Error('Please provide a valid selector');
      }
      document.addEventListener('toggle', toggleHandler, true);
    };
    publicAPIs.init();
    return publicAPIs;
  };
  return Constructor;
})();

export const accordion = function () {
  if (document.documentElement.clientWidth < 768) {
    let opened = Array.from(
        document.querySelectorAll('.accordion__sections[open]')
    );
    if (opened) {
      opened.forEach(function (item) {
        item.removeAttribute('open');
      });
    }
    // eslint-disable-next-line
    const accordionSection = new Accordions('[data-accordion]');
  }
};
