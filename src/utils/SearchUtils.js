import Backendaxios from '../services/backendAxios';

export const getFiltersFromBackend = async () => {

    const filters = {};
    await Backendaxios.get('/class/ClassTypes').then(
        (res) => {
            filters.types = res.data.payload;
        }
    )
    await Backendaxios.get('/class/ClassLevels').then(
        (res) => {
            filters.levels = res.data.payload;
        }
    )
    await Backendaxios.get('/branch/Allbranches').then(
        (res) => {
            filters.branches = res.data.payload.branches.map(branch => { return { ...branch, name: branch.place } });
        }
    )

    return filters;
}

export const getClassesByFilter = async (filters) => {
    const x = {};
    Object.keys(filters).map(
        key => {
            x[key] = []
        }
    )
    Object.keys(filters).map(
        key => {
            filters[key].map(item => { item.state ? x[key].push(item._id) : null; })
        }
    )
    const ret = await Backendaxios.post(
        '/class/allclassesbyfilter', { types: x.types, branches: x.branches, levels: x.levels }
    )
    return ret.data.payload;
}

export const getAllClassesByName = async (searchValue) => {
    const ret = await Backendaxios.get(`/Class/allclassesbyName/${searchValue}`);
    
    return ret.data.payload
}