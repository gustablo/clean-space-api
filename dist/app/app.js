"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

const app = _express2.default.call(void 0, );

app.use(_express2.default.urlencoded({ extended: false }));
app.use(_cors2.default.call(void 0, ));
app.use(_bodyparser2.default.json());

app.use('/', _routes2.default);

app.listen(process.env.PORT || 3000, () => {
    console.log('waiting por changes');
});
