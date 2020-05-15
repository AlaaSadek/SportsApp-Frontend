import BackendAxios from '../services/backendAxios'
export const toggleLikeState = async (id, currentStatus) => {
    return await BackendAxios.put(`/class/like/${id}`, { 'status': !currentStatus }).then(
        (res) => {
            console.log(res.data)
            return true;
        }

    )
        .catch(
            err => {
                console.log('un liked')
                return false;
            }
        )
}

export const cancelClassReservation = async (id, feedback) => {
    return await BackendAxios.post('Class/CancelClassReservation', { id })
        .then(
            (res) => {
                return true;
            }
        )
        .catch(
            (err) => {
                return false;
            }
        )
}

export const rateClass = async (id, feedback, rate) => {
    return await BackendAxios.post('/Class/RateClass', { id, feedback, rate: Number(rate) })
        .then(
            (res) => {
                console.log('success')
                return true;
            }
        )
        .catch(
            (err) => {
                console.log('err')
                console.log(err.response)
                return false;
            }
        )
}