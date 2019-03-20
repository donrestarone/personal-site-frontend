const localRoot = 'http://localhost:4000'
const productionRoot = null

export const handleNewVisit = (ipAddress, location, userAgent, languages, platform) => {
  return new Promise((resolve, reject) => {
    let endpoint = localRoot + '/api/v1/visitors'
    fetch( endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ip_address: ipAddress,
        location: location,
        user_agent: userAgent, 
        languages: languages,
        platform: platform
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