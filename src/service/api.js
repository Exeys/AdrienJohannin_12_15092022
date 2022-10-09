import axios from "axios";

class Api {
    constructor() {
        this.baseURL = 'http://localhost:3000/user/'
    }

    async getUserData(id) {
        const response = await axios.get(this.baseURL + id)
        return response.data.data
    }

    async getUserActivity(id) {
        const response = await axios.get(this.baseURL + id + '/activity')
        return response.data.data
    }

    async getUserAvgSessions(id) {
        const response = await axios.get(this.baseURL + id + '/average-sessions')
        return response.data.data
    }

    async getUserPerformance(id) {
        const response = await axios.get(this.baseURL + id + '/performance')
        return response.data.data
    }

}

export default Api