const emoji = require('../api/image')

module.exports = (app) => {
  app.get('/', (req,res) => {
    res.render('index.html')
  });
  app.get('/*', (req,res) => {
    req.query['emoji'] = req.params['0'];
    console.log(req.query);
    emoji(req,res);
  });
}