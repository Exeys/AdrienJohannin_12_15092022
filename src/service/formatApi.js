/**
 * Class grouping format functions for api queries
 */
class FormatApi {

    /**
     * Return the formated response for average sessions of user
     * @param {Object} data 
     * @returns {Object}
     */
    formatAvgSessions(data) {

        const days = { 0: 'L', 1: 'M', 2: 'M', 3: 'J', 4: 'V', 5: 'S', 6: 'D' };

        data.sessions.map((item, i) => (item.day = days[i]))
        return data;
    }

    /**
     * Return the formated response for performance of user
     * @param {Object} data 
     * @returns {Object}
     */
    formatPerformance(data) {
        return data.map(item => {
            return {
                value: item.value,
                kind: this.translateKind(data.kind[item.kind])

            }
        })

    }
    /**
     * Return the translation for string parameter
     * @param {String} string 
     * @returns {String}
     */
    translateKind(string) {
        switch (string) {
            case 'energy': return "Energie";
            case 'strength': return "Force";
            case 'cardio': return "Cardio";
            case 'speed': return "Vitesse";
            case 'intensity': return "Intensité";
            case 'endurance': return "Endurance";
            default: return string;
        }
    }

    /**
     * Return the formated response for score of user
     * @param {Object} data 
     * @returns {Array}
     */
    formatScore(data) {
        return [{ "value": data }]
    }
}

export default FormatApi


