(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{207:function(t,n,e){"use strict";e.r(n);var s=e(0),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_002-localinstallationik"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_002-localinstallationik"}},[t._v("#")]),t._v(" 002-LocalInstallationIK")]),t._v(" "),e("blockquote",[e("p",[t._v("目录:"),e("a",{attrs:{href:"https://github.com/dolyw/Elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/dolyw/Elasticsearch"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"安装本地elasticsearch的ik分词插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装本地elasticsearch的ik分词插件"}},[t._v("#")]),t._v(" 安装本地"),e("code",[t._v("Elasticsearch")]),t._v("的IK分词插件")]),t._v(" "),e("p",[t._v("去"),e("a",{attrs:{href:"https://github.com/medcl/elasticsearch-analysis-ik/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/medcl/elasticsearch-analysis-ik/releases"),e("OutboundLink")],1),t._v("下载对应"),e("code",[t._v("Elasticsearch")]),t._v("版本的IK分词插件"),e("code",[t._v("elasticsearch-analysis-ik-7.3.0.zip")]),t._v("这个文件，打开可以看到如下文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("commons-codec-1.9.jar\ncommons-logging-1.2.jar\nconfig/\nelasticsearch-analysis-ik-7.2.0.jar\nhttpclient-4.5.2.jar\nhttpcore-4.4.4.jar\nplugin-descriptor.properties\nplugin-security.policy\n")])])]),e("p",[t._v("没问题，就解压到你安装的"),e("code",[t._v("Elasticsearch")]),t._v("目录的"),e("code",[t._v("plugins")]),t._v("目录下，例如我的路径是这样的"),e("code",[t._v("D:\\Tools\\elasticsearch-7.2.0\\plugins\\elasticsearch-analysis-ik-7.2.0")])]),t._v(" "),e("p",[t._v("重启"),e("code",[t._v("Elasticsearch")]),t._v("，可以看到控制台打印日志")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("loaded plugin [analysis-ik]\n")])])]),e("p",[t._v("测试一下")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('POST /_analyze\n{\n  "text":"中华人民共和国国徽",\n  "analyzer":"ik_smart"\n}\n')])])]),e("p",[t._v("返回")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"tokens": [\n\t\t{\n\t\t\t"token": "中华人民共和国",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 7,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 0\n\t\t},\n\t\t{\n\t\t\t"token": "国徽",\n\t\t\t"start_offset": 7,\n\t\t\t"end_offset": 9,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 1\n\t\t}\n\t]\n}\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('POST /_analyze\n{\n  "text":"中华人民共和国国徽",\n  "analyzer":"ik_max_word"\n}\n')])])]),e("p",[t._v("返回")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"tokens": [\n\t\t{\n\t\t\t"token": "中华人民共和国",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 7,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 0\n\t\t},\n\t\t{\n\t\t\t"token": "中华人民",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 4,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 1\n\t\t},\n\t\t{\n\t\t\t"token": "中华",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 2,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 2\n\t\t},\n\t\t{\n\t\t\t"token": "华人",\n\t\t\t"start_offset": 1,\n\t\t\t"end_offset": 3,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 3\n\t\t},\n\t\t{\n\t\t\t"token": "人民共和国",\n\t\t\t"start_offset": 2,\n\t\t\t"end_offset": 7,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 4\n\t\t},\n\t\t{\n\t\t\t"token": "人民",\n\t\t\t"start_offset": 2,\n\t\t\t"end_offset": 4,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 5\n\t\t},\n\t\t{\n\t\t\t"token": "共和国",\n\t\t\t"start_offset": 4,\n\t\t\t"end_offset": 7,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 6\n\t\t},\n\t\t{\n\t\t\t"token": "共和",\n\t\t\t"start_offset": 4,\n\t\t\t"end_offset": 6,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 7\n\t\t},\n\t\t{\n\t\t\t"token": "国",\n\t\t\t"start_offset": 6,\n\t\t\t"end_offset": 7,\n\t\t\t"type": "CN_CHAR",\n\t\t\t"position": 8\n\t\t},\n\t\t{\n\t\t\t"token": "国徽",\n\t\t\t"start_offset": 7,\n\t\t\t"end_offset": 9,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 9\n\t\t}\n\t]\n}\n')])])]),e("p",[t._v("IK分词插件就这样安装成功了")]),t._v(" "),e("h2",{attrs:{id:"安装本地elasticsearch的拼音分词插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装本地elasticsearch的拼音分词插件"}},[t._v("#")]),t._v(" 安装本地"),e("code",[t._v("Elasticsearch")]),t._v("的拼音分词插件")]),t._v(" "),e("p",[t._v("去"),e("a",{attrs:{href:"https://github.com/medcl/elasticsearch-analysis-pinyin/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/medcl/elasticsearch-analysis-pinyin/releases"),e("OutboundLink")],1),t._v("下载对应"),e("code",[t._v("Elasticsearch")]),t._v("版本的IK分词插件"),e("code",[t._v("elasticsearch-analysis-pinyin-7.2.0.zip")]),t._v("这个文件，打开可以看到如下文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("elasticsearch-analysis-pinyin-7.2.0.jar\nnlp-lang-1.7.jar\nplugin-descriptor.properties\n")])])]),e("p",[t._v("没问题，就解压到你安装的"),e("code",[t._v("Elasticsearch")]),t._v("目录的"),e("code",[t._v("plugins")]),t._v("目录下，例如我的路径是这样的"),e("code",[t._v("D:\\Tools\\elasticsearch-7.2.0\\plugins\\elasticsearch-analysis-pinyin-7.2.0")])]),t._v(" "),e("p",[t._v("重启"),e("code",[t._v("Elasticsearch")]),t._v("，可以看到控制台打印日志")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("loaded plugin [analysis-pinyin]\n")])])]),e("p",[t._v("测试一下")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('POST /_analyze\n{\n  "text":"中华人民共和国国徽",\n  "analyzer":"pinyin"\n}\n')])])]),e("p",[t._v("返回")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"tokens": [\n\t\t{\n\t\t\t"token": "zhong",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 0\n\t\t},\n\t\t{\n\t\t\t"token": "zhrmghggh",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 0\n\t\t},\n\t\t{\n\t\t\t"token": "hua",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 1\n\t\t},\n\t\t{\n\t\t\t"token": "ren",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 2\n\t\t},\n\t\t{\n\t\t\t"token": "min",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 3\n\t\t},\n\t\t{\n\t\t\t"token": "gong",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 4\n\t\t},\n\t\t{\n\t\t\t"token": "he",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 5\n\t\t},\n\t\t{\n\t\t\t"token": "guo",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 6\n\t\t},\n\t\t{\n\t\t\t"token": "guo",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 7\n\t\t},\n\t\t{\n\t\t\t"token": "hui",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 8\n\t\t}\n\t]\n}\n')])])]),e("p",[t._v("拼音分词插件就这样安装成功了")]),t._v(" "),e("h4",{attrs:{id:"使用ik和拼音插件-详细使用可以查看github的文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用ik和拼音插件-详细使用可以查看github的文档"}},[t._v("#")]),t._v(" 使用IK和拼音插件(详细使用可以查看Github的文档)")]),t._v(" "),e("ul",[e("li",[t._v("创建Index，拼音分词过滤")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('PUT /book\n{\n\t"settings": {\n\t\t"analysis": {\n\t\t\t"analyzer": {\n\t\t\t\t"pinyin_analyzer": {\n\t\t\t\t\t"tokenizer": "my_pinyin"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"tokenizer": {\n\t\t\t\t"my_pinyin": {\n\t\t\t\t\t"type": "pinyin",\n\t\t\t\t\t"keep_separate_first_letter": false,\n\t\t\t\t\t"keep_full_pinyin": true,\n\t\t\t\t\t"keep_original": true,\n\t\t\t\t\t"limit_first_letter_length": 16,\n\t\t\t\t\t"lowercase": true,\n\t\t\t\t\t"remove_duplicated_term": true\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n')])])]),e("p",[t._v("返回")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "acknowledged": true,\n    "shards_acknowledged": true,\n    "index": "book"\n}\n')])])]),e("ul",[e("li",[t._v("创建Mapping，属性使用过滤，name开启拼音分词，content开启IK分词，describe开启拼音加IK分词")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('POST /book/_mapping\n{\n\t"properties": {\n\t\t"name": {\n\t\t\t"type": "keyword",\n\t\t\t"fields": {\n\t\t\t\t"pinyin": {\n\t\t\t\t\t"type": "text",\n\t\t\t\t\t"store": false,\n\t\t\t\t\t"term_vector": "with_offsets",\n\t\t\t\t\t"analyzer": "pinyin_analyzer",\n\t\t\t\t\t"boost": 10\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t"content": {\n\t\t\t"type": "text",\n\t\t\t"analyzer": "ik_max_word",\n\t\t\t"search_analyzer": "ik_smart"\n\t\t},\n\t\t"describe": {\n\t\t\t"type": "text",\n\t\t\t"analyzer": "ik_max_word",\n\t\t\t"search_analyzer": "ik_smart",\n\t\t\t"fields": {\n\t\t\t\t"pinyin": {\n\t\t\t\t\t"type": "text",\n\t\t\t\t\t"store": false,\n\t\t\t\t\t"term_vector": "with_offsets",\n\t\t\t\t\t"analyzer": "pinyin_analyzer",\n\t\t\t\t\t"boost": 10\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t"id": {\n\t\t\t"type": "long"\n\t\t}\n\t}\n}\n')])])]),e("p",[t._v("返回")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "acknowledged": true\n}\n')])])]),e("p",[t._v("这样Index以及属性分词就开启了")]),t._v(" "),e("h5",{attrs:{id:"注：搜索时，先查看被搜索的词被分析成什么样的数据，如果你搜索该词输入没有被分析出的参数时，是查不到的！！！"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注：搜索时，先查看被搜索的词被分析成什么样的数据，如果你搜索该词输入没有被分析出的参数时，是查不到的！！！"}},[t._v("#")]),t._v(" 注：搜索时，先查看被搜索的词被分析成什么样的数据，如果你搜索该词输入没有被分析出的参数时，是查不到的！！！")])])}),[],!1,null,null,null);n.default=a.exports}}]);