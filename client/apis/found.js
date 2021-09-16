import request from 'superagent'

export function getFoundPetsAPI () {
    return request.get ('/api/found')
        .then(res => {
            return res.body
        })
}

// export function addFoundPetAPI (newFound) {
//     return request.post ('/api/found')
//         .send(newFound)
//         .then(res => {
//             return res.body
//         })
//         .catch(errorHandler('POST', '/api/found'))
// }