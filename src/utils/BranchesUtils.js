import BackendAxios from '../services/backendAxios';

export const getAllBranches = async () => {
    const branches = await BackendAxios.get('/Branch/AllBranches');
    
    return branches.data.payload.branches;
}