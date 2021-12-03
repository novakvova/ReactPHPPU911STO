export interface ILoginModel {
    email: string,
    password: string
}

export interface ILoginResponse {
    access_token: string,
    expires_in: string
}

export type LoginServerError = {
    email: Array<string>, 
    password: Array<string>, 
    error: string 
};