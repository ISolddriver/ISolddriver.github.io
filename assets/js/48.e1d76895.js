(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{324:function(v,_,t){"use strict";t.r(_);var l=t(14),a=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"关于-http-和-https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于-http-和-https"}},[v._v("#")]),v._v(" 关于 HTTP 和 HTTPS")]),v._v(" "),_("h3",{attrs:{id:"http-是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-是什么"}},[v._v("#")]),v._v(" HTTP 是什么？")]),v._v(" "),_("p",[v._v("HTTP 是一种用于传输超媒体文档的协议。HTTP 是基于 TCP/IP 协议的应用层协议。HTTP 是万维网的数据通信的基础。")]),v._v(" "),_("ul",[_("li",[v._v("安全性：不加密，数据容易被窃听和篡改。")]),v._v(" "),_("li",[v._v("协议：基于 TCP。")]),v._v(" "),_("li",[v._v("端口：默认端口 80。")]),v._v(" "),_("li",[v._v("证书：不需要证书。")]),v._v(" "),_("li",[v._v("性能：性能较好，但不如 HTTPS。")])]),v._v(" "),_("h3",{attrs:{id:"https-是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https-是什么"}},[v._v("#")]),v._v(" HTTPS 是什么？")]),v._v(" "),_("p",[v._v("HTTPS（HyperText Transfer Protocol Secure）是 HTTP 的安全版本。HTTPS 使用 SSL/TLS 协议来加密数据传输，以保护数据在传输过程中的安全性和完整性。")]),v._v(" "),_("ul",[_("li",[v._v("安全性：加密传输。")]),v._v(" "),_("li",[v._v("协议：基于 TLS/SSL + TCP。")]),v._v(" "),_("li",[v._v("端口：默认端口 443。")]),v._v(" "),_("li",[v._v("证书：需要证书。")]),v._v(" "),_("li",[v._v("性能：加密和解密增加了一定的开销，但是在现代计算机上，性能影响不大。")])]),v._v(" "),_("h3",{attrs:{id:"https-工作原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https-工作原理"}},[v._v("#")]),v._v(" HTTPS 工作原理：")]),v._v(" "),_("ul",[_("li",[v._v("客户端发起请求。")]),v._v(" "),_("li",[v._v("服务器返回证书：将 SSL/TLS 证书发送给客户端。")]),v._v(" "),_("li",[v._v("客户端验证证书有效性和合法性。")]),v._v(" "),_("li",[v._v("密钥交换：客户端和服务器协商生成对称密钥。")]),v._v(" "),_("li",[v._v("加密通信：客户端和服务端通过对称密钥进行加密通信。")])]),v._v(" "),_("h3",{attrs:{id:"https-请求的流程-什么是对称加密和非对称加密"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https-请求的流程-什么是对称加密和非对称加密"}},[v._v("#")]),v._v(" HTTPS 请求的流程，什么是对称加密和非对称加密？")]),v._v(" "),_("ul",[_("li",[v._v("对称加密：使用相同的密钥进行加密和解密。")]),v._v(" "),_("li",[v._v("非对称加密：使用一对密钥进行加密和解密，公钥加密，私钥解密。")]),v._v(" "),_("li",[v._v("HTTPS 请求的流程：\n"),_("ol",[_("li",[v._v("客户端发起请求。")]),v._v(" "),_("li",[v._v("服务器返回TLS/SSL证书，证书中包含公钥，CA 的信息以及有效期。")]),v._v(" "),_("li",[v._v("客户端使用内置的 CA 根证书验证证书有效性和合法性，若证书无效，客户端会显示警告信息。")]),v._v(" "),_("li",[v._v("密钥交换：客户端生成一个随机的对称密钥（会话密钥），客户端使用服务器的公钥加密会话密钥，并发送给服务器。")]),v._v(" "),_("li",[v._v("服务器解密会话密钥：服务端使用自己的私钥解密会话密钥。")]),v._v(" "),_("li",[v._v("建立安全连接。客户端和服务端使用会话密钥进行"),_("code",[v._v("对称加密通信")])]),v._v(" "),_("li",[v._v("数据传输。客户端和服务端通过加密通道进行数据传输，数据在传输过程中不会被窃听和篡改。")])])])]),v._v(" "),_("h4",{attrs:{id:"对称加密"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[v._v("#")]),v._v(" 对称加密")]),v._v(" "),_("ul",[_("li",[v._v("加密和解密使用同一个密钥的加密方式。")]),v._v(" "),_("li",[v._v("优点：加密速度快，算法简单，实现效率高，适合加密大量数据。")]),v._v(" "),_("li",[v._v("缺点：密钥需要在通信双方之间共享，存在密钥分发问题；如果密钥泄露，通信数据容易被破解。")]),v._v(" "),_("li",[v._v("应用场景：HTTPS 数据传输阶段，文件加密，数据库加密等。")])]),v._v(" "),_("h4",{attrs:{id:"非对称加密"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[v._v("#")]),v._v(" 非对称加密")]),v._v(" "),_("ul",[_("li",[v._v("加密和解密使用不同密钥的加密方式。")]),v._v(" "),_("li",[v._v("公钥用于加密，私钥用于解密。")]),v._v(" "),_("li",[v._v("常见的非对称加密算法包括 RSA、ECC、DSA 等。")]),v._v(" "),_("li",[v._v("优点：解决了密钥分发问题，公钥可以公开，私钥由接收方持有保管。安全性高，即使公钥泄露，也无法解密数据。")]),v._v(" "),_("li",[v._v("缺点：加密速度慢，算法复杂，实现效率低，适合加密少量数据。")]),v._v(" "),_("li",[v._v("应用场景： HTTPS中密钥交换阶段，数字签名，证书颁发等。")])]),v._v(" "),_("h3",{attrs:{id:"http-1-x-和-http-2-x-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-x-和-http-2-x-的区别"}},[v._v("#")]),v._v(" HTTP/1.x 和 HTTP/2.x 的区别")]),v._v(" "),_("ul",[_("li",[v._v("HTTP/1.x：基于文本的协议，每次请求都需要建立和关闭 TCP 连接，效率较低。")]),v._v(" "),_("li",[v._v("HTTP/2.x：基于二进制协议，支持多路复用，可以同时发送多个请求和响应，提高了效率。")]),v._v(" "),_("li",[v._v("HTTP/2.x：支持头部压缩，使用 HPACK 进行头部信息压缩，减少了头部信息的大小，提高了传输效率。")]),v._v(" "),_("li",[v._v("HTTP/2.x：支持流优先级，客户端可以为请求设置优先级，服务端根据优先级优化资源分配。")]),v._v(" "),_("li",[v._v("HTTP/1.x：没有优先级配置，所有请求按顺序处理。")]),v._v(" "),_("li",[v._v("HTTP/2.x：支持服务器推送，服务器可以主动向客户端推送资源，减少了客户端的请求次数。")])]),v._v(" "),_("h3",{attrs:{id:"ssl-证书的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ssl-证书的作用"}},[v._v("#")]),v._v(" SSL 证书的作用")]),v._v(" "),_("ul",[_("li",[v._v("SSL 证书的作用是验证服务器的身份，确保数据传输的安全性。")]),v._v(" "),_("li",[v._v("SSL 证书由受信任的证书颁发机构（CA）签发，包含服务器的公钥和证书颁发机构的签名。")]),v._v(" "),_("li",[v._v("客户端在建立 SSL 连接时，会验证服务器的 SSL 证书，确保服务器的身份合法。同时，SSL 证书还可以加密数据传输，保护数据在传输过程中的安全性和完整性。")])])])}),[],!1,null,null,null);_.default=a.exports}}]);