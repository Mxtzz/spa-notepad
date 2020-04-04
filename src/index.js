import dialog from './dialog.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = "This is Notepad!";

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = dialog;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());