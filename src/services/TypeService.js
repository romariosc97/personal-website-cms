import axios from 'axios';

function getTypes(){
    return axios.get(`http://localhost:8000/api/type`);
}

const TypeService = {
    getTypes
}

export default TypeService;