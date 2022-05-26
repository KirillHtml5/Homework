import axios from 'axios'

export const RequestsAPI = {
    getResponse(checked: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: checked})

    }
}