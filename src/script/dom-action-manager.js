/**
 * DOMActionManager.js
 * A lightweight module to manage UI actions and state.
 */

const DOMActionManager = (() => {
  // Private registry for actions
  const actions = new Map();

  return {
    /**
     * Register a new action
     * @param {string} name - The action identifier
     * @param {function} fn - The function to execute
     */
    register(name, fn) {
      actions.set(name, fn);
    },

    /**
     * Execute a registered action
     * @param {string} name - The action to trigger
     * @param {Object} context - Data or elements passed to the action
     */
    run(name, context = {}) {
      if (actions.has(name)) {
        return actions.get(name)(context);
      }
      console.warn(`Action "${name}" not found.`);
    },

    /**
     * Auto-binds clicks to any element with a [data-action] attribute
     */
    initAutoBinder() {
      document.addEventListener("click", (e) => {
        const trigger = e.target.closest("[data-action]");
        if (trigger) {
          const actionName = trigger.getAttribute("data-action");
          this.run(actionName, { trigger, event: e });
        }
      });
    },
  };
})();

export default DOMActionManager;
