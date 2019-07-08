import axios from 'axios/index';

const baseUrl = "/api";

export default {
    getRadarData: () => {
        return axios.get(`${baseUrl}/radar/data`);
    },
    detectInvaders: () => {
        return axios.get(`${baseUrl}/radar/detect-invaders`);
    }
}

