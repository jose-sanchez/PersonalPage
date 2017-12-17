//applyMiddleware will allow us to execute actions before the reducer is called
//like logging the state or frezzing it for inmutability
import {createStore,applyMiddleware,compose,GenericStoreEnhancer} from 'redux';
import {reducer} from './reducer';
import {IAppState} from './IAppState';
import freezeState from './frezzeState';

//code for enable devToolsExtension for redux---------------------------
declare var window:any;

const devToolsExtension:GenericStoreEnhancer = (window.devToolsExtension)
?window.devToolsExtension(): (f) => f;
//----------------------------------------------------------------------

//Create store which will store the states
//export const store = createStore<IAppState>(reducer);

//Option with devToolsExtensions
//export const store = createStore<IAppState>(reducer,
 //   compose(devToolsExtension) as GenericStoreEnhancer);
//\Option with inmutability
export const store = createStore<IAppState>(reducer,
    compose(applyMiddleware(freezeState),devToolsExtension) as GenericStoreEnhancer);

