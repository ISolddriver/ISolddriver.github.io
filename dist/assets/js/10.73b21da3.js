(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{284:function(t,n,a){"use strict";a.r(n);var r=a(14),e=Object(r.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"什么是尾调用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是尾调用"}},[t._v("#")]),t._v(" 什么是尾调用？")]),t._v(" "),n("h3",{attrs:{id:"概念理解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念理解"}},[t._v("#")]),t._v(" 概念理解")]),t._v(" "),n("p",[n("code",[t._v("尾调用")]),t._v("的概念非常简单，即：某个函数的最后一步是调用另一个函数")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  function fn (n) {\n    return a(n)\n  }\n")])])]),n("h3",{attrs:{id:"尾调用优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#尾调用优化"}},[t._v("#")]),t._v(" 尾调用优化")]),t._v(" "),n("p",[t._v("尾调用之所以不同，就是因为它特殊的调用位置。"),n("br")]),t._v(" "),n("p",[t._v("我们知道，函数在调用时会在内部形成一个"),n("code",[t._v("调用记录")]),t._v("，又称"),n("code",[t._v("调用帧（call frame）")]),t._v("，保存调用位置和内部信息等。如果函数A内部调用函数B，那么在A的调用上方，会产生一个B的调用记录，等B运行结束，将结果返回给A，B的调用记录才会消失。如果B的内部再调用一个函数C，就会产生C的调用记录。以此类推，所有的调用记录，就会形成一个"),n("code",[t._v("调用栈（call stack）")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  function fn () {\n    let m = 1\n    let n = 2\n    return a(m + n)\n  }\n  fn()\n\n  // 等同于\n  function fn () {\n    return a(3)\n  }\n  fn()\n\n  // 等同于\n  a(3)\n")])])]),n("p",[t._v("这就叫做"),n("code",[t._v("尾调用优化")]),t._v("，即只保留内层函数调用记录，如果所有的函数都是尾调用，那么完全可以做到，每次执行时，调用记录只有一帧，这将大大节省内存，这就是尾调用优化的意义。")]),t._v(" "),n("h3",{attrs:{id:"尾递归"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#尾递归"}},[t._v("#")]),t._v(" 尾递归")]),t._v(" "),n("p",[t._v("函数调用自身，称之为递归，若尾调用自身，称之为尾递归。"),n("br"),t._v("\n递归非常耗费内存，因为需要保存成百上千调用记录，很容易发生"),n("code",[t._v("栈溢出")]),t._v("（stack overflow）。对于尾递归来说，就不会出现此现象。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  function factorial(n) () {\n    if (n === 1) return 1\n    return n * factorial(n - 1)\n  }\n\n  factorial(5) // 120\n")])])]),n("p",[t._v("上述代码是一个阶乘函数，计算n的阶乘，最多保存n个调用记录，空间复杂度是O(n)。"),n("br"),t._v("\n如果改成尾调用，只保留一个调用记录，空间复杂度为O(1)。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  function factorial(n，total) () {\n    if (n === 1) return total\n    return factorial(n - 1, n * total)\n  }\n\n  factorial(5, 1) // 120\n")])])]),n("h3",{attrs:{id:"递归函数优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#递归函数优化"}},[t._v("#")]),t._v(" 递归函数优化")]),t._v(" "),n("p",[t._v("上述函数中，一个阶乘函数还需要传入两个参数，看起来很不友好。"),n("br"),t._v("\n优化1： 包裹一层函数。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  function factorial(n，total) () {\n    if (n === 1) return total\n    return factorial(n - 1, n * total)\n  }\n  function factorialTotal (n) {\n    return factorial(n, 1)\n  }\n\n  factorialTotal(5) // 120\n")])])]),n("p",[t._v("优化2： 柯里化（currying），即将多参数函数转化为单参数函数形式。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  function curryFunction (fn, n) {\n    return function curryFn (m) {\n      return fn.call(this, m, n)\n    }\n  }\n\n  function factorial(n，total) () {\n    if (n === 1) return total\n    return factorial(n - 1, n * total)\n  }\n\n  const factorialTotal = curryFunction(factorial, 1)\n\n  factorialTotal(5) // 120\n\n")])])]),n("p",[t._v("上述代码，通过函数柯里化，将factorial转化为只接收一个参数的函数。")]),t._v(" "),n("p",[t._v("优化3：ES6函数默认参数")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  function factorial(n，total = 1) () {\n    if (n === 1) return total\n    return factorial(n - 1, n * total)\n  }\n\n  factorial(5) // 120\n")])])]),n("p",[t._v("总结一下： 递归本质上是循环操作。函数式编程中没有循环操作命令，所有的循环都用递归实现，对于我们来说，只需要知道递归可以代替循环，而一旦使用递归，就最好使用尾递归。")])])}),[],!1,null,null,null);n.default=e.exports}}]);