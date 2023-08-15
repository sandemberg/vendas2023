import axios from "axios";
import { MethodEnum } from "../../enuns/method.enum";

export type methodType = 'get' | 'delete' | 'post' | 'put' | 'patch' ;   


export default class ConnectionAPI {
    static async call <T> (url: string, method: methodType, body?: unknown): Promise <T> {
        switch (method) {
            case MethodEnum.DELETE:
            case MethodEnum.GET:
                return (await axios[method] <T> (url)).data;
            case MethodEnum.POST:
            case MethodEnum.PUT:
            case MethodEnum.PATCH:   
            default:
                return (await axios[method] <T> (url, body)).data;
        }
    }

    static async connect <T> (url: string, method: methodType, body?: unknown): Promise <T> {
        return this.call <T> (url, method, body).catch((error) => {
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                    case 403:    
                        throw new Error('Sem permissão');
                    default:
                        throw new Error('Sem internet');
                }
            }
            throw new Error('Sem conexão com backend');
        });
    }
}   

export const connectionAPIGet = async <T> (Url: string): Promise<T> => {
    return ConnectionAPI.connect(Url, MethodEnum.GET);
}

export const connectionAPIDelete = async <T> (Url: string): Promise<T> => {
    return ConnectionAPI.connect(Url, MethodEnum.DELETE);
}

export const connectionAPIPost = async <T> (Url: string, body: unknown): Promise<T> => {
    return ConnectionAPI.connect(Url, MethodEnum.POST, body);
}

export const connectionAPIPut = async <T> (Url: string, body: unknown): Promise<T> => {
    return ConnectionAPI.connect(Url, MethodEnum.PUT, body);
}

export const connectionAPIPatch = async <T> (Url: string, body: unknown): Promise<T> => {
    return ConnectionAPI.connect(Url, MethodEnum.PATCH, body);
}