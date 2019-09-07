// const keys = require('./config/keys')
// var ObjectID = require('mongodb').ObjectID

const imgDefault = 'http://pageone.ph/wp-content/uploads/2017/04/2017-04-05-Gizmos-Say-Goodbye-To-The-Iconic-Twitter-Egg-Profile-.png'
module.exports = function (app, db) {
  app.post('/posts', (req, res) => {
    console.log(req.body)
    let newPost = {
      full_name: req.body.full_name,
      arroba: req.body.arroba,
      bio: req.body.bio,
      imgLink: req.body.imgLink || imgDefault
    }
    db.collection('posts').insertOne(newPost, (err, results) => {
      if (err) {
        throw new InternalServerError(err.toString())
      }

      res.send(200)
    })
  })

  app.get('/posts', (req, res) => {
    db.collection('posts').find().toArray((err, results) => {
      if (err) {
        throw new InternalServerError(err.toString())
      }
      res.json(results)
    })
  })
}

const InternalServerError = (message) => {
  const error = new Error()
  error.message = message || 'Internal Server Error'
  error.statusCode = 500

  return error
}
