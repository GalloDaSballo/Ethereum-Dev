const routes = require('next-routes')()

//Add a new mapping to routes
//:address means it's a wildcard we will receive in the componennt
routes
  //Needed to add the previous one else the second one breaks it
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new')
module.exports = routes
