/**
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

 const all = {
  env: process.env.NODE_ENV,

  url: "http://localhost",

  // Server port
  port: process.env.PORT || 8080,

  // Server IP
  ip: process.env.IP || '127.0.0.1',

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/asignaturas',
    db: 'asignaturas',
  },
 }

 module.exports = all;