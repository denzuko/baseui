import Vue from 'vue'
import axios from 'axios'

export default class Api {
    constructor(endpoint, withCredentials) {
        this.endpoint = endpoint || 'https://jsonplaceholder.typicode.com';
        this.withCredentials = withCredentials || false

        Vue.prototype.$http = axios.create({
            baseURL: this.endpoint,
            withCredentials: this.withCredentials,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}
