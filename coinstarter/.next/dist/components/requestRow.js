'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/gallo/Desktop/Study/Ethereum Dev/coinstarter/components/requestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      var readyToFinalize = request.approvalCount > approversCount / 2;
      console.log("Request #", id, " ready for finalize? ", readyToFinalize);
      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, request.approvalCount, ' / ', approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onApprove, color: 'green', basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onFinalize, color: 'teal', basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFPOztBQUNmLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7OztvTkFDSixBLHFGQUFZLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUNKO0FBREkseUJBQ08sd0JBQVMsTUFBQSxBQUFLLE1BRHJCLEFBQ08sQUFBb0I7OEJBRDNCO3FCQUVhLGNBQUEsQUFBSyxJQUZsQixBQUVhLEFBQVM7O2lCQUExQjtBQUZJLGtDQUFBOzhCQUFBOzhCQUdKLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxBQUErQztzQkFDN0MsU0FKRSxBQUdKLEFBQW9ELEFBQ2xELEFBQVM7QUFEeUMsQUFDeEQsZUFESTs7aUJBSEk7aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QSxlLEFBUVosc0ZBQWEsb0JBQUE7b0JBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQ0w7QUFESyx5QkFDTSx3QkFBUyxNQUFBLEFBQUssTUFEcEIsQUFDTSxBQUFvQjsrQkFEMUI7cUJBRVksY0FBQSxBQUFLLElBRmpCLEFBRVksQUFBUzs7aUJBQTFCO0FBRkssbUNBQUE7K0JBQUE7OEJBR0wsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0Q7c0JBQzlDLFNBSkcsQUFHTCxBQUFxRCxBQUNuRCxBQUFTO0FBRDBDLEFBQ3pELGVBREk7O2lCQUhLO2lCQUFBOytCQUFBOztBQUFBO21CQUFBO0E7Ozs7OzZCQVFMO1VBQUEsQUFDQyxNQURELEFBQ2MsdUJBRGQsQUFDQztVQURELEFBQ00sT0FETixBQUNjLHVCQURkLEFBQ007bUJBQzBCLEtBRmhDLEFBRXFDO1VBRnJDLEFBRUMsWUFGRCxBQUVDO1VBRkQsQUFFSyxpQkFGTCxBQUVLO1VBRkwsQUFFYyx3QkFGZCxBQUVjLEFBQ3BCOztVQUFNLGtCQUFrQixRQUFBLEFBQVEsZ0JBQWlCLGlCQUFqRCxBQUFnRSxBQUNoRTtjQUFBLEFBQVEsSUFBUixBQUFZLGFBQVosQUFBeUIsSUFBekIsQUFBNkIseUJBQTdCLEFBQXNELEFBQ3REOzZCQUNHLGNBQUQsT0FBSyxVQUFVLFFBQWYsQUFBdUIsVUFBVSxVQUFVLG1CQUFtQixDQUFDLFFBQS9ELEFBQXVFO29CQUF2RTtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxTQURGLEFBQ0UsQUFHQSxxQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxpQkFKRixBQUlFLEFBQ1csQUFFWCw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSx1QkFDRyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BUmhDLEFBT0UsQUFDRyxBQUFrQyxBQUVyQywyQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxpQkFWRixBQVVFLEFBQ1csQUFFWCw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxpQkFBQSxBQUNXLGVBQWtCLE9BZC9CLEFBYUUsQUFHQSxpQ0FBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUVHO0FBRkg7QUFBQSxpQkFFRyxBQUFRLFdBQVIsQUFBbUIsdUJBQ3BCLEFBQUMseUNBQU8sU0FBUyxLQUFqQixBQUFzQixXQUFXLE9BQWpDLEFBQXVDLFNBQVEsT0FBL0M7b0JBQUE7c0JBQUE7QUFBQTtPQUFBLEVBbkJKLEFBZ0JFLEFBR0UsQUFHRiw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxpQkFDRyxBQUFRLFdBQVIsQUFBbUIsdUJBQ3BCLEFBQUMseUNBQU8sU0FBUyxLQUFqQixBQUFzQixZQUFXLE9BQWpDLEFBQXVDLFFBQU8sT0FBOUM7b0JBQUE7c0JBQUE7QUFBQTtPQUFBLEVBekJOLEFBQ0UsQUFzQkUsQUFFRSxBQUtQOzs7OztBQXBEc0IsQSxBQXVEekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ2FsbG8vRGVza3RvcC9TdHVkeS9FdGhlcmV1bSBEZXYvY29pbnN0YXJ0ZXIifQ==