"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _test = require('./controllers/test'); var _test2 = _interopRequireDefault(_test);

const router = _express2.default.Router();

router.get('/test', _test2.default.get);

exports. default = router;
