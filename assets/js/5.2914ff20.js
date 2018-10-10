(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("Plugins are a powerful way to encapsulate and share complex functionalities in an easily importable package.")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("Plugins can be used to define commands, learn more about "),n("router-link",{attrs:{to:"/commands.html"}},[t._v("commands")]),t._v(" and the "),n("router-link",{attrs:{to:"/configuration.html"}},[t._v("configuration")]),t._v(".")],1),t._v(" "),n("p",[t._v("There are multiple ways to write plugins:")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("These are plain shell commands, they won't look pretty though:")]),t._v(" "),t._m(3),t._m(4),t._v(" "),n("p",[t._v("They will be called with:")]),t._v(" "),n("ul",[t._m(5),t._v(" "),t._m(6),t._v(" "),n("li",[n("strong",[t._v("ctx")]),t._v(": "),n("a",{attrs:{href:"https://github.com/SamVerschueren/listr",target:"_blank",rel:"noopener noreferrer"}},[t._v("Listr"),n("OutboundLink")],1),t._v("'s "),n("a",{attrs:{href:"https://github.com/SamVerschueren/listr#context",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("ctx")]),n("OutboundLink")],1),t._v(" object.")]),t._v(" "),n("li",[n("strong",[t._v("task")]),t._v(": "),n("a",{attrs:{href:"https://github.com/SamVerschueren/listr",target:"_blank",rel:"noopener noreferrer"}},[t._v("Listr"),n("OutboundLink")],1),t._v("'s "),n("a",{attrs:{href:"https://github.com/SamVerschueren/listr#task-object",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("task")]),n("OutboundLink")],1),t._v(" object.")])]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),n("p",[t._v("You can also return an instance of "),n("a",{attrs:{href:"https://github.com/SamVerschueren/listr",target:"_blank",rel:"noopener noreferrer"}},[t._v("Listr"),n("OutboundLink")],1),t._v(" from your plugin function, this will allow you to define subtasks.")]),t._v(" "),t._m(11),t._m(12),t._v(" "),n("p",[t._v("If you want your plugin to be able to accept options you should wrap it in a function that can accept options:")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),n("p",[t._v("You can find most of the plugins made by the community in the "),n("a",{attrs:{href:"https://github.com/fabiospampinato/awesome-autogit",target:"_blank",rel:"noopener noreferrer"}},[t._v("awesome-autogit"),n("OutboundLink")],1),t._v(" repository.")]),t._v(" "),n("p",[t._v("Plugins should follow the "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unix_philosophy",target:"_blank",rel:"noopener noreferrer"}},[t._v("UNIX philosophy"),n("OutboundLink")],1),t._v(" and be minimalistic and easily composable into commands.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugins")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#definition","aria-hidden":"true"}},[this._v("#")]),this._v(" Definition")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string","aria-hidden":"true"}},[this._v("#")]),this._v(" String")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token string"}},[this._v("'rm -rf node_modules'")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function","aria-hidden":"true"}},[this._v("#")]),this._v(" Function")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("strong",[this._v("config")]),this._v(": autogit's configuration object.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("strong",[this._v("repoPath")]),this._v(": the absolute path of the target repository.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("myPlugin")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" repoPath"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" task "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// Plugin logic...")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can additionally define a "),s("code",[this._v("title")]),this._v(" property, which will be used instead of the name of the function if available:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[t._v("myPlugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'My Plugin'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"function-listr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-listr","aria-hidden":"true"}},[this._v("#")]),this._v(" Function => Listr")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Listr "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'listr'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("myPlugin")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" repoPath"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" task "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Listr")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Noop'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      task"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Lottery'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      enabled"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Math"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("random")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0.5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      task"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"function-factory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-factory","aria-hidden":"true"}},[this._v("#")]),this._v(" Function Factory")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("factory")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" options "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("myPlugin")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" repoPath"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" task "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// Some code...")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/* --- OR --- */")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("myPlugin")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" repoPath"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" task "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Listr")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// Some tasks...")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("Respect "),s("code",[this._v("--dry")])]),this._v(": Unless you're writing your plugin as a string, where this is handled for you, you should always make sure you're respecting the "),s("code",[this._v("--dry")]),this._v(" flag and only simulate doing the work when its setted. You can retrieve this value with "),s("code",[this._v("config.dry")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"community-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#community-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Community Plugins")])}],!1,null,null,null);e.options.__file="plugins.md";s.default=e.exports}}]);