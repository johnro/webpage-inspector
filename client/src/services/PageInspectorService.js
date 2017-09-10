import Api from '@/services/Api'

export default {
  inspect (url) {
    const params = '?q='.concat(url.url)
    return Api().get(params)
  }
}

