import axios from 'axios';

export class VehicleAPI {
    #http;

    constructor() {
        this.#http = axios.create({
            baseURL: 'https://api.example.com/vehicles',
        });
    }
    getVehicles() {
        return this.#http.get('/');
    }
}