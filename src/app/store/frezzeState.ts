//for inmutability purposes
//this funtion frezze and object so that it cannot be amended
function deepFreeze (o) {
  Object.freeze(o);

  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop)
    && o[prop] !== null
    && (typeof o[prop] === "object" || typeof o[prop] === "function")
    && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
  
  return o;
};

//this is pass to redux middlewhere to freeze the state
export default function freezeState(store){
    return (next) =>(action)=>{
        const result = next(action);
        const state = store.getState();
        deepFreeze(state);
        return result;
    }
}
