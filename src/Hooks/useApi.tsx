import axios from 'axios';

const url = axios.create({
    baseURL: 'http://187.0.198.166:1259/rest'
})

export const useApi = () => ({
    signin: async ( user: string, pass: string ) => {
        const { data } = await url.post('/PSSLOGIN', { user, pass });
        return data;
    },
})