import axios, { Axios } from "axios";
import { Await } from "react-router-dom";
import { User } from "../types/index"
import { Product } from "../types/index"
import { IUser } from "../types/index";
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

export const getuserList = async () => {
    try {
        const response = await Api.get('/user');
        return response.data;
    } catch (error) {
        const err = new Error("Erro ao listar usuarios")
        throw err
    }
};


export const createUser = async (user: User) => {
    try {
        //const token = await getToken();
        console.log(user)
        const { data, status, ...props } = await Api.post('/user', user, {
            headers: {
               // Authorization: token    


            }
        });
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
        console.log(data.token)
        return data?.token ?? "";
    } catch (error) {

    }
}


export const signIn = async ({email, password}: {email:string; password:string}) => {
    try {
       
        const  data  = await Api.post('/auth/login', {email, password});
        const payload = {token:data}
        setUserLocalStorage(payload)
        console.log({data})
        return data.data ?? "";
    } catch (error: any) {

        console.error(error);
        return { status: error.response.status };
    }
}



export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem("u", JSON.stringify(user));
}


export function getUserLocalStorage() {
    const json = localStorage.getItem("u")

    if (!json) {
        return null;
    }

    const user = JSON.parse(json)

    return user ?? null;
}


export const createProduct = async (product: Product) => {
    try {
        const token = await getToken();
        console.log(product)
        const { data, status, ...props } = await Api.post('/product', product, {
            headers: {
                Authorization: token    


            }
        });
        alert('Produto cadastrado com sucesso!');
        return { data, status };
    } catch (error: any) {
        console.error(error);
        return { status: error.response.status };
    }
};