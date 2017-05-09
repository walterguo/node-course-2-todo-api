//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
      if(err) {
      return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connected to MongoDB server');

      // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
      //   console.log(result);
      // })
        // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        //   console.log(result);
        // })

        // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
        //   console.log(result);
        // })

        // db.collection('Todos').findOneAndUpdate({
        //   _id: new ObjectID('591162badccf27133594f55d')
        // },{
        //   $set: {
        //     completed: true
        //   }
        // }, {
        //   returnOriginal :false
        // }).then((result)=> {
        //   console.log(result);
        // })

        db.collection('Users').findOneAndUpdate({
          _id: new ObjectID('591145e9b5459913443c49c0')
        },{
          $set: {
            name: 'Andrew'
          },
          $inc:{
           age: 1
          }
        }, {
          returnOriginal :false
        }).then((result)=> {
          console.log(result);
        })


    //  db.close();
});
