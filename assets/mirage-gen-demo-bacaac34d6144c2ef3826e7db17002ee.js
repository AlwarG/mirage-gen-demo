'use strict';



;define("mirage-gen-demo/app", ["exports", "mirage-gen-demo/resolver", "ember-load-initializers", "mirage-gen-demo/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("mirage-gen-demo/components/mirage-gen-api-container", ["exports", "ember-mirage-gen/components/mirage-gen-api-container"], function (_exports, _mirageGenApiContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _mirageGenApiContainer.default;
    }
  });
});
;define("mirage-gen-demo/components/mirage-gen-api", ["exports", "ember-mirage-gen/components/mirage-gen-api"], function (_exports, _mirageGenApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _mirageGenApi.default;
    }
  });
});
;define("mirage-gen-demo/components/mirage-gen-copy-paste", ["exports", "ember-mirage-gen/components/mirage-gen-copy-paste"], function (_exports, _mirageGenCopyPaste) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _mirageGenCopyPaste.default;
    }
  });
});
;define("mirage-gen-demo/components/mirage-gen-db", ["exports", "ember-mirage-gen/components/mirage-gen-db"], function (_exports, _mirageGenDb) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _mirageGenDb.default;
    }
  });
});
;define("mirage-gen-demo/components/mirage-gen-db/mirage-gen-factory", ["exports", "ember-mirage-gen/components/mirage-gen-db/mirage-gen-factory"], function (_exports, _mirageGenFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _mirageGenFactory.default;
    }
  });
});
;define("mirage-gen-demo/components/mirage-gen-db/mirage-gen-fixture", ["exports", "ember-mirage-gen/components/mirage-gen-db/mirage-gen-fixture"], function (_exports, _mirageGenFixture) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _mirageGenFixture.default;
    }
  });
});
;define("mirage-gen-demo/components/mirage-gen-obj-tree", ["exports", "ember-mirage-gen/components/mirage-gen-obj-tree"], function (_exports, _mirageGenObjTree) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _mirageGenObjTree.default;
    }
  });
});
;define("mirage-gen-demo/components/mirage-gen", ["exports", "ember-mirage-gen/components/mirage-gen"], function (_exports, _mirageGen) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _mirageGen.default;
    }
  });
});
;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("mirage-gen-demo/controllers/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var Application = (_dec = Ember.inject.service, (_class = /*#__PURE__*/function (_Ember$Controller) {
    _inherits(Application, _Ember$Controller);

    var _super = _createSuper(Application);

    function Application() {
      var _this;

      _classCallCheck(this, Application);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "router", _descriptor, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(Application, [{
      key: "isTesting",
      get: function get() {
        return this.router.currentRouteName === 'testing';
      }
    }]);

    return Application;
  }(Ember.Controller), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = Application;
});
;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("mirage-gen-demo/controllers/testing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var Get = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._action, (_class = /*#__PURE__*/function (_Ember$Controller) {
    _inherits(Get, _Ember$Controller);

    var _super = _createSuper(Get);

    function Get() {
      var _this;

      _classCallCheck(this, Get);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "isLoading", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "users", _descriptor2, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(Get, [{
      key: "getUsers",
      value: function getUsers() {
        this.isLoading = true;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
        xmlHttp.send(null);
        var self = this;

        xmlHttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            var users = JSON.parse(xmlHttp.responseText);
            users.forEach(function (user) {
              var addressArr = Object.entries(user.address || {});
              addressArr = addressArr.filter(function (val) {
                return val[0] !== 'geo';
              });
              addressArr = addressArr.map(function (val) {
                return {
                  key: val[0],
                  value: val[1]
                };
              });
              user.addressArr = addressArr;
            });
            self.isLoading = false;
            self.users = users;
          }
        };
      }
    }]);

    return Get;
  }(Ember.Controller), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isLoading", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "users", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "getUsers", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "getUsers"), _class.prototype)), _class));
  _exports.default = Get;
});
;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("mirage-gen-demo/controllers/usage", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Usage = /*#__PURE__*/function (_Ember$Controller) {
    _inherits(Usage, _Ember$Controller);

    var _super = _createSuper(Usage);

    function Usage() {
      var _this;

      _classCallCheck(this, Usage);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "tag", '<MirageGen @top="value" @left="value" />');

      return _this;
    }

    return Usage;
  }(Ember.Controller);

  _exports.default = Usage;
});
;define("mirage-gen-demo/helpers/equal", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.equal = equal;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function equal(params
  /*, hash*/
  ) {
    var _params = _slicedToArray(params, 2),
        source = _params[0],
        target = _params[1];

    return source === target;
  }

  var _default = Ember.Helper.helper(equal);

  _exports.default = _default;
});
;define("mirage-gen-demo/helpers/get-random", ["exports", "ember-mirage-gen/helpers/get-random"], function (_exports, _getRandom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _getRandom.default;
    }
  });
  Object.defineProperty(_exports, "getRandom", {
    enumerable: true,
    get: function get() {
      return _getRandom.getRandom;
    }
  });
});
;define("mirage-gen-demo/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("mirage-gen-demo/initializers/export-application-global", ["exports", "mirage-gen-demo/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("mirage-gen-demo/initializers/set-url", ["exports", "ember-mirage-gen-config/initializers/set-url"], function (_exports, _setUrl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _setUrl.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function get() {
      return _setUrl.initialize;
    }
  });
});
;define("mirage-gen-demo/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("mirage-gen-demo/router", ["exports", "mirage-gen-demo/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Router = /*#__PURE__*/function (_Ember$Router) {
    _inherits(Router, _Ember$Router);

    var _super = _createSuper(Router);

    function Router() {
      var _this;

      _classCallCheck(this, Router);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "location", _environment.default.locationType);

      _defineProperty(_assertThisInitialized(_this), "rootURL", _environment.default.rootURL);

      return _this;
    }

    return Router;
  }(Ember.Router);

  _exports.default = Router;
  Router.map(function () {
    this.route('overview');
    this.route('usage');
    this.route('structure');
    this.route('workflow');
    this.route('testing');
    this.route('advanced-usage');
  });
});
;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("mirage-gen-demo/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var ApplicationRoute = /*#__PURE__*/function (_Ember$Route) {
    _inherits(ApplicationRoute, _Ember$Route);

    var _super = _createSuper(ApplicationRoute);

    function ApplicationRoute() {
      _classCallCheck(this, ApplicationRoute);

      return _super.apply(this, arguments);
    }

    _createClass(ApplicationRoute, [{
      key: "beforeModel",
      value: function beforeModel() {
        var hash = window.location.hash;

        if (!hash || hash === '#/') {
          this.transitionTo('overview');
        }
      }
    }]);

    return ApplicationRoute;
  }(Ember.Route);

  _exports.default = ApplicationRoute;
});
;define("mirage-gen-demo/services/mirage-gen", ["exports", "ember-mirage-gen/services/mirage-gen"], function (_exports, _mirageGen) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _mirageGen.default;
    }
  });
});
;define("mirage-gen-demo/templates/advanced-usage", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "02b/rueX",
    "block": "{\"symbols\":[],\"statements\":[[7,\"p\",true],[8],[0,\"Sometimes we come across the case of adding some properties to the existing file. For that case, we can compare our output node with the existing file.\"],[9],[0,\"\\n\\n\"],[7,\"b\",true],[8],[0,\"Example:\"],[9],[0,\"\\n\"],[7,\"br\",true],[8],[9],[0,\"\\nwe have the following file.\\n\"],[7,\"pre\",true],[10,\"class\",\"bg-light p-3\"],[8],[0,\"import { Factory, faker } from 'ember-cli-mirage';\\n\\nlet myFactory = Factory.extend({\\n  id() {\\n    return faker.random.number();\\n  },\\n  myNumber() {\\n    return faker.random.number();\\n  }\\n});\\n\\nexport default myFactory;\\n\\n\"],[9],[0,\"\\nWe got the output as \\n\"],[7,\"pre\",true],[10,\"class\",\"bg-light p-3\"],[8],[0,\"{\\n   id: #####,\\n   myNumber: #####,\\n   name: ####\\n}\\n\"],[9],[0,\"\\n\\nWe want to add the name node in our file. Fo that we have provided the option of \"],[7,\"b\",true],[8],[0,\"Compare and generate the missed nodes.\"],[9],[0,\" Once we click that option, it will list down the list of available files. After choosing the specific file, it will give the output as below.\\n\"],[7,\"pre\",true],[10,\"class\",\"bg-light p-3\"],[8],[0,\"{\\n    name: faker.random.name()\\n}\\n\"],[9],[0,\"\\n\\n\"],[7,\"h3\",true],[8],[0,\"How does it work?\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"We need to give the $MirageSection-Start$ for the starting line and $MirageSection-End$ for the ending line in between the code blocks.\"],[9],[0,\"\\n\"],[7,\"strong\",true],[8],[0,\"Example:\"],[9],[0,\"\\n\"],[7,\"br\",true],[8],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"bg-light p-3\"],[8],[0,\"import { Factory, faker } from 'ember-cli-mirage';\\n\\nlet myFactory = Factory.extend({\\n // $MirageSection-Start$\\n  id() {\\n    return faker.random.number();\\n  },\\n  myNumber() {\\n    return faker.random.number();\\n  }\\n  // $MirageSection-End$\\n});\\n\\nexport default myFactory;\\n\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "mirage-gen-demo/templates/advanced-usage.hbs"
    }
  });

  _exports.default = _default;
});
;define("mirage-gen-demo/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NdQ7sNW3",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,0,[\"isTesting\"]]],null,{\"statements\":[[0,\"  \"],[5,\"mirage-gen\",[],[[\"@left\"],[\"26%\"]]],[0,\"\\n\"]],\"parameters\":[]},null],[7,\"div\",true],[10,\"class\",\"row\"],[10,\"style\",\"height: 100vh;\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"p-3 bg-light col-md-2 offset-md-1 position-fixed top-0 bottom-0\"],[8],[0,\"\\n    \"],[7,\"ul\",true],[10,\"class\",\"list-unstyled ps-0\"],[8],[0,\"\\n      \"],[7,\"li\",true],[10,\"class\",\"mb-1\"],[8],[0,\"\\n        \"],[5,\"link-to\",[[12,\"class\",\"btn btn-toggle align-items-center rounded nav-btn w-100\"]],[[\"@route\"],[\"overview\"]],{\"statements\":[[0,\"\\n          Overview\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",true],[10,\"class\",\"mb-1\"],[8],[0,\"\\n        \"],[5,\"link-to\",[[12,\"class\",\"btn btn-toggle align-items-center rounded collapsed nav-btn w-100\"]],[[\"@route\"],[\"usage\"]],{\"statements\":[[0,\"\\n          Usage\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",true],[10,\"class\",\"mb-1\"],[8],[0,\"\\n        \"],[5,\"link-to\",[[12,\"class\",\"btn btn-toggle align-items-center rounded collapsed nav-btn w-100\"]],[[\"@route\"],[\"workflow\"]],{\"statements\":[[0,\"\\n          Work flow\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",true],[10,\"class\",\"mb-1\"],[8],[0,\"\\n        \"],[5,\"link-to\",[[12,\"class\",\"btn btn-toggle align-items-center rounded collapsed nav-btn w-100\"]],[[\"@route\"],[\"testing\"]],{\"statements\":[[0,\"\\n          Testing\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",true],[10,\"class\",\"border-top my-3\"],[8],[9],[0,\"\\n      \"],[7,\"li\",true],[10,\"class\",\"mb-1\"],[8],[0,\"\\n        \"],[5,\"link-to\",[[12,\"class\",\"btn btn-toggle align-items-center rounded collapsed nav-btn w-100\"]],[[\"@route\"],[\"advanced-usage\"]],{\"statements\":[[0,\"\\n          Advanced Usage\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"col-md-7 offset-md-3 p-3\"],[8],[0,\"\\n    \"],[1,[22,\"outlet\"],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "mirage-gen-demo/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("mirage-gen-demo/templates/overview", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Ke2XRTQX",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[8],[0,\"\\n  \"],[7,\"h1\",true],[8],[0,\"What is ember-mirage-gen?\"],[9],[0,\"\\n  \"],[7,\"p\",true],[8],[0,\"The addon will give the complete Mirage section after receiving the API call.\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[8],[0,\"\\n  \"],[7,\"h3\",true],[8],[0,\"Why should we need this?\"],[9],[0,\"\\n  \"],[7,\"p\",true],[8],[0,\"As an ember developer, we always frustrated while writing the test cases. Because we should create the sample response as well as a sample request from the original API call. Particularly in factories, it will make frustration because of faker data.\"],[9],[0,\"\\n\\n  \"],[7,\"p\",true],[8],[0,\"For example, if we get the name node as \"],[7,\"b\",true],[8],[0,\"'Robert'\"],[9],[0,\", we should give something like a name as a \"],[7,\"b\",true],[8],[0,\"faker.random.firstName()\"],[9],[0,\" in the factory section. So what should we do? 🤔\"],[9],[0,\"\\n\\n  \"],[7,\"p\",true],[8],[0,\"Here our \"],[7,\"b\",true],[8],[0,\"ember-mirage-gen\"],[9],[0,\" addon comes into play to solve this requirement. Here you can easily copy your faker response from your response.\"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"text-center\"],[8],[0,\"\\n    \"],[7,\"img\",true],[10,\"src\",\"https://i.imgur.com/5PBVm0m.png\"],[10,\"alt\",\"common-image\"],[10,\"class\",\"img-fluid\"],[10,\"width\",\"83%\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "mirage-gen-demo/templates/overview.hbs"
    }
  });

  _exports.default = _default;
});
;define("mirage-gen-demo/templates/testing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "jlpqvmjP",
    "block": "{\"symbols\":[\"user\",\"addressPoint\"],\"statements\":[[7,\"p\",true],[8],[0,\"Click the below button and explore\"],[9],[0,\"\\n\"],[7,\"button\",false],[12,\"class\",\"btn btn-primary\"],[12,\"type\",\"button\"],[3,\"on\",[\"click\",[23,0,[\"getUsers\"]]]],[8],[0,\"Get Users\"],[9],[0,\"\\n\"],[7,\"table\",true],[10,\"class\",\"table\"],[8],[0,\"\\n  \"],[7,\"thead\",true],[10,\"class\",\"rounded\"],[8],[0,\"\\n    \"],[7,\"tr\",true],[8],[0,\"\\n      \"],[7,\"th\",true],[8],[0,\"Name\"],[9],[0,\"\\n      \"],[7,\"th\",true],[8],[0,\"Phone\"],[9],[0,\"\\n      \"],[7,\"th\",true],[8],[0,\"Email\"],[9],[0,\"\\n      \"],[7,\"th\",true],[8],[0,\"Address\"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"tbody\",true],[8],[0,\"\\n\"],[4,\"if\",[[23,0,[\"isLoading\"]]],null,{\"statements\":[[0,\"      \"],[7,\"tr\",true],[8],[0,\"Loading......\"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[23,0,[\"users\"]]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n          \"],[7,\"td\",true],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n          \"],[7,\"td\",true],[8],[1,[23,1,[\"phone\"]],false],[9],[0,\"\\n          \"],[7,\"td\",true],[8],[1,[23,1,[\"email\"]],false],[9],[0,\"\\n          \"],[7,\"td\",true],[8],[0,\"\\n            \"],[7,\"section\",true],[8],[0,\"\\n\"],[4,\"each\",[[23,1,[\"addressArr\"]]],null,{\"statements\":[[0,\"                \"],[7,\"p\",true],[8],[0,\"\\n                  \"],[7,\"strong\",true],[8],[1,[23,2,[\"key\"]],false],[0,\":\"],[9],[0,\"\\n                  \"],[7,\"span\",true],[10,\"class\",\"text-muted\"],[8],[1,[23,2,[\"value\"]],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "mirage-gen-demo/templates/testing.hbs"
    }
  });

  _exports.default = _default;
});
;define("mirage-gen-demo/templates/usage", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "dtfyXTQ2",
    "block": "{\"symbols\":[],\"statements\":[[7,\"p\",true],[10,\"class\",\"ms-2\"],[8],[0,\"Please follow the below steps\"],[9],[0,\"\\n\"],[7,\"ol\",true],[8],[0,\"\\n  \"],[7,\"li\",true],[8],[0,\"\\n    \"],[7,\"b\",true],[8],[0,\"Installation:\"],[9],[0,\"\\n    \"],[7,\"pre\",true],[10,\"class\",\"bg-light p-3\"],[8],[0,\"ember install ember-mirage-gen\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"li\",true],[8],[0,\"\\n    Add the following code to the application.hbs\\n    \"],[7,\"pre\",true],[10,\"class\",\"bg-light p-3\"],[8],[1,[23,0,[\"tag\"]],false],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"li\",true],[8],[0,\"\\n    In your \"],[7,\"b\",true],[8],[0,\"config/environment.js\"],[9],[0,\", add an ember-mirage-gen object as below.\\n    \"],[7,\"pre\",true],[10,\"class\",\"bg-light p-3\"],[8],[0,\"// config/environment.js\\nlet ENV = {\\n  'ember-mirage-gen': {\\n    isEnabled: environment === 'development', // Mandatory\\n    isOnlyForCurrentDomain: true, // optional\\n    excludedNodes: [] // optional\\n  }\\n};\\n    \"],[9],[0,\"\\n    \"],[7,\"ul\",true],[10,\"class\",\"mb-2\"],[8],[0,\"\\n      \"],[7,\"li\",true],[8],[7,\"b\",true],[8],[0,\"isEnabled\"],[9],[0,\" - it works only when this node is true\"],[9],[0,\"\\n      \"],[7,\"li\",true],[8],[7,\"b\",true],[8],[0,\"isOnlyForCurrentDomain\"],[9],[0,\" - Allow only the same domain API's.\"],[9],[0,\"\\n      \"],[7,\"li\",true],[8],[7,\"b\",true],[8],[0,\"excludedNodes\"],[9],[0,\" - sometimes we got the same node for all responses and we don't need the mirage information for those nodes. So, we can exclude those nodes by adding those nodes to this array. example: \"],[7,\"b\",true],[8],[0,\"page-info\"],[9],[0,\" contains page information\"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"li\",true],[8],[0,\"\\n    Visit the app and click the mirage-gen icon, you will see the list of API's as below.\\n    \"],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"text-center\"],[8],[7,\"img\",true],[10,\"src\",\"https://i.imgur.com/Lfsx51V.png\"],[10,\"alt\",\"list-APIs\"],[10,\"class\",\"img-fluid\"],[10,\"width\",\"83%\"],[8],[9],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "mirage-gen-demo/templates/usage.hbs"
    }
  });

  _exports.default = _default;
});
;define("mirage-gen-demo/templates/workflow", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "INmsN85D",
    "block": "{\"symbols\":[],\"statements\":[[0,\"Consider we have the following API\\n\"],[7,\"br\",true],[8],[9],[7,\"br\",true],[8],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"bg-light p-3\"],[8],[0,\" request = 'https://sample/studentdata';\\n  response = {\\n            student: {\\n                'personal-data': {\\n                  name: 'myname',\\n                  age: 12\\n                },\\n                'educational-data': {\\n                   marks: 98,\\n                   section: 'B'\\n                }\\n             }\\n            }\\n\"],[9],[0,\"\\nThe output for this response as\\n\"],[7,\"br\",true],[8],[9],[7,\"br\",true],[8],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"text-center\"],[8],[7,\"img\",true],[10,\"src\",\"https://i.imgur.com/X2pIfgr.png\"],[10,\"alt\",\"config-settings\"],[10,\"class\",\"img-fluid\"],[10,\"width\",\"83%\"],[8],[9],[9],[0,\"\\n\"],[7,\"br\",true],[8],[9],[7,\"br\",true],[8],[9],[0,\"Here we can view the response as well as the output configuration settings. The output configuration settings used to select the type of DB\\nwe want. It has three sections of selection.\\n\"],[7,\"ol\",true],[8],[0,\"\\n  \"],[7,\"li\",true],[8],[0,\"Fixture\"],[9],[0,\"\\n  \"],[7,\"li\",true],[8],[0,\"Factory\"],[9],[0,\"\\n  \"],[7,\"li\",true],[8],[0,\"Normal\"],[9],[0,\"\\n\"],[9],[0,\"\\nAfter selecting the option, we should click the \"],[7,\"b\",true],[8],[0,\"Generate Info\"],[9],[0,\" button.\\n\"],[7,\"br\",true],[8],[9],[0,\"\\n\"],[7,\"b\",true],[8],[0,\"Note:\"],[9],[0,\" if the node is normal, then it will be included in the config file section.\\n\"],[7,\"br\",true],[8],[9],[0,\"\\n \"],[7,\"b\",true],[8],[0,\"Generate Info\"],[9],[0,\" will take into complete mirage section.\\n \\n This section has three parts.\\n \"],[7,\"ol\",true],[8],[0,\"\\n   \"],[7,\"li\",true],[8],[0,\"Config part\"],[9],[0,\"\\n   \"],[7,\"li\",true],[8],[0,\"DB(DataBase) Part\"],[9],[0,\"\\n   \"],[7,\"li\",true],[8],[0,\"Test Part\"],[9],[0,\"\\n \"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"text-center\"],[8],[7,\"img\",true],[10,\"src\",\"https://i.imgur.com/5PBVm0m.png\"],[10,\"alt\",\"structure\"],[10,\"class\",\"img-fluid\"],[10,\"width\",\"83%\"],[8],[9],[9],[0,\"\\n\"],[7,\"h3\",true],[8],[0,\"1. config Part:\"],[9],[0,\"\\n     As we know this part(config.js file) has the API endpoints.\\n\"],[7,\"h6\",true],[8],[0,\"Example:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"bg-light p-3\"],[8],[0,\"this.get('https://sample/studentdata', function(schema, request) {\\n      return {\\n            student: {\\n\\t\\t'personal-data': // Type your factory,\\n                'educational-data': // Type your fixture\\n\\t    }\\n\\t}\\n });\\n\"],[9],[0,\"\\n\"],[7,\"h3\",true],[8],[0,\"2. DB part:\"],[9],[0,\"\\n     It contains two sections.\\n     \"],[7,\"ol\",true],[8],[0,\"\\n       \"],[7,\"li\",true],[8],[0,\"Factory\"],[9],[0,\"\\n       \"],[7,\"li\",true],[8],[0,\"Fixture\"],[9],[0,\"\\n     \"],[9],[0,\"\\n\"],[7,\"h5\",true],[8],[0,\"1. Factory:\"],[9],[0,\"\\n      It will generate the factory section for a specific node. For the personal-data node, it will give the factory section as\\n\"],[7,\"pre\",true],[10,\"class\",\"bg-light p-3\"],[8],[0,\"import { Factory, faker } from 'ember-cli-mirage';\\n\\nexport default Factory.extend({\\n   name: faker.name.findName(),\\n   age: faker.random.number()\\n});\\n\"],[9],[0,\"\\n\"],[7,\"h5\",true],[8],[0,\"2. Fixture:\"],[9],[0,\"\\nFor the educational-data node, it will give the fixture section as\\n\"],[7,\"pre\",true],[10,\"class\",\"bg-light p-3\"],[8],[0,\"export default {\\n     marks: 98,\\n     section: 'B'\\n }\\n\"],[9],[0,\"\\n\"],[7,\"h3\",true],[8],[0,\"3.Test part:\"],[9],[0,\"\\nIt has the creation list of factories as well as fixtures like in the Ember test file. For the above object, it will give the test section as\\n\"],[7,\"pre\",true],[10,\"class\",\"bg-light p-3\"],[8],[0,\" server.create('personal-data');\\n server.loadFixtures('educational-data');\\n\"],[9],[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "mirage-gen-demo/templates/workflow.hbs"
    }
  });

  _exports.default = _default;
});
;define("mirage-gen-demo/utils/faker-config", ["exports", "ember-mirage-gen/utils/faker-config"], function (_exports, _fakerConfig) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _fakerConfig.default;
    }
  });
});
;define("mirage-gen-demo/utils/obj-fns", ["exports", "ember-mirage-gen/utils/obj-fns"], function (_exports, _objFns) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _objFns.default;
    }
  });
});
;

;define('mirage-gen-demo/config/environment', [], function() {
  var prefix = 'mirage-gen-demo';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("mirage-gen-demo/app")["default"].create({});
          }
        
