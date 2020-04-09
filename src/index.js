import './style.css';
import './dialog.css';
import * as data from './data';

class Main {
    constructor() {
        
    }

    initPage() {
        const me = this;

        const maskElement = document.createElement("div");
        maskElement.classList.add("mask");
        document.body.appendChild(maskElement);

        console.log(data);

        const dialog = document.createElement("div");
        dialog.classList.add("dialog-bg");
        dialog.innerHTML = `
            <div class="dialog">
                <div class="dialog-header">
                    <div class="dialog-title">字体</div>
                    <div class="dialog-close">×</div>
                </div>
                <div class="dialog-container">
                    <div class="line-1">
                        <div class="ziti line-1-item">
                            <div class="ziti-title">字体(F):</div>
                            <input type="text" class="ziti-input"/>
                            <ul class="ziti-list dialog-list"></ul>
                        </div>
                        <div class="zixing line-1-item">
                            <div>字形(Y):</div>
                            <input type="text"/>
                            <ul class="zixing-list dialog-list"></ul>
                        </div>
                        <div class="daxiao line-1-item">
                            <div>大小(S):</div>
                            <input type="text"/>
                            <ul class="daxiao-list dialog-list"></ul>
                        </div>
                    </div>
                    <div class="line-2">
                        <div class="shili">
                            <span>示例</span>
                            <p>AaBbYyZz</p>
                        </div>
                        <div class="jiaoben">
                            <p>脚本(R)</p>
                            <select class="script"></select>
                        </div>
                    </div>
                    <div class="line-3">
                        <a href="#">显示更多字体</a>
                    </div>
                    <div class="line-4">
                        <div class="dialog-confirm dialog-button">确定</div>
                        <div class="dialog-cancel dialog-button">取消</div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(dialog);
        me.renderDialog(data.Dialog);

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

        element.querySelector(".header").appendChild(me.renderHeader(data.Header));

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

                if (i == 2 && j == 1) {
                    tmpLi.addEventListener("click", () => {
                        document.querySelector(".mask").click();
                        const dialogElement = document.querySelector(".dialog-bg");
                        if (dialogElement.classList.contains("dialog-active")) {
                            dialogElement.classList.remove("dialog-active");
                        } else {
                            dialogElement.classList.add("dialog-active");
                        }
                    });
                }
        
                menuItemContainerHtml.appendChild(tmpLi);
            }

            menuItemHtml.appendChild(menuItemContainerHtml);
            menuItemHtml.addEventListener("click", (e) => {
                if (e.target.id.startsWith("MenuItem")) {
                    me.menuSwitch(menuItemContainerHtml);
                }
            });
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

    renderDialog(dialogData) {
        const me = this;
        const typefaceElement = document.querySelector(".ziti-list");
        const glyphElement = document.querySelector(".zixing-list");
        const sizeElement = document.querySelector(".daxiao-list");
        const scriptElement = document.querySelector(".script");
        
        const typefaceData = dialogData.Typeface;
        const glyphData = dialogData.Glyph;
        const sizeData = dialogData.Size;
        const scriptData = dialogData.Script;

        for (let i = 0; i < typefaceData.length; i ++) {
            const item = typefaceData[i];
            const tmpElement = document.createElement("li");
            tmpElement.innerHTML = item.Name;
            typefaceElement.appendChild(tmpElement);
        }

        for (let i = 0; i < glyphData.length; i ++) {
            const item = glyphData[i];
            const tmpElement = document.createElement("li");
            tmpElement.innerHTML = item.Name;
            glyphElement.appendChild(tmpElement);
        }

        for (let i = 0; i < sizeData.length; i ++) {
            const item = sizeData[i];
            const tmpElement = document.createElement("li");
            tmpElement.innerHTML = item.Name;
            sizeElement.appendChild(tmpElement);
        }

        for (let i = 0; i < scriptData.length; i ++) {
            const item = scriptData[i];
            const tmpElement = document.createElement("option");
            tmpElement.innerHTML = item.Name;
            scriptElement.appendChild(tmpElement);
        }

        document.querySelector(".dialog-confirm").addEventListener("click", () => {
            document.querySelector(".dialog-bg").classList.remove("dialog-active");
        });

        document.querySelector(".dialog-cancel").addEventListener("click", () => {
            document.querySelector(".dialog-bg").classList.remove("dialog-active");
        });

        document.querySelector(".dialog-close").addEventListener("click", () => {
            document.querySelector(".dialog-bg").classList.remove("dialog-active");
        });
    }
}

const newMain = new Main();
document.body.appendChild(newMain.initPage());