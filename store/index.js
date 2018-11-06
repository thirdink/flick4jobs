import { Platform } from 'react-native';
import { createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from '../reducers';
import { composeWithDevTools } from 'remote-redux-devtools'
import devTools from 'remote-redux-devtools';
import {persistStore, autoRehydrate } from 'redux-persist'
import {AsyncStorage} from 'react-native'

// const composeEnhancers = composeWithDevTools({ realtime: true, port:19002})
const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
        // devTools({
        //     name: Platform.OS,
        //     hostname: 'localhost',
        //     port: 19002
        //   })
    )
);

persistStore(store , {
    storage : AsyncStorage , whitelist: ['likedJobs']
})
export default store;


