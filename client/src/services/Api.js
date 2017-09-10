import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:3001'
  })
}

//  Note :Not using the '/server/' in this part. Separate server running Phantom JS webservice to inspect webpages.
