/**
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

 const all = {
  env: process.env.NODE_ENV,

  url: "https://nodejs-and-mongoose.herokuapp.com/",

  // Server port
  port: process.env.PORT || 8080,

  // Server IP
  ip: process.env.IP || '127.0.0.1',

  // MongoDB connection options
  mongo: {
    uri: 'mongodb+srv://maicol:maicol123456@cluster0-xc611.mongodb.net/asignaturas?retryWrites=true&w=majority',
    db: 'asignaturas',
  },
 }

 module.exports = all;

