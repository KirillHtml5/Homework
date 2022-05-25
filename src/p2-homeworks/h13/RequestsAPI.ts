import axios from 'axios'

export const RequestsAPI = {
    getResponse(checked: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: checked})
            .then((res) => {
                if (res.status === 200) {
                    console.log('res.data', res.data)
                }
            })
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }
}