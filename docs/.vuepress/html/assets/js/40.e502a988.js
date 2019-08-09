(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{195:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"磁盘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#磁盘","aria-hidden":"true"}},[t._v("#")]),t._v(" 磁盘")]),t._v(" "),r("p",[t._v("对于Azure平台来说，磁盘可以是单独的一种计算资源（单独创建、单独计费、单独管理等），同时也可以被集成到虚拟机，作为其中的一个组件。")]),t._v(" "),r("p",[t._v("Azure的磁盘管理中有几个特殊的概念，下面提前解释：")]),t._v(" "),r("ul",[r("li",[t._v("托管磁盘：托管由Azure公共存储来管理")]),t._v(" "),r("li",[t._v("非托管磁盘：指磁盘只能由账号下的存储账号来管理，不作为一个独立资源对外")]),t._v(" "),r("li",[t._v("存储账号：Azure的后台中提供了存储账号功能，所谓存储账号，即一个可以管理磁盘的入口。")])]),t._v(" "),r("h2",{attrs:{id:"数据盘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据盘","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据盘")]),t._v(" "),r("p",[t._v("我们知道数据盘是区别于系统盘的一种磁盘，主要用于存放数据。")]),t._v(" "),r("h3",{attrs:{id:"增加数据盘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#增加数据盘","aria-hidden":"true"}},[t._v("#")]),t._v(" 增加数据盘")]),t._v(" "),r("ol",[r("li",[t._v("登录Azure云控制台，找到所需操作的虚拟机")]),t._v(" "),r("li",[t._v("打开设置->磁盘，点击“添加数据磁盘”\n"),r("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/azure/azure-addddisk-websoft9.png",alt:"img"}})]),t._v(" "),r("li",[t._v("设置数据磁盘规格\n"),r("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/azure/azure-addddisk2-websoft9.png",alt:"img"}})]),t._v(" "),r("li",[t._v("登录到虚拟机，完成初始化磁盘操作\n"),r("ul",[r("li",[t._v("Windows, 需要进入磁盘管理，请参考Azure官方文档 "),r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/azure/virtual-machines/windows/attach-managed-disk-portal#initialize-a-new-data-disk",target:"_blank",rel:"noopener noreferrer"}},[t._v("初始化Windows磁盘"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Linux，需要新磁盘进行分区、格式化和装载等操作，请参考请参考文档 "),r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/azure/virtual-machines/linux/attach-disk-portal#connect-to-the-linux-vm-to-mount-the-new-disk",target:"_blank",rel:"noopener noreferrer"}},[t._v("初始化Linux磁盘"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("Complete the above configuration to use the disk")])]),t._v(" "),r("h3",{attrs:{id:"分离数据盘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分离数据盘","aria-hidden":"true"}},[t._v("#")]),t._v(" 分离数据盘")]),t._v(" "),r("ol",[r("li",[t._v("在左侧菜单中，选择“虚拟机” 。")]),t._v(" "),r("li",[t._v("选择具有要分离的数据磁盘的虚拟机，并单击“停止” 以解除分配 VM。")]),t._v(" "),r("li",[t._v("在虚拟机窗格中，选择“磁盘” 。")]),t._v(" "),r("li",[t._v("在“磁盘” 窗格的顶部，选择“编辑” 。\n"),r("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/azure/azure-ddiskds-websoft9.png",alt:"img"}})]),t._v(" "),r("li",[t._v("在“磁盘” 窗格中，转到要分离的数据磁盘最右侧，并单击分离按钮。\n"),r("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/azure/azure-ddiskds2-websoft9.png",alt:"img"}})]),t._v(" "),r("li",[t._v("删除磁盘后，单击窗格顶部的“保存”。")]),t._v(" "),r("li",[t._v("在虚拟机窗格中，单击“概述” ，并单击窗格顶部的“开始” 按钮重启 VM。")])]),t._v(" "),r("blockquote",[r("p",[t._v("磁盘分离后，会保留在存储中，不会删除")])]),t._v(" "),r("h2",{attrs:{id:"容量增加"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#容量增加","aria-hidden":"true"}},[t._v("#")]),t._v(" 容量增加")]),t._v(" "),r("p",[t._v("仅当未附加磁盘或取消分配所有者 VM 时，才可调整磁盘大小或更改帐户类型。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/azure/azure-ddiskin-websoft9.png",alt:"img"}})]),t._v(" "),r("blockquote",[r("p",[t._v("大多数情况下，磁盘只能增加大小，而不能降低大小")])])])},[],!1,null,null,null);e.default=s.exports}}]);