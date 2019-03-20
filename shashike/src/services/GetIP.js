export const fetchClientIp = () => {
  return new Promise((resolve, reject) => {
    let apiEndpoint = "https://api.ipify.org?format=json"
    fetch( apiEndpoint, {
      method: 'GET',
    })
    .then(e => {
      if (e.ok) {
        console.log(e)
        resolve(e)
      } else {
        console.log(e)
        reject(e)
      }
    }).catch(e => console.log('error::', e))
  }) 
}