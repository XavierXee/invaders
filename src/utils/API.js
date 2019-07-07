import axios from 'axios/index';
const headers = {
    'Content-Type': 'application/json'
};

const baseUrl = "/api";

export default {
    getRadarData: () => {
        return axios.get(`${baseUrl}/radar/data`);
    },
    detectInvaders: (radarData, invadersData) => {
        return axios.get(`${baseUrl}/radar/detect-invaders`);
    }
    /*
    detectInvaders: (radarData, invadersData) => {
        return axios.post(`${baseUrl}/detect`);
    }
    */
}

