var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_list', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to DB!")
});

module.exports = mongoose;