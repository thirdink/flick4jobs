import {
    AsyncStorage
} from 'react-native'
import { Facebook} from 'expo';

import {
    FACEBOOK_LOGIN_SUCCESS,FACEBOOK_LOGIN_FAIL
} from './types'

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.setItem('fb_token', token);

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token')
    if (token) {
        // dispatch an action FB login is done
        dispatch( {
            type: FACEBOOK_LOGIN_SUCCESS,
            payload: token
        })
    } else {
        // Start up FB login Process
            doFacebookLogin(dispatch);

    }
}
const doFacebookLogin= async (dispatch) => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('326171478115475',{
        permissions: ['public_profile']
    });
    if(type === 'cancel'){
        return dispatch ({
            type: FACEBOOK_LOGIN_FAIL
        });
    }
   await AsyncStorage.setItem('fb_token', token);
   dispatch({
       type: FACEBOOK_LOGIN_SUCCESS,
       payload: token
   })
}