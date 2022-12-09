import http from '../http-common'

class RestaurantDataService {
  getAll(page = 0) {
    return http.get(`restaurants?page=${page}`)
  }

  get(id: string) {
    return http.get(`/restaurants/id/${id}`)
  }

  find(query: string, by = 'name', page = 0) {
    return http.get(`restaurants?${by}=${query}&page=${page}`)
  }

  createReview(data: string) {
    return http.post('/review-new', data)
  }

  updateReview(data: string) {
    return http.put('/review-edit', data)
  }

  deleteReview(id: string, userId: string) {
    return http.delete(`/review-delete?id=${id}`, { data: { user_id: userId } })
  }

  getCuisines(id: string) {
    return http.get(`/restaurants/cuisines`)
  }
}
export default new RestaurantDataService()
