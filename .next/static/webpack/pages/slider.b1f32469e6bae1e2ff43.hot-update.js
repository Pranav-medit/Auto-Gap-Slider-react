self["webpackHotUpdate_N_E"]("pages/slider",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/slickSlider.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/slickSlider.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../public/icons/left.svg */ "./public/icons/left.svg");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".slickSlider_slick__23xUE {\n  margin: 0;\n  display: flex;\n  -webkit-transition: -webkit-transform ease-in-out .5s;\n  transition: -webkit-transform ease-in-out .5s;\n  transition: transform ease-in-out .5s;\n  transition: transform ease-in-out .5s, -webkit-transform ease-in-out .5s; }\n\n.slickSlider_Cslick__P0-Fs {\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  display: flex;\n  align-items: center; }\n\n.slickSlider_button__21A5N {\n  z-index: 1;\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  background-color: white;\n  color: white;\n  border-radius: 2px;\n  padding: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: cover; }\n\ni.slickSlider_button__21A5N ~ .slickSlider_button__21A5N {\n  right: 0;\n  left: auto;\n  left: initial; }\n\n.slickSlider_Img__23dQe {\n  display: block;\n  margin: 0 20px; }\n\n.slickSlider_Img__23dQe img {\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.slickSlider_Img__23dQe:first-child {\n  margin-left: 0; }\n\n.slickSlider_Img__23dQe:last-child {\n  margin-right: 0; }\n", "",{"version":3,"sources":["webpack://slickSlider.module.scss"],"names":[],"mappings":"AAGA;EAEG,SAAS;EACT,aAAY;EAGZ,qDAAqC;EAArC,6CAAqC;EAArC,qCAAqC;EAArC,wEAAqC,EAAA;;AAGxC;EAEI,kBAAiB;EACjB,gBAAe;EACf,SAAS;EACT,aAAY;EACZ,mBAAmB,EAAA;;AAEvB;EACI,UAAU;EACV,qBAAqB;EACrB,kBAAkB;EAClB,OAAO;EACP,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,YAAW;EACX,eAAe;EACf,yBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;EACjB,yDAAgD;EAChD,4BAA4B;EAC5B,0BAA0B,EAAA;;AAE9B;EACI,QAAQ;EACR,UAAY;EAAZ,aAAY,EAAA;;AAEhB;EACI,cAAa;EACb,cAAc,EAAA;;AAElB;EACI,yBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB,EAAA;;AAGrB;EACI,cAAc,EAAA;;AAElB;EACI,eAAe,EAAA","sourcesContent":["// :global body{\r\n//     margin:0;\r\n// }\r\n.slick{\r\n   \r\n   margin: 0;\r\n   display:flex;\r\n//    overflow: hidden;\r\n//    gap: 10px;\r\n   transition: transform ease-in-out .5s;\r\n   \r\n}\r\n.Cslick{\r\n    // justify-content: center;\r\n    position:relative;\r\n    overflow:hidden;\r\n    margin: 0;\r\n    display:flex;\r\n    align-items: center;\r\n}\r\n.button{\r\n    z-index: 1;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 0;\r\n    background-color: white;\r\n    color: white;\r\n    border-radius: 2px;\r\n    padding:4px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    background-image:url('../public/icons/left.svg');\r\n    background-repeat: no-repeat;\r\n    background-position: cover;\r\n}\r\ni.button~.button{\r\n    right: 0; \r\n    left:initial;\r\n}\r\n.Img{\r\n    display:block;\r\n    margin: 0 20px;\r\n}\r\n.Img img{\r\n    user-select: none;\r\n    \r\n}\r\n.Img:first-child{\r\n    margin-left: 0;\r\n}\r\n.Img:last-child{\r\n    margin-right: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"slick": "slickSlider_slick__23xUE",
	"Cslick": "slickSlider_Cslick__P0-Fs",
	"button": "slickSlider_button__21A5N",
	"Img": "slickSlider_Img__23dQe"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHLHNDQUFzQyxtQkFBTyxDQUFDLHVIQUF5RDtBQUN2RyxvQ0FBb0MsbUJBQU8sQ0FBQyx5REFBMEI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGNBQWMsa0JBQWtCLDBEQUEwRCxrREFBa0QsMENBQTBDLDZFQUE2RSxFQUFFLGdDQUFnQyx1QkFBdUIscUJBQXFCLGNBQWMsa0JBQWtCLHdCQUF3QixFQUFFLGdDQUFnQyxlQUFlLDBCQUEwQix1QkFBdUIsWUFBWSw0QkFBNEIsaUJBQWlCLHVCQUF1QixpQkFBaUIsb0JBQW9CLDhCQUE4Qiw4QkFBOEIsOEJBQThCLHNFQUFzRSxpQ0FBaUMsK0JBQStCLEVBQUUsOERBQThELGFBQWEsZUFBZSxrQkFBa0IsRUFBRSw2QkFBNkIsbUJBQW1CLG1CQUFtQixFQUFFLGlDQUFpQyw4QkFBOEIsOEJBQThCLDhCQUE4QixFQUFFLHlDQUF5QyxtQkFBbUIsRUFBRSx3Q0FBd0Msb0JBQW9CLEVBQUUsU0FBUyx3RkFBd0YsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksWUFBWSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxnQkFBZ0IsTUFBTSxVQUFVLGdCQUFnQixNQUFNLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxnQkFBZ0IsTUFBTSxtREFBbUQsb0JBQW9CLFFBQVEsV0FBVyx3QkFBd0Isb0JBQW9CLDJCQUEyQixvQkFBb0IsNkNBQTZDLFlBQVksWUFBWSxtQ0FBbUMsMEJBQTBCLHdCQUF3QixrQkFBa0IscUJBQXFCLDRCQUE0QixLQUFLLFlBQVksbUJBQW1CLDhCQUE4QiwyQkFBMkIsZ0JBQWdCLGdDQUFnQyxxQkFBcUIsMkJBQTJCLG9CQUFvQix3QkFBd0IsMEJBQTBCLHlEQUF5RCxxQ0FBcUMsbUNBQW1DLEtBQUsscUJBQXFCLGlCQUFpQixzQkFBc0IsS0FBSyxTQUFTLHNCQUFzQix1QkFBdUIsS0FBSyxhQUFhLDBCQUEwQixhQUFhLHFCQUFxQix1QkFBdUIsS0FBSyxvQkFBb0Isd0JBQXdCLEtBQUssdUJBQXVCO0FBQ2g4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NsaWRlci5iMWYzMjQ2OWU2YmFlMWUyZmY0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvaWNvbnMvbGVmdC5zdmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNsaWNrU2xpZGVyX3NsaWNrX18yM3hVRSB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dCAuNXM7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dCAuNXM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgLjVzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IC41cywgLXdlYmtpdC10cmFuc2Zvcm0gZWFzZS1pbi1vdXQgLjVzOyB9XFxuXFxuLnNsaWNrU2xpZGVyX0NzbGlja19fUDAtRnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLnNsaWNrU2xpZGVyX2J1dHRvbl9fMjFBNU4ge1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY292ZXI7IH1cXG5cXG5pLnNsaWNrU2xpZGVyX2J1dHRvbl9fMjFBNU4gfiAuc2xpY2tTbGlkZXJfYnV0dG9uX18yMUE1TiB7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IGF1dG87XFxuICBsZWZ0OiBpbml0aWFsOyB9XFxuXFxuLnNsaWNrU2xpZGVyX0ltZ19fMjNkUWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgMjBweDsgfVxcblxcbi5zbGlja1NsaWRlcl9JbWdfXzIzZFFlIGltZyB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG5cXG4uc2xpY2tTbGlkZXJfSW1nX18yM2RRZTpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5zbGlja1NsaWRlcl9JbWdfXzIzZFFlOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NsaWNrU2xpZGVyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBRUcsU0FBUztFQUNULGFBQVk7RUFHWixxREFBcUM7RUFBckMsNkNBQXFDO0VBQXJDLHFDQUFxQztFQUFyQyx3RUFBcUMsRUFBQTs7QUFHeEM7RUFFSSxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixTQUFTO0VBQ1QsYUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLHlEQUFnRDtFQUNoRCw0QkFBNEI7RUFDNUIsMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksUUFBUTtFQUNSLFVBQVk7RUFBWixhQUFZLEVBQUE7O0FBRWhCO0VBQ0ksY0FBYTtFQUNiLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSx5QkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxlQUFlLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gOmdsb2JhbCBib2R5e1xcclxcbi8vICAgICBtYXJnaW46MDtcXHJcXG4vLyB9XFxyXFxuLnNsaWNre1xcclxcbiAgIFxcclxcbiAgIG1hcmdpbjogMDtcXHJcXG4gICBkaXNwbGF5OmZsZXg7XFxyXFxuLy8gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4vLyAgICBnYXA6IDEwcHg7XFxyXFxuICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IC41cztcXHJcXG4gICBcXHJcXG59XFxyXFxuLkNzbGlja3tcXHJcXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYnV0dG9ue1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBwYWRkaW5nOjRweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uL3B1YmxpYy9pY29ucy9sZWZ0LnN2ZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjb3ZlcjtcXHJcXG59XFxyXFxuaS5idXR0b25+LmJ1dHRvbntcXHJcXG4gICAgcmlnaHQ6IDA7IFxcclxcbiAgICBsZWZ0OmluaXRpYWw7XFxyXFxufVxcclxcbi5JbWd7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMCAyMHB4O1xcclxcbn1cXHJcXG4uSW1nIGltZ3tcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uSW1nOmZpcnN0LWNoaWxke1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuLkltZzpsYXN0LWNoaWxke1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNsaWNrXCI6IFwic2xpY2tTbGlkZXJfc2xpY2tfXzIzeFVFXCIsXG5cdFwiQ3NsaWNrXCI6IFwic2xpY2tTbGlkZXJfQ3NsaWNrX19QMC1Gc1wiLFxuXHRcImJ1dHRvblwiOiBcInNsaWNrU2xpZGVyX2J1dHRvbl9fMjFBNU5cIixcblx0XCJJbWdcIjogXCJzbGlja1NsaWRlcl9JbWdfXzIzZFFlXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==