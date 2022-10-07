import axios from "axios";

class Api {
    constructor() {
        this.baseURL = 'http://localhost:3000/user/'
    }

    async getUserData(id) {
        const response = await axios.get(this.baseURL + id)
        return response.data.data
    }

    getUserActivity(id) {
        return axios.get(this.baseURL + id + '/activity')
    }

    getUserAvgSessions(id) {
        return axios.get(this.baseURL + id + '/average-sessions')
    }

    getUserPerformance(id) {
        return axios.get(this.baseURL + id + '/performance')
    }

}

export default Api