import ReviewsDAO from '../dao/reviewsDAO.js'

export default class ReviewsController {
  static async apiPostReview(req, res, next) {
    console.log('From POST')
    try {
      const restaurantId = req.body.restaurant_id
      const review = req.body.text
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id,
      }

      const date = new Date()
      const reviewResponse = await ReviewsDAO.addReview(restaurantId, review, userInfo, date)

      res.json({ status: 'Success' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
  static async apiUpdateReview(req, res, next) {
    try {
      const reviewId = req.body.review_id
      const review = req.body.text
      const date = new Date()

      const reviewResponse = await ReviewsDAO.updateReview(reviewId, req.body.user_id, review, date)

      let { error } = reviewResponse
      if (error) {
        res.status(400).json({ error })
      }

      if (reviewResponse.modifiedCount === 0) {
        throw new Error('Unable to update review, user may not be the original poster')
      }
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
  static async apiDeleteReview(req, res, next) {
    try {
      const reviewId = req.query.id
      const userId = req.body.user_id
      console.log(reviewId)

      const reviewResponse = await ReviewsDAO.deleteReview(reviewId, userId)

      res.json({ status: 'Success' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
}
