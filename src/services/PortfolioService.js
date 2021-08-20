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

const PortfolioService = {
    getPortfolio,
    getPortfolioById,
    getPortfolioByIdImages
};

export default PortfolioService;