import { Dispatch } from "react"
import {AuthAction, AuthActionTypes} from '../../types/auth';
import http from '../../http_common';
import {ILoginModel, ILoginResponse, LoginServerError} from '../../components/auth/Login/types';
import axios, { AxiosError } from "axios";


export const LoginUser = (data: ILoginModel) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            //dispatch({type: AuthActionTypes.LOGIN_AUTH});
            const response = await http.post<ILoginResponse>('api/auth/login', data);

            dispatch({type: AuthActionTypes.LOGIN_AUTH_SUCCESS, payload: {
                email: "sdf@asf.ssd", image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" 
            }});
            console.log("End redux login", response.data);
            return Promise.resolve();
        }
        catch(error) {
            //dispatch({type: AuthActionTypes.LOGIN_AUTH_ERROR, payload: "Error"});
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<LoginServerError>;
                if (serverError && serverError.response) {
                    return Promise.reject(serverError.response.data);
                }
            }
            //console.log("End redux login problem");

            return Promise.reject(error);
        }
    }
}

