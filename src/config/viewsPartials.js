/**
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */


const path = require('path')
const hbs = require ('hbs')
require('../helpers/helpers')


const dirPublic = path.join(__dirname, "../../public")
const dirViews = path.join(__dirname, '../../template/views')
const dirPartials = path.join(__dirname, '../../template/partials')
const dirNode_modules = path.join(__dirname , '../../node_modules')

module.exports = (app, express) => {
  //Static
  app.use(express.static(dirPublic))
  app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
  app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
  app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
  app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));

  //hbs
  app.set('view engine', 'hbs')
  app.set('views', dirViews)
  hbs.registerPartials(dirPartials)

  // https://www.npmjs.com/package/express-hbs
}