"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\n\n*{\n    margin:0;\n    border:0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\n\na{ text-decoration: none;}\n\nul{\n    list-style: none;\n    padding: 0;\n}\n\nbody{background-color: var(--backround-body);}\n\ninput{\n    padding-left: 5px;\n    height: 30px;\n}\n\n:focus-visible {outline:none;}\n\n:focus{outline:none;}\n\nbutton{cursor: pointer;}\n\n.d-none{display: none;}\n\n.container-main{\n    margin: 0 auto;\n    max-width: 1100px;\n}\n\n.container-content{\n    display: grid;\n    grid-template-columns: 23% 77%;\n}\n\nnav>ul>li>a{\n    color: #fff;\n    width: 100%;\n    height: 100%;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    padding-left: 8px;\n    white-space: nowrap;\n    justify-content: start;\n    gap: 8px;\n    margin-left: 10px;\n}\n\nnav>ul>li:first-child{margin-bottom: 10px;}\n\nnav>ul>li{\n    padding-right: 10px;\n    margin-right: 20px;\n    height: 40px;\n    background-color: var(--second-color);\n}\n\nnav>ul>li.active{background-color:var(--button_menu-active);}\n\nbutton.bc-green{\n    height: 23px;\n    width: 56px;\n    background-color: var(--button_mudar-active);\n    color: #fff;\n}\n\nbutton.bc-red{\n    height: 23px;\n    width: 56px;\n    background-color: var(--button_excluir-active);\n    color: #fff;\n}\n\ntable{width: 100%;}\n\n.p-2{padding: 10px 0;}\n\n.box-shadow{box-shadow: 0 0 0.6em #ccc;}\n\n\n\n@media screen and (max-width: 900px){\n\n    nav>ul>li,nav>ul>li.active{\n        width: 70%;\n        margin-left: 15px;\n    }\n    .container-content{\n        display: grid;\n        grid-template-columns: 1fr;\n    }\n\n    .container-content>nav>ul {\n            display: flex;\n            justify-content: end;\n            flex-direction: column;\n            align-items: end;\n            margin-bottom: 12px;\n    }\n    .p-2{\n        font-size:12px\n    }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _styledComponents.createGlobalStyle)(_templateObject());

exports["default"] = _default;