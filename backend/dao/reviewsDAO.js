import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectId

let reviews

export default class ReviewsDAO {
  static async injectDB(connection) {
    if (reviews) reviews

    try {
      reviews = await connection.db(process.env.RESTREVIEWS_NS).collection('reviews')
    } catch (err) {
      console.error(`Unable to establish a collection handle in ReviewsDAO ${err} `)
    }
  }

  static async addReview(restaurantId, review, user, date) {
    try {
      const reviewDoc = {
        name: user.name,
        user_id: user._id,
        date: date,
        text: review,
        restaurant_id: ObjectId(restaurantId),
      }
      console.log(reviewDoc)
      return await reviews.insertOne(reviewDoc)
    } catch (err) {
      console.error(`Unable to post review: ${err}`)
      return { error: err }
    }
  }

  static async updateReview(reviewId, userId, text, date) {
    try {
      const updateReview = await reviews.updateOne(
        { user_id: userId, _id: ObjectId(reviewId) },
        { $set: { text: text, date: date } }
      )

      return updateReview
    } catch (err) {
      console.error(`Unable to post review: ${err}`)
      return { error: err }
    }
  }

  static async deleteReview(reviewId, userId) {
    try {
      const deleteResponse = await reviews.deleteOne({
        _id: ObjectId(reviewId),
        user_id: userId,
      })

      return deleteResponse
    } catch (err) {
      console.error(`Unable to post review: ${err}`)
      return { error: err }
    }
  }
}
