webpackHotUpdate(7,{

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(1156);

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = __webpack_require__(495);

var _routes = __webpack_require__(724);

var _campaign = __webpack_require__(1176);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(732);

var _web2 = _interopRequireDefault(_web);

var _requestRow = __webpack_require__(1183);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/gallo/Desktop/Study/Ethereum Dev/coinstarter/pages/campaigns/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/gallo/Desktop/Study/Ethereum Dev/coinstarter/pages/campaigns/requests/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy44MGUyMDVlMDE3MTM4MzY0YWZmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzPzM1NjE2MjUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTaG93IGEgbGlzdCBvZiByZXF1ZXN0cyB0byB0aGUgdXNlclxuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7QnV0dG9uLCBUYWJsZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uLy4uLy4uL3JvdXRlcydcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbidcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL3dlYjMnXG5pbXBvcnQgUmVxdWVzdFJvdyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3JlcXVlc3RSb3cnXG5cbmNsYXNzIFJlcXVlc3RJbmRleCBleHRlbmRzIENvbXBvbmVudHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XG4gICAgY29uc3Qge2FkZHJlc3N9ID0gcHJvcHMucXVlcnlcblxuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcylcbiAgICBjb25zdCByZXF1ZXN0c0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpXG4gICAgY29uc3QgYXBwcm92ZXJzQ291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVyc0NvdW50KCkuY2FsbCgpXG4gICAgLyoqIElzc3VlIGFsbCByZXF1ZXN0cyBhbmQgcmVzb2x2ZSB0aGVtIGFsbCB0b2dldGhlciAqL1xuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAvL0FycmF5KDQpLmZpbGwoKS5tYXAoKGVsZW1lbnQsaW5kZXgpID0+IHsgcmV0dXJuIGluZGV4fSlcbiAgICAgIC8vKDQpwqBbMCwgMSwgMiwgM11cbiAgICAgIEFycmF5KHBhcnNlSW50KHJlcXVlc3RzQ291bnQpKS5maWxsKCkubWFwKChlbGVtZW50LGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKClcbiAgICAgIH0pXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzLFxuICAgICAgcmVxdWVzdHMsXG4gICAgICByZXF1ZXN0c0NvdW50LFxuICAgICAgYXBwcm92ZXJzQ291bnRcbiAgICB9XG4gIH1cblxuICByZW5kZXJSb3dzKCl7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxSZXF1ZXN0Um93XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBpZD17aW5kZXh9XG4gICAgICAgICAgcmVxdWVzdD17cmVxdWVzdH1cbiAgICAgICAgICBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9XG4gICAgICAgICAgYXBwcm92ZXJzQ291bnQ9e3RoaXMucHJvcHMuYXBwcm92ZXJzQ291bnR9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIC8vRGVzdHJ1Y3R1cmluZyB0aGUgVGFibGUuSGVhZGVyLCBldGMgcHJvcGVydGllc1xuICAgIGNvbnN0e0hlYWRlciwgUm93LCBIZWFkZXJDZWxsLCBCb2R5fSA9IFRhYmxlXG4gICAgcmV0dXJuKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgzPlJlcXVlc3QgTGlzdDwvaDM+XG4gICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmxvYXRlZD1cInJpZ2h0XCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDEwfX0+QWRkIFJlcXVlc3Q8L0J1dHRvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICBJRFxuICAgICAgICAgICAgICA8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgIDxIZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgQW1vdW50XG4gICAgICAgICAgICAgIDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgUmVjaXBpZW50XG4gICAgICAgICAgICAgIDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgQXBwcm92YWwgQ291bnRcbiAgICAgICAgICAgICAgPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICBBcHByb3ZlXG4gICAgICAgICAgICAgIDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgRmluYWxpemVcbiAgICAgICAgICAgICAgPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgPEJvZHk+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKCl9XG4gICAgICAgICAgPC9Cb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8ZGl2PkZvdW5kOiB7dGhpcy5wcm9wcy5yZXF1ZXN0c0NvdW50fSByZXF1ZXN0cy48L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SW5kZXhcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQVZBOzs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUxBO0FBUUE7QUFSQTtBQUNBO0FBUUE7Ozs7QUFHQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBREE7QUFBQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQTVFQTtBQUFBO0FBRUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQUNBO0FBREE7OztBQVNBO0FBQ0E7QUFDQTs7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9