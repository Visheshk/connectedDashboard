import { Meteor } from 'meteor/meteor';

Rasts = new Mongo.Collection("restaurants")

Meteor.startup(() => {
  // console.log("mai");
  // console.log(process.env.MONGO_URL);
  console.log(Rasts.findOne());
  // console.log(process.env);
  // code to run on server at startup

});
