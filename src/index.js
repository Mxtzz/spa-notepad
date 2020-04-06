import dialog from './dialog.js';
import './style.css';

class Main {
    constructor() {
        this.headerData = [
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
                    { Name: "自动换行()", Shortcut: "Ctrl+N" },
                    { Name: "字体()", Shortcut: "Ctrl+N" }
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

    initPage() {
        const me = this;
        const maskElement = document.createElement("div");
        maskElement.classList.add("mask");
        document.body.appendChild(maskElement);

        const element = document.createElement('div');
        element.classList.add("text");
        element.innerHTML = `
            <div class="header">
                <div class="title">
                    <div class="title-left">新建文本文档.txt</div>
                    <div class="title-right">
                        <span class="min">-</span>
                        <span class="max">□</span>
                        <span class="close">×</span>
                    </div>
                </div>
            </div>
            <div class="container"></div>
            <div class="footer"></div>
        `;

        element.querySelector(".header").appendChild(me.renderHeader(me.headerData));

        me.maskEvent();
        return element;
    }

    renderHeader(data) {
        const me = this;
        const menuElement = document.createElement("div");
        menuElement.classList.add("menu");

        for (let i = 0; i < data.length; i ++) {
            const menuItem = data[i];
            const menuItemHtml = document.createElement("span");
            menuItemHtml.classList.add("menu-item");
            menuItemHtml.id = "MenuItem" + i;
            menuItemHtml.innerText = menuItem.MenuItem;
            
            const menuItemContainerHtml = document.createElement("ul");
            menuItemContainerHtml.classList.add("menu-list-container");

            for (let j = 0; j < menuItem.List.length; j ++) {
                const childListItem = menuItem.List[j];
                const tmpLi = document.createElement("li");
                tmpLi.classList.add("menu-list-item");
                tmpLi.innerHTML = `<span>${childListItem.Name}</span><span>${childListItem.Shortcut}</span>`;
                menuItemContainerHtml.appendChild(tmpLi);
            }

            menuItemHtml.appendChild(menuItemContainerHtml);
            menuItemHtml.addEventListener("click", (e) => {
                if (e.target.id.startsWith("MenuItem")) {
                    me.menuSwitch(menuItemContainerHtml);
                }
                e.stopPropagation();
            }, true);
            menuElement.appendChild(menuItemHtml);
        }

        return menuElement;
    }

    menuSwitch(element, active) {
        const me = this;
        const tmpElements = document.querySelectorAll(".menu-list-active");
        if (tmpElements && tmpElements.length > 0) {
            tmpElements.forEach((item) => {
                item.classList.remove("menu-list-active");
                item.parentNode.classList.remove("menu-item-active");
            });
        }
        
        if (element) {
            element.classList.add("menu-list-active");
            element.parentNode.classList.add("menu-item-active");
            document.querySelector(".mask").classList.add("mask-active");
        }
    }

    maskEvent() {
        const me = this;

        const maskElement = document.querySelector(".mask");
        maskElement.addEventListener("click", () => {
            me.menuSwitch();
            maskElement.classList.remove("mask-active");
        });
    }
}

const newMain = new Main();
document.body.appendChild(newMain.initPage());