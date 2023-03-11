export type User = {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: string;
}


export interface IAuth {
    id: string;
    email: string;
    token: string;
    isAdmin: boolean;
}

export interface IAuthProvider {
    children: JSX.Element | JSX.Element[];
}

export type Product ={
    _id?: string
    name: string
    description:string
    price: number
    image:string
    category:string

}