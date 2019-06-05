export const SEND_FORM = "SEND_FORM";



export const sendForm = mapData => {
    return {
        type: SEND_FORM,
        payload: mapData
    };
}