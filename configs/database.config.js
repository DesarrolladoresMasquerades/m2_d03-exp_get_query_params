const mongoose = require('mongoose');
// CONNECT YOUR APP TO THE MONGODB
mongoose
  //                                cats-app-dev is the name of our database
  //                                   |
  .connect('mongodb://localhost/get-query-params-dev-example', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
