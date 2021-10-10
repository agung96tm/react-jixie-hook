import React, { useEffect, useReducer, useContext } from 'react';

import { initJixie, sendToJixie } from './JixieManager';
import { IJixieParams, JixieContext, JixieContextDispatch } from './JixieContext';


const dataReducer = (state: IJixieParams, data: any) => {
  sendToJixie({ data });
  return state
}


export const JixieProvider: React.FC<{ state: IJixieParams }> = ({ children, state }) => {
    const [store, dispatch] = useReducer(dataReducer, state);

    useEffect(() => {
        initJixie(store);
    }, [store]);

    return (
        <JixieContext.Provider value={state}>
            <JixieContextDispatch.Provider value={dispatch}>
                {children}
            </JixieContextDispatch.Provider>
        </JixieContext.Provider>
    )
}


export const useJixieDispatch = () => {
    const context = useContext(JixieContextDispatch);
    if (context === undefined) {
      throw new Error('dispatchJixieEvent must be used within a JixieProvider')
    }
    return context
}
