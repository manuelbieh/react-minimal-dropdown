import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../src/Dropdown';

import 'normalize-css/normalize.css';
import '@manuel-bieh/layout/css/website/config/defaults.css';
import '@manuel-bieh/layout/css/website/objects/header.css';

import css from './example.css';

class Example extends React.PureComponent {

    state = {
        gap: 10,
        beak: true
    };

    render() {

        const { gap, beak } = this.state;

        return (
            <div>

                <header>
                    <h1>React Minimal Dropdown</h1>
                </header>

                <div className={ css.wrapper }>

                    <p>Pretty straightforward: I needed a tiny dropdown component which was good for exactly one thing: a user clicks on a trigger and content appears next to it. I looked at dozens of existing React dropdown components but all of them were either overcomplicated or unmaintained or had a really bad quality (or all of it). The result: React Minimal Dropdown.</p>

                    <p>You can configure a direction, you have a very little and neutral default styling and that's it. Use it if you need the simplest possible Dropdown with zero dependencies, adjust it to your needs and be happy :)</p>

                    <h2>Project philosophy</h2>

                    <p>We take the stability and performance of this package seriously, because one day it might run millions of times a day in browsers all around the world. Updates are thoroughly reviewed for performance impacts before being released.</p>

                    <p>The react-minimal-dropdown package follows the SemVer standard for versioning.</p>

                    <p><em>(Inspired by <a href="https://github.com/JedWatson/classnames#project-philosophy">classnames</a>)</em></p>
                    <h2>Examples</h2>

                    <p>
                        Gap:<br />
                        <input
                            type="range"
                            min={0}
                            max={32}
                            value={ gap }
                            onChange={(e) => {
                                this.setState({
                                    gap: parseInt(e.target.value, 10)
                                });
                            }}/>
                        { gap }px
                    </p>
                    <p>
                        <label>
                            <input
                                type="checkbox"
                                checked={ beak }
                                onChange={(e) => {
                                    this.setState({
                                        beak: e.target.checked
                                    });
                                }} />
                            show beak
                        </label>
                    </p>

                    <pre>&lt;Dropdown direction="left|top|bottom|right" beak={`{${JSON.stringify(beak)}}`} gap={`{${gap}}`}&gt;</pre>

                    <section style={{marginTop: '72px'}}>
                        <Dropdown direction="left" show beak={beak} gap={gap}>
                            <Dropdown.Trigger>Open left</Dropdown.Trigger>
                            <Dropdown.Content>I am the <br />Dropdown content</Dropdown.Content>
                        </Dropdown>
                        <Dropdown direction="top" show beak={beak} gap={gap}>
                            <Dropdown.Trigger>Open top</Dropdown.Trigger>
                            <Dropdown.Content>I am the <br />Dropdown content</Dropdown.Content>
                        </Dropdown>
                        <Dropdown direction="bottom" show beak={beak} gap={gap}>
                            <Dropdown.Trigger>Open bottom</Dropdown.Trigger>
                            <Dropdown.Content>I am the <br />Dropdown content</Dropdown.Content>
                        </Dropdown>
                        <Dropdown direction="right" show beak={beak} gap={gap}>
                            <Dropdown.Trigger>Open right</Dropdown.Trigger>
                            <Dropdown.Content>I am the <br />Dropdown content</Dropdown.Content>
                        </Dropdown>
                    </section>
                    <section>
                        <hr />
                        Top left | center | right<br />
                        <Dropdown direction="top" edge="left" show beak={beak} gap={gap}>
                            <Dropdown.Trigger>Open top left</Dropdown.Trigger>
                            <Dropdown.Content>I am the <br />Dropdown content</Dropdown.Content>
                        </Dropdown>
                        <Dropdown direction="top" edge="center" show beak={beak} gap={gap}>
                            <Dropdown.Trigger>Open top center</Dropdown.Trigger>
                            <Dropdown.Content>I am the <br />Dropdown content</Dropdown.Content>
                        </Dropdown>
                        <Dropdown direction="top" edge="right" show beak={beak} gap={gap}>
                            <Dropdown.Trigger>Open top right</Dropdown.Trigger>
                            <Dropdown.Content>I am the <br />Dropdown content</Dropdown.Content>
                        </Dropdown>
                        <hr />
                    </section>
                    <section style={{marginTop: '72px'}}>
                        <Dropdown direction="right" show beak={beak} gap={gap}>
                            <Dropdown.Trigger>Open right</Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown direction="top" beak={beak} gap={gap}>
                                    <Dropdown.Trigger>Top Nested</Dropdown.Trigger>
                                    <Dropdown.Content>Yeah!</Dropdown.Content>
                                </Dropdown>
                            </Dropdown.Content>
                        </Dropdown>
                    </section>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Example />,
    document.getElementById('example')
);

if (module.hot) {
    module.hot.accept();
}
