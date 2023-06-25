const createReducerFor = (enabledActions) =>
  (state, { action, key, value, applyTransform }) => {
    const existingActions = Object.values(enabledActions);

    if (!existingActions.includes(action)) {
      throw new Error(`Unknown action type ${action} to update key` +
        ` ${key} with ${applyTransform ? 'mutation function to' : ''} value ${value}`);
    }
    
    const actualValue = state[ key ];

    const newValue = getAssignmentValue(action.applyTransform, actualValue, value);

    const newState = { ...state, [ key ]: newValue };

    return newState;
  };



const getAssignmentValue = (applyTransform, actualValue, value) => {

  if (applyTransform) {
    return applyTransformToValue(applyTransform, actualValue, value);
  }

  assertAssignmentIsValid(actualValue, value);
  return value;
};


const applyTransformToValue = (applyTransform, actualValue, value) => {
  const actualValueType = typeof actualValue;
  const newValue = applyTransform(actualValue, value);
  const newValueType = typeof newValue;
  const canBeAssigned = actualValueType === newValueType;

  if (!canBeAssigned) {
    throw new Error(`Invalid transformation for value ${value}, cannot assign type ${newValueType} to ${actualValueType}.`);
  }

  return newValue;
}

const assertAssignmentIsValid = (actualValue, value, propertyKey) => {
  const actualValueType = typeof actualValue;
  const valueType = typeof value;
  const sameTypes = actualValueType === valueType;

  if (!sameTypes) {
    throw new Error(`Invalid assignment for value ${value}, expected new value to be of type ${actualValueType}` +
      ` but instead the assignment was ${valueType}.`);
  }

  if ([actualValueType, valueType].every(x => x === typeof Object))
  {
    const actualKeys = Object.keys(actualValue);
    const valueKeys = Object.keys(value);

    const missingKeys = actualKeys.filter(key => valueKeys.some(k => k === key));

    console.warn(`Assignment can be made, but these keys are missing in the update value for property ${propertyKey}. `+ 
      `Missing properties: ${missingKeys}`);
  }
}
export default createReducerFor;