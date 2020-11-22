class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(component) {
        this.root.appendChild(component.root);
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
}

export class Component {
    constructor() {
        this.props = Object.create(null);
        this.children = [];
        this._root = null;
    }
    setAttribute(name, value) {
        this.props[name] = value;
    }
    appendChild(component) {
        this.children.push(component)
    }
    // 不再用root进行操作
    // 思想上的变化：从取一个元素，到把它渲染进一个range里面
    _renderToDOM(range) {
        this.render()._renderToDOM(range);
    }
    // 如果render回来的结构，是一个Component的子类，
    // 那么它就会对root进行一个递归的调用
    get root() {
        if(!this._root) {
            this._root = this.render().root;
        }
        return this._root;
    }
}

export function createElement(type, attributes, ...children) {
    let e;
    if (typeof type === "string") {
        e = new ElementWrapper(type);
    } else {
        e = new type;
    }

    for (let p in attributes) {
        e.setAttribute(p, attributes[p]);
    }
    // 数组里面还是有数组，需要一个递归展开的过程
    let insertChildren = (children) => {
        for (let child of children) {
            if (typeof child === "string") {
                child = new TextWrapper(child);
            }
            if (typeof child === "object" && (child instanceof Array)) {
                insertChildren(child);
            } else {
                e.appendChild(child);
            }
        }
    }
    insertChildren(children);

    return e;
}

export function render(component, parentElement) {
    parentElement.appendChild(component.root);
}