import axios, { Axios } from "axios";
import { Await } from "react-router-dom";
import { User } from "../types/index"
import { Product } from "../types/index"
import { IAuth } from "../types/index";
import { setAuthLocalStorage, getAuthLocalStorage } from './localStorage';

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


// ----- Criar Usuario -----

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



// ----- Deletar Usuario -----

export const deleteUser = async (_id: User) => {
    try {
        const response = await axios.delete(`'/user'${_id}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
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

type SignInProps = {
    email: string;
    password: string;
}

type ResponseAuth = {
    auth?: IAuth;
    error?: any
}

export const signIn = async ({ email, password }: SignInProps): Promise<ResponseAuth> => {
    try {

        const { data } = await Api.post<{ token: string }>('/auth/login', { email, password });
        const payload = { token: data.token };
        const user = await getUser({ email, token: data.token });

        let auth;

        if (user) {
            auth = {
                id: user._id,
                email,
                token: data.token,
                isAdmin: user.role === 'admin',
            };

            setAuthLocalStorage(auth)
        }

        return { auth, error: null };
    } catch (error: any) {
        console.error(error);
        return { auth: undefined, error };
    }
}

export const getUser = async ({ email, token }: { email: string; token: string }): Promise<User | null> => {
    try {

        const { data } = await Api.get<{ users: Array<User> }>('/user', { headers: { authorization: token } });
        const user = data.users.find(user => user.email === email);

        console.log('user', user);

        return user as User;
    } catch (error: any) {
        console.error(error);
        return null;
    }
}

export const getUserById = async (id: string) => {
    try {
        const response = await Api.get(`/user/${id}`)
        return response.data
    } catch (error: any) {
        console.error(error);
        return null;
    }
}


export const getProductById = async (id: string) => {
    try {
        const response = await Api.get(`/product/${id}`)
        return response.data
    } catch (error: any) {
        console.error(error);
        return null;
    }
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


// ----- Criar Order -----
/**
 * params:
 *  token,
 *  [product_id]
 *
 * url: POST /order
 */
// export const createOrder = async () => {
//     try {
//
//         const { data, status, ...props } = await Api.post('/user', user, {
//             headers: {
//                // Authorization: token
//             }
//         });
//         return { data, status };
//     } catch (error: any) {
//         console.error(error);
//         return { status: error.response.status };
//     }
// };

// ----- Update Produto -----
/**
 * params:
 *  token,
 *  cartId,
 *  [product_id]
 *
 * url: PUT /order/cartId
 */
// export const updateOrder = async () => {
//     try {
//
//         const { data, status, ...props } = await Api.post('/user', user, {
//             headers: {
//                // Authorization: token
//             }
//         });
//         return { data, status };
//     } catch (error: any) {
//         console.error(error);
//         return { status: error.response.status };
//     }
// };