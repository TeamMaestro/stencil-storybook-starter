import { Component, h } from '@stencil/core';

@Component({
    tag: 'ui-example',
    styleUrl: 'example.scss',
    shadow: true
})
export class Example {

    render() {
        return (
            <div>Hello World</div>
        )
    }

}
