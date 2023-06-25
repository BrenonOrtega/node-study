const createReducerFor = (enabledActions) =>
  (state, { action, key, value, applyTransform }) => {
    const existingActions = Object.values(enabledActions).map(x => x.toLowerCase());

    if (existingActions.includes(action?.toLowerCase())) {
      const actualValue = state[key];
      const newValue = applyTransform?.(actualValue, value) ?? value;

      const newState = { ...state, [ key ]: newValue };

      return newState;
    }

    throw new Error(`Unknown action type ${action} to update key` +
      ` ${key} with ${applyTransform ? 'mutation function to' : ''} value ${value}`);
  };

export default createReducerFor;