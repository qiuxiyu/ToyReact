import { createElement, Component, render } from './toy-react.js'

class MyComponent extends Component {
    render() {
        return <div>My component</div>
    }
}

render(<MyComponent class="c" id="a">
    <div>abc</div>
    <div></div>
    <div></div>
</MyComponent>, document.body);