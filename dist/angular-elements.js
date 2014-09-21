!function(w){var PROPERTY_DELIMITER_CHARACTERS=[":","-","_"],registrationFunction=(document.registerElement||document.register).bind(document);if(void 0!==registrationFunction){var registerAngular=function(e,t){var r=Object.create(HTMLElement.prototype);r.createdCallback=function(){this._content=getContentNodes(this);var e=getModuleAndDirectiveFromNamespaceString(t);this.angularDirectiveName=e.directive,this.angularModuleName=e.module,angular.bootstrap(this.parentNode,[this.angularModuleName]),this.isolateScope=angular.element(this).isolateScope(),extend(this,this.isolateScope),this.isolateScope._content=this._content},r.attributeChangedCallback=function(){var e=getAllProperties(this,this.attributes);extend(this.isolateScope,e,!0),this.isolateScope.$apply()},registrationFunction(e,{prototype:r})};document.registerAngular=registerAngular,void 0!==w.xtag&&(w.xtag.registerAngular=registerAngular);var getModuleAndDirectiveFromNamespaceString=function(e){var t=e.split(".");if(1===t.length)throw"Please provide namespace string in format module.directive";return{module:t[0],directive:t[1]}},extend=function(e,t,r){for(var n in t)(void 0===e[n]||r===!0)&&(e[n]="function"==typeof t[n]?t[n].bind(t):t[n])},getContentNodes=function(e){for(var t=document.createElement("content");e.childNodes.length;)t.appendChild(e.childNodes[0]);return t},getAllProperties=function(e,t){for(var r={},n=0;n<t.length;n++){var i=t[n],o=attributeNameToPropertyName(i.name);r[o]=parseAttributeValue(t[n].value)}return r._content=e._content,r},attributeNameToPropertyName=function(e){for(var t=e.replace("x-","").replace("data-",""),r=-1;-1!==(r=getNextDelimiterIndex(t));)t=t.slice(0,r)+t.charAt(r+1).toUpperCase()+t.slice(r+2,t.length);return t},getNextDelimiterIndex=function(e){for(var t=-1,r=0;r<PROPERTY_DELIMITER_CHARACTERS.length;r++){var n=PROPERTY_DELIMITER_CHARACTERS[r];if(t=e.indexOf(n),-1!==t)break}return t},parseAttributeValue=function(value){var regexp=/\{.*?\}/g,matches=value.match(regexp);return null!==matches&&void 0!==matches&&matches.length>0&&(value=eval(matches[0].replace("{","").replace("}",""))),value},getterSetter=function(e,t,r,n){Object.defineProperty?Object.defineProperty(e,t,{get:r,set:n}):document.__defineGetter__&&(e.__defineGetter__(t,r),e.__defineSetter__(t,n)),e["get"+t]=r,e["set"+t]=n}}}(window),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),r=this,n=function(){},i=function(){return r.apply(this instanceof n&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,i.prototype=new n,i});