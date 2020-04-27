import backendAxios from '../services/backendAxios'
export const validateToken = async () => {
    try {
        let response = await backendAxios.get('Account/ValidateToken');  // waiting for backend
        if (response.data.payload && response.data.payload.result) {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}