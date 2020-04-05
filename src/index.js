import dialog from './dialog.js';
import './style.css';

class Main {
    constructor() {
        this.headerData = [
            {
                ID: 1,
                MenuItem: "文件(F)",
                List: [
                    { Name: "新建(N)" },
                    { Name: "新窗口(W)" },
                    { Name: "打开(O)..." },
                    { Name: "保存(S)" },
                    { Name: "另存为(A)..." },
                    { Name: "页面设置(U)..." },
                    { Name: "打印(P)..." },
                    { Name: "退出(X)" }
                ]
            }, {
                ID: 2,
                MenuItem: "编辑(E)",
                List: [
                    { Name: "撤销" },
                    { Name: "剪切(W)" },
                    { Name: "复制(O)" },
                    { Name: "粘贴(S)" },
                    { Name: "删除(A)" },
                    { Name: "使用Bing搜索(U)..." },
                    { Name: "查找(P)..." },
                    { Name: "查找下一个(X)" },
                    { Name: "查找上一个(X)" },
                    { Name: "替换()" },
                    { Name: "转到()" },
                    { Name: "全选()" },
                    { Name: "时间/日期(D)" },
                ]
            }, {
                ID: 3,
                MenuItem: "格式(O)",
                List: [
                    { Name: "自动换行()" },
                    { Name: "字体()" }
                ]
            }, {
                ID: 4,
                MenuItem: "查看(V)",
                List: [
                    { Name: "缩放(N)" },
                    { Name: "状态栏()" }
                ]
            }, {
                ID: 5,
                MenuItem: "帮助(H)",
                List: [
                    { Name: "查看帮助()" },
                    { Name: "发送反馈()" },
                    { Name: "关于记事本()" }
                ]
            }
        ]
    }

    initPage() {
        const me = this;
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
            menuItemHtml.innerText = menuItem.MenuItem;
            
            const menuItemContainerHtml = document.createElement("ul");
            menuItemContainerHtml.classList.add("menu-list-container");

            for (let j = 0; j < menuItem.List.length; j ++) {
                const childListItem = menuItem.List[j];
                const tmpLi = document.createElement("li");
                tmpLi.innerHTML = childListItem.Name;
                menuItemContainerHtml.appendChild(tmpLi);
            }

            menuItemHtml.appendChild(menuItemContainerHtml);
            menuItemHtml.addEventListener("click", () => {
                me.menuSwitch(menuItemContainerHtml);
            });
            menuElement.appendChild(menuItemHtml);
        }

        return menuElement;
    }

    menuSwitch(element, active) {
        const me = this;
        const status = element.classList.contains("active");

        if (status) {
            element.classList.remove("active");
        } else {
            element.classList.add("active");
        }
    }
}

const newMain = new Main();
document.body.appendChild(newMain.initPage());