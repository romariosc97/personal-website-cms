import axios from 'axios';

function getPortfolio(){
    return axios.get(`http://localhost:8000/api/portfolio`);
}

function getPortfolioById(id){
    return axios.get(`http://localhost:8000/api/portfolio/${id}`);
}

function getPortfolioByIdImages(id){
    return axios.get(`http://localhost:8000/api/portfolio/${id}/images`);
}

function insertPortfolio(data){
    return axios.post(`http://localhost:8000/api/portfolio`, data, { "Content-Type": "multipart/form-data" });
}

const PortfolioService = {
    getPortfolio,
    getPortfolioById,
    getPortfolioByIdImages,
    insertPortfolio
};

export default PortfolioService;