import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'641309c0e23c4f17ae0a7b5f07c1d641'
    }
})
