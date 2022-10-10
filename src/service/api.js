import axios from "axios";

/**
 * Class grouping query functions for SportSee API
 */
class Api {
    /**
     * Default config URL for axios queries
     */
    constructor() {
        this.baseURL = 'http://localhost:3000/user/'
    }

    /**
     * Fetch the main data for id
     * @param {string} id known as user id
     * @returns {Array}
     */
    async getUserData(id) {
        const response = await axios.get(this.baseURL + id)
        return response.data.data
    }

    /**
     * Fetch the data relative to activity for id
     * @param {string} id known as user id
     * @returns {Array}
     */
    async getUserActivity(id) {
        const response = await axios.get(this.baseURL + id + '/activity')
        return response.data.data
    }

    /**
     * Fetch the data relative to sessions (sport) for id
     * @param {string} id 
     * @returns {Array}
     */
    async getUserAvgSessions(id) {
        const response = await axios.get(this.baseURL + id + '/average-sessions')
        return response.data.data
    }
    /**
     * Fetch the data relative to the performance for id
     * @param {string} id 
     * @returns {Array}
     */
    async getUserPerformance(id) {
        const response = await axios.get(this.baseURL + id + '/performance')
        return response.data.data
    }

}

export default Api