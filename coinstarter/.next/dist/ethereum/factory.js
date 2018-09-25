'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Exports the campaign factory instance
 */
var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x3c099D859AE0132c845A9b188362C8F16c94AD9a');
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQXFCOzs7Ozs7QUFKNUI7OztBQU1BLElBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDNUIsS0FBQSxBQUFLLE1BQU0sMEJBREksQUFDZixBQUEyQixZQUQ3QixBQUFpQixBQUVmLEFBRUY7a0JBQUEsQUFBZSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9nYWxsby9EZXNrdG9wL1N0dWR5L0V0aGVyZXVtIERldi9jb2luc3RhcnRlciJ9