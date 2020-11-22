class MyComponent {

}


function createElement(type, attributes, ...children) {
    let e;
    if(typeof type === "string") {
        e = document.createElement(type);
    } else {
        e = new type;
    }

    for(let p in attributes) {
        e.setAttribute(p, attributes[p]);
    }
    for(let child of children) {
        if(typeof child === "string") {
            child = document.createTextNode(child);
        }
        e.appendChild(child);
    }
    return e;
}

document.body.appendChild(<MyComponent class="c" id="a">
    <div>abc</div>
    <div></div>
    <div></div>
</MyComponent>)