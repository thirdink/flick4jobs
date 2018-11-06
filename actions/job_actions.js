import axios from 'axios'
import reverseGeocode from 'latlng-to-zip';
import { FETCH_JOBS ,LIKE_JOB ,CLEAR_LIKED_JOBS} from './types'
import JOB_DATA from './IndeedJobData.json';
import qs from 'qs';

const JOB_ROOT_URL = 'https://jobs.github.com/positions.json?';

const JOB_QUERY_PARAMS = {
    // publisher: '4201738803816157',
    // format: 'json',
    // v: '2',
    // lat: 1,
    // long:1,
    radius: 10,
    full_time:true,
    description: 'javascript'
}
const buildJobsUrl = (zip) => {
    const query = qs.stringify({...JOB_QUERY_PARAMS,location: zip});
    return `${JOB_ROOT_URL}${query}`
}


export const fetchJobs = (region, callback) => async(dispatch) => {
    try {
        // let zip = await reverseGeocode(region)
        // const url = buildJobsUrl(zip)
        const data = JOB_DATA;
        // let { data } = await axios.get(url);
        dispatch ({
            type: FETCH_JOBS,
            payload: data 
        })
        callback();
        // console.log(data);
    } catch(e){
        console.error(e);
    }
    
}

export const likeJob = (job) => {
    return {
        payload: job,
        type: LIKE_JOB
    }
}
export const clearLikedJobs = () => {
    return { 
        type: CLEAR_LIKED_JOBS 
    }
}