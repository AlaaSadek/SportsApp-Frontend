import backendAxios from '../services/backendAxios'
export const validateToken = async () => {
    try {
        let response = await backendAxios.get('Account/ValidateToken');
        if (response.data.payload && response.data.payload.result) {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}