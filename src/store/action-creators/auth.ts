import { Dispatch } from "react"
import {AuthAction, AuthActionTypes, ILoginResponse} from '../../types/auth';
import http from '../../http_common';

interface ILoginModel {
    email: string,
    password: string
}

export const LoginUser = (data: ILoginModel) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.LOGIN_AUTH});
            const responce = await http.post<ILoginResponse>('api/auth/login', data);

            dispatch({type: AuthActionTypes.LOGIN_AUTH_SUCCESS, payload: {
                email: "sdf@asf.ssd", image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" 
            }});
        }
        catch(error) {
            dispatch({type: AuthActionTypes.LOGIN_AUTH_ERROR, payload: "Error"});
        }
    }
}

