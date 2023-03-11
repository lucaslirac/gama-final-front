export type User = {
    name: string
    email: string
    password: string
    role: string
}


export interface IUser {
    email?: string;
    token?: any;
}

export interface IAuthProvider {
    children: JSX.Element | JSX.Element[];
}

export type Product ={

    name: string
    description:string
    price: number
    image:string
    category:string

}