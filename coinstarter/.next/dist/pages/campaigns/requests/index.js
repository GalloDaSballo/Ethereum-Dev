'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _requestRow = require('../../../components/requestRow');

var _requestRow2 = _interopRequireDefault(_requestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/gallo/Desktop/Study/Ethereum Dev/coinstarter/pages/campaigns/requests/index.js?entry';
/**
 * Show a list of requests to the user
 */


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRows',
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_requestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      //Destructuring the Table.Header, etc properties
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Request List'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, this.renderRows())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Found: ', this.props.requestsCount, ' requests.'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestsCount, approversCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestsCount = _context.sent;
                _context.next = 7;
                return campaign.methods.approversCount().call();

              case 7:
                approversCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(
                //Array(4).fill().map((element,index) => { return index})
                //(4) [0, 1, 2, 3]
                Array(parseInt(requestsCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt('return', {
                  address: address,
                  requests: requests,
                  requestsCount: requestsCount,
                  approversCount: approversCount
                });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkNhbXBhaWduIiwid2ViMyIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50IiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJSb3dzIiwicmVxdWVzdHNDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBUTs7QUFDaEIsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBZ0I7Ozs7Ozs7QUFUdkI7Ozs7O0ksQUFXTTs7Ozs7Ozs7Ozs7aUNBdUJRO21CQUNWOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxPQUFVLEFBQ2hEOytCQUNFLEFBQUM7ZUFBRCxBQUNPLEFBQ0w7Y0FGRixBQUVNLEFBQ0o7bUJBSEYsQUFHVyxBQUNUO21CQUFTLE9BQUEsQUFBSyxNQUpoQixBQUlzQixBQUNwQjswQkFBZ0IsT0FBQSxBQUFLLE1BTHZCLEFBSzZCOztzQkFMN0I7d0JBREYsQUFDRSxBQVFIO0FBUkc7QUFDRSxTQURGO0FBRkosQUFBTyxBQVdSLE9BWFE7Ozs7NkJBYUQsQUFDTjtBQURNO1VBQUEsQUFFQSxTQUZBLEFBRWlDLHVCQUZqQyxBQUVBO1VBRkEsQUFFUSxNQUZSLEFBRWlDLHVCQUZqQyxBQUVRO1VBRlIsQUFFYSxhQUZiLEFBRWlDLHVCQUZqQyxBQUVhO1VBRmIsQUFFeUIsT0FGekIsQUFFaUMsdUJBRmpDLEFBRXlCLEFBQy9COzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxpQ0FBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QixTQUFRLE9BQU8sRUFBQyxjQUF4QyxBQUF1QyxBQUFlO29CQUF0RDtzQkFBQTtBQUFBO1NBSk4sQUFFRSxBQUNFLEFBQ0UsQUFHSixrQ0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBR0EsdUJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUdBLGdDQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVBGLEFBT0UsQUFHQSwyQkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FWRixBQVVFLEFBR0EsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBYkYsQUFhRSxBQUdBLG1DQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQWhCRixBQWdCRSxBQUdBLDRCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQXJCTixBQUNFLEFBQ0UsQUFtQkUsQUFLSiwrQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQWpDSixBQU9FLEFBMEJFLEFBQ0csQUFBSyxBQUdWLGdDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFhLGdCQUFBLEFBQUssTUFBbEIsQUFBd0IsZUF0QzVCLEFBQ0UsQUFxQ0UsQUFHTDs7Ozs7MkcsQUFoRjRCOzs7OzttQkFDcEI7QSwwQkFBVyxNLEFBQU0sTSxBQUFqQixBQUVEO0EsMkJBQVcsd0IsQUFBQSxBQUFTOzt1QkFDRSxTQUFBLEFBQVMsUUFBVCxBQUFpQixtQkFBbUIsQSxBQUFwQzs7bUJBQXRCO0E7O3VCQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQixBQUFqQixBQUFrQzs7bUJBQXpEO0E7O3lDQUVpQixBQUFRLEFBQzdCO0FBQ0E7QUFDQTtzQkFBTSxTQUFOLEFBQU0sQUFBUyxnQkFBZixBQUErQixPQUEvQixBQUFzQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBVSxBQUMzRDt5QkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQ3pDO0FBTG9CLEFBR3JCLEEsa0JBSHFCOzttQkFBakI7QTs7MkJBT0MsQUFFTDs0QkFGSyxBQUdMO2lDQUhLLEFBSUw7a0NBSkssQTtBQUFBLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFoQnFCLEEsQUFvRjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9nYWxsby9EZXNrdG9wL1N0dWR5L0V0aGVyZXVtIERldi9jb2luc3RhcnRlciJ9