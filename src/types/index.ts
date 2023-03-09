export type User = {
    name: string
    email: string
    password: string
    role: string
}


export interface IUser {
    username?: string;
    email?: string;
    token?: string;
}

export interface IAuthProvider {
    children: JSX.Element | JSX.Element[];
}