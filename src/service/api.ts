import axios from "axios";

export const Api = axios.create({
    baseURL: "https://desafio-final-gama-46-back-production.up.railway.app",
}); 

export const getproductList = async () => {
    try {
        const response = await Api.get('/product');
        return response.data;
    } catch (error) {
        const err = new Error("Erro ao listar produtos") 
        throw err
    }
};
