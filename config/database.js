const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhose/myDeveloperJourney', {
    useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  }
);

const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', function() {
  console.log(`MongoDB error connecting: ${err}`)
})

