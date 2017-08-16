const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findByIdAndRemove('5912f5b5f3b6242e0cc18a7d').then((todo) => {
  console.log(todo);
})
