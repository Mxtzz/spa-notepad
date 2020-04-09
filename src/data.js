module.exports = {
    Dialog: {
        Typeface: [
            {"Name": "微软雅黑"},
            {"Name": "隶书"},
            {"Name": "楷体"},
            {"Name": "新宋体"},
            {"Name": "宋体"},
            {"Name": "幼圆"},
            {"Name": "华文中宋"},
            {"Name": "仿宋"},
            {"Name": "等线"}
        ],
        "Glyph": [
            {"Name": "细体", value: "font-weight: 100;"},
            {"Name": "常规", value: "font-weight: 400;"},
            {"Name": "粗体", value: "font-weight: 600;"},
            {"Name": "细体 倾斜", value: "font-weight: 100;font-style:italic;"},
            {"Name": "倾斜", value: "font-weight: 400;font-style:italic;"},
            {"Name": "粗偏斜体", value: "font-weight: 600;font-style:oblique;"}
        ],
        "Size": [
            {"Name": "8", value: 8},
            {"Name": "9", value: 9},
            {"Name": "10", value: 10},
            {"Name": "11", value: 11},
            {"Name": "12", value: 12},
            {"Name": "14", value: 14},
            {"Name": "16", value: 16},
            {"Name": "18", value: 18},
            {"Name": "20", value: 20},
            {"Name": "22", value: 22},
            {"Name": "24", value: 24},
            {"Name": "26", value: 26},
            {"Name": "28", value: 28},
            {"Name": "30", value: 30},
            {"Name": "32", value: 32},
            {"Name": "36", value: 36},
            {"Name": "48", value: 48},
            {"Name": "72", value: 72},
            {"Name": "初号", value: 40},
            {"Name": "小初", value: 38},
            {"Name": "一号", value: 36},
            {"Name": "小一", value: 32},
            {"Name": "二号", value: 28}
        ],
        "Script": [
            {"Name": "中文 GB2312"},
            {"Name": "西欧语言"},
            {"Name": "希腊语"},
            {"Name": "土耳其语"},
            {"Name": "中欧字符"},
            {"Name": "西里尔文"}
        ]
    },
    Header: [
        {
            ID: 1,
            MenuItem: "文件(F)",
            List: [
                { Name: "新建(N)", Shortcut: "Ctrl+N" },
                { Name: "新窗口(W)", Shortcut: "Ctrl+Shift+N" },
                { Name: "打开(O)...", Shortcut: "Ctrl+N" },
                { Name: "保存(S)", Shortcut: "Ctrl+N" },
                { Name: "另存为(A)...", Shortcut: "Ctrl+N" },
                { Name: "页面设置(U)...", Shortcut: "Ctrl+N" },
                { Name: "打印(P)...", Shortcut: "Ctrl+N" },
                { Name: "退出(X)", Shortcut: "Ctrl+N" }
            ]
        }, {
            ID: 2,
            MenuItem: "编辑(E)",
            List: [
                { Name: "撤销", Shortcut: "Ctrl+N" },
                { Name: "剪切(W)", Shortcut: "Ctrl+N" },
                { Name: "复制(O)", Shortcut: "Ctrl+N" },
                { Name: "粘贴(S)", Shortcut: "Ctrl+N" },
                { Name: "删除(A)", Shortcut: "Ctrl+N" },
                { Name: "使用Bing搜索(U)...", Shortcut: "Ctrl+N" },
                { Name: "查找(P)...", Shortcut: "Ctrl+N" },
                { Name: "查找下一个(X)", Shortcut: "Ctrl+N" },
                { Name: "查找上一个(X)", Shortcut: "Ctrl+N" },
                { Name: "替换()", Shortcut: "Ctrl+N" },
                { Name: "转到()", Shortcut: "Ctrl+N" },
                { Name: "全选()", Shortcut: "Ctrl+N" },
                { Name: "时间/日期(D)", Shortcut: "Ctrl+N" },
            ]
        }, {
            ID: 3,
            MenuItem: "格式(O)",
            List: [
                { Name: "自动换行(W)", Shortcut: "" },
                { Name: "字体(F)...", Shortcut: "" }
            ]
        }, {
            ID: 4,
            MenuItem: "查看(V)",
            List: [
                { Name: "缩放(N)", Shortcut: "Ctrl+N" },
                { Name: "状态栏()", Shortcut: "Ctrl+N" }
            ]
        }, {
            ID: 5,
            MenuItem: "帮助(H)",
            List: [
                { Name: "查看帮助()", Shortcut: "Ctrl+N" },
                { Name: "发送反馈()", Shortcut: "Ctrl+N" },
                { Name: "关于记事本()", Shortcut: "Ctrl+N" }
            ]
        }
    ]
}