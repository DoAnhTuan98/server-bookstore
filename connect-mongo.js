const mongoose = require('mongoose')
const DB_NAME = 'bookstore'

const connectionString = `mongodb+srv://doanhtuan:doanhtuan98@cluster0.1kyns.mongodb.net/bookstore?retryWrites=true&w=majority`

mongoose.connect(connectionString,
    {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.error('Can not to mongoDB')
            console.error(err)
        } else {
            console.log('Connected to MongoDB')
        }
    }
)

