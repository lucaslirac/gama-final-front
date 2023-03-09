import axios, { Axios } from "axios";
import { Await } from "react-router-dom";
import { User } from "../types/index"
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

export const createUser = async (user: User) => {
    try {
        const token = await getToken();
        user.role = "client"
        const { data, status, ...props } = await Api.post('/user', user, {
            headers: {
                Authorization: token    


            }
        });
        console.log("data", data)
        console.log("status", status)
        console.log("token", props)
        alert('Usuário cadastrado com sucesso!');
        return { data, status };
    } catch (error: any) {
        console.error(error);
        return { status: error.response.status };
    }
};

export const getToken = async () => {
    try {
        const admin = {
            "email": "adminuser@email.com",
            "password": "password123"
        }
        const { data } = await Api.post('/auth/login', admin);

        return data?.token ?? "";
    } catch (error) {

    }
}


export const signIn = async ({email, password}: {email:string; password:string}) => {
    try {
       
        const { data } = await Api.post('/auth/login', {email, password});

        return data?.token ?? "";
    } catch (error) {

    }
}