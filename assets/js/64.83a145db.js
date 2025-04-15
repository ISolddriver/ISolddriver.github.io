(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{339:function(t,_,v){"use strict";v.r(_);var a=v(14),s=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"浏览器的垃圾回收机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的垃圾回收机制"}},[t._v("#")]),t._v(" 浏览器的垃圾回收机制")]),t._v(" "),_("h3",{attrs:{id:"_1-标记清除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-标记清除"}},[t._v("#")]),t._v(" 1. 标记清除")]),t._v(" "),_("ul",[_("li",[t._v("将内存中的所有对象加一个标记变量，并全部标记为 0；")]),t._v(" "),_("li",[t._v("循环遍历各个对象，把不是垃圾对象标记为 1；")]),t._v(" "),_("li",[t._v("清楚所有标记为 0 的对象；")]),t._v(" "),_("li",[t._v("将所有对象重新标记为 0。")])]),t._v(" "),_("blockquote",[_("p",[t._v("优点：实现简单。效率高\n缺点：会导致空闲内存是不连续的，出现内存碎片。")])]),t._v(" "),_("h3",{attrs:{id:"_2-引用计数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-引用计数"}},[t._v("#")]),t._v(" 2. 引用计数")]),t._v(" "),_("ul",[_("li",[t._v("策略是跟踪记录每个变量被引用的次数；")]),t._v(" "),_("li",[t._v("当这个值被引用时，这个值的引用计数为 1；")]),t._v(" "),_("li",[t._v("如果同一个值被另一个变量引用，引用计数加 1；")]),t._v(" "),_("li",[t._v("如果这个值的引用被其他变量解除，则这个值的引用计数减 1；")]),t._v(" "),_("li",[t._v("当这个值的引用计数为 0 时，清除这个值的内存空间。")])]),t._v(" "),_("blockquote",[_("p",[t._v("优点：实现简单，效率高\n缺点：需要一个计数器，占用内存；循环引用无法回收，导致内存泄漏。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);