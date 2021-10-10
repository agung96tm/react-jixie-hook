import { createContext } from "react";


export type IJixieParams = {
    id?: string | number; 
}

export type ISetupJixie = {
    getDataLayerScript(): HTMLElement
    getScript(): HTMLElement
}

export type ISendToJixie = {
    data: Object
}  

export const JixieContext = createContext<IJixieParams | undefined>({ id: '' });
export const JixieContextDispatch = createContext<any | undefined>(null);
