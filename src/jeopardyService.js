import axios from "axios"

class JeopardyService {
    constructor(
        url = "http://jservice.io/api/random/",
        client = axios.create()
    ) {
        this.url = url
        this.client = client
    }
    getQuestion(count){
        return this.client.get(this.url + '?count=' + count)
    }
}
export default JeopardyService
