import { ISendToJixie, ISetupJixie, IJixieParams } from './JixieContext';


export const setupJixie = (state: IJixieParams): ISetupJixie => {
    const getScript = (): HTMLElement => {
        const jixieScript = document.createElement('script');
        jixieScript.async = true;
        jixieScript.src = `https://scripts.jixie.io/jixietracker.js?accountid=${state.id}`;
        return jixieScript;
    }

    const getDataLayerScript = (): HTMLElement => {
        const dataLayerScript = document.createElement('script');
        dataLayerScript.innerHTML = `window.jixie_p = window.jixie_p || [];`;
        return dataLayerScript
    }

    return { getScript, getDataLayerScript };
}


export const initJixie = (state: IJixieParams) => {
    const jixie = setupJixie(state);

    const script = jixie.getScript();
    const dataLayerScript = jixie.getDataLayerScript();

    document.head.insertBefore(script, document.head.childNodes[0]);
    document.head.insertBefore(dataLayerScript, document.head.childNodes[0]);
}


// @ts-ignore
export const sendToJixie = ({ data }: ISendToJixie): void => window.jixie_p.push(data)
