import axios from 'axios';

function getCertifications(){
    return axios.get(`http://localhost:8000/api/certification`);
}

const CertificationService = {
    getCertifications
};

export default CertificationService;