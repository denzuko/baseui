import Vue from 'vue'

export default class ServiceBus {
    constructor() {
        Vue.prototype.$bus = new Vue();
    }
}
