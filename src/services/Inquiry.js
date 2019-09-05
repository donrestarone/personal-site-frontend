import {getApiRoot} from './Api'

export const createInquiry = (name, email, message) => {
  return new Promise((resolve, reject) => {
    let endpoint = getApiRoot() + '/api/v1/inquiries'
    fetch( endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'secret': process.env.REACT_APP_API_SECRET
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message, 
      })
    })
    .then(e => {
      if (e.ok) {
        // console.log(e)
        resolve(e)
      } else {
        // console.log(e)
        reject(e)
      }
    }).catch(e => console.log('error::', e))
  }) 
}