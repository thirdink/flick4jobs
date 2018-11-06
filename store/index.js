import { Platform } from 'react-native';
import { createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from '../reducers';
import { composeWithDevTools } from 'remote-redux-devtools'
import devTools from 'remote-redux-devtools';

// const composeEnhancers = composeWithDevTools({ realtime: true, port:19002})
const store = createStore(
    reducers,
    {},
    composeWithDevTools(
        applyMiddleware(thunk)
        // devTools({
        //     name: Platform.OS,
        //     hostname: 'localhost',
        //     port: 19002
        //   })
    )
);
export default store;


