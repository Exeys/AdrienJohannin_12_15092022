import axios from "axios";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mockedData'

/**
 * Class grouping query functions for SportSee API
 */
class Api {
    /**
     * Default config URL for axios queries
     * change mocked to true if you want use mocked datas
     */
    constructor() {
        this.baseURL = 'http://localhost:3000/user/'
        this.mocked = false
    }

    /**
     * Fetch the main data for id
     * @param {string} id known as user id
     * @returns {Object}
     */
    async getUserData(id) {
        if (!this.mocked) {
            const response = await axios.get(this.baseURL + id)
            return response.data.data
        }
        return USER_MAIN_DATA
    }

    /**
     * Fetch the data relative to activity for id
     * @param {string} id known as user id
     * @returns {Object}
     */
    async getUserActivity(id) {
        if (!this.mocked) {
            const response = await axios.get(this.baseURL + id + '/activity')
            return response.data.data
        }
        return USER_ACTIVITY
    }

    /**
     * Fetch the data relative to sessions (sport) for id
     * @param {string} id 
     * @returns {Object}
     */
    async getUserAvgSessions(id) {
        if (!this.mocked) {
            const response = await axios.get(this.baseURL + id + '/average-sessions')
            return response.data.data
        }
        return USER_AVERAGE_SESSIONS
    }
    /**
     * Fetch the data relative to the performance for id
     * @param {string} id 
     * @returns {Object}
     */
    async getUserPerformance(id) {
        if (!this.mocked) {
            const response = await axios.get(this.baseURL + id + '/performance')
            return response.data.data
        }
        return USER_PERFORMANCE
    }

}

export default Api