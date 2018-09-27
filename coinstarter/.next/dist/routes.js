'use strict';

var routes = require('next-routes')();

//Add a new mapping to routes
//:address means it's a wildcard we will receive in the componennt
routes
//Needed to add the previous one else the second one breaks it
.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBO0FBQ0E7QUFDRSxBQURGO0NBRUcsQUFGSCxJQUVPLEFBRlAsa0JBRXlCLEFBRnpCLGtCQUdHLEFBSEgsSUFHTyxBQUhQLHVCQUc4QixBQUg5QixtQkFJRyxBQUpILElBSU8sQUFKUCxnQ0FJdUMsQUFKdkMsNkJBS0csQUFMSCxJQUtPLEFBTFAsb0NBSzJDLEFBTDNDO0FBTUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ2FsbG8vRGVza3RvcC9TdHVkeS9FdGhlcmV1bSBEZXYvY29pbnN0YXJ0ZXIifQ==