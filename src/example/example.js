import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown, Trigger, Content } from '../Dropdown';

import 'normalize-css/normalize.css';
import '@manuel-bieh/layout/css/website/config/defaults.css';
import '@manuel-bieh/layout/css/website/objects/header.css';

import css from './example.css';

class Example extends React.PureComponent {
    state = {
        gap: 10,
        beak: true,
        adjust: true,
        direction: 'right',
    };

    changeGap = (e) => {
        const { target: { value } } = e;
        this.setState(() => ({ gap: parseInt(value, 10) }));
    };

    changeBeak = (e) => {
        const { target: { checked } } = e;
        this.setState(() => ({ beak: checked }));
    };

    changeAdjust = (e) => {
        const { target: { checked } } = e;
        this.setState(() => ({ adjust: checked }));
    };

    render() {
        const { gap, beak, adjust } = this.state;

        return (
            <div>
                <header>
                    <h1>React Minimal Dropdown</h1>
                </header>

                <div className={css.wrapper}>
                    <h2>Options</h2>

                    <p>
                        Gap:<br />
                        <input
                            type="range"
                            min={0}
                            max={32}
                            value={gap}
                            onChange={this.changeGap}
                        />
                        {gap}px
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" checked={beak} onChange={this.changeBeak} /> Show
                            beak/triangle
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" checked={adjust} onChange={this.changeAdjust} />{' '}
                            Automatically (try to) adjust direction if content is out of viewport
                        </label>
                    </p>

                    <pre>
                        &lt;Dropdown<br />
                        {'    '}direction="left|top|bottom|right"<br />
                        {'    '}beak={`{${JSON.stringify(beak)}}`}
                        <br />
                        {'    '}adjust={`{${JSON.stringify(adjust)}}`}
                        <br />
                        {'    '}gap={`{${gap}}`}&gt;<br />
                        {'    '}&lt;Trigger&gt;Open&lt;Trigger&gt;<br />
                        {'    '}&lt;Content&gt;Content to be shown&lt;Content&gt;<br />
                        &lt;/Dropdown&gt;
                    </pre>

                    <h2>Examples</h2>

                    <section>
                        <div className="dropdown-examples">
                            <Dropdown direction="left" beak={beak} gap={gap} adjust={adjust} show>
                                <Trigger id="my-id">Open left</Trigger>
                                <Content>
                                    I am the <br />Dropdown content
                                </Content>
                            </Dropdown>
                            <Dropdown direction="top" beak={beak} gap={gap} adjust={adjust} show>
                                <Trigger>Open top</Trigger>
                                <Content>
                                    I am the <br />Dropdown content
                                </Content>
                            </Dropdown>
                            <Dropdown direction="bottom" beak={beak} gap={gap} adjust={adjust} show>
                                <Trigger>Open bottom</Trigger>
                                <Content>
                                    I am the <br />Dropdown content
                                </Content>
                            </Dropdown>
                            <Dropdown direction="right" beak={beak} gap={gap} adjust={adjust} show>
                                <Trigger>Open right</Trigger>
                                <Content>
                                    I am the <br />Dropdown content
                                </Content>
                            </Dropdown>
                        </div>
                    </section>
                    <section>
                        <div className="dropdown-examples">
                            <Dropdown
                                direction="top"
                                edge="left"
                                beak={beak}
                                gap={gap}
                                adjust={adjust}
                                show
                            >
                                <Trigger>Open top left</Trigger>
                                <Content>
                                    I am the <br />Dropdown content
                                </Content>
                            </Dropdown>
                            <Dropdown
                                direction="top"
                                edge="center"
                                beak={beak}
                                gap={gap}
                                adjust={adjust}
                                show
                            >
                                <Trigger>Open top center</Trigger>
                                <Content>
                                    I am the <br />Dropdown content
                                </Content>
                            </Dropdown>
                            <Dropdown
                                direction="top"
                                edge="right"
                                beak={beak}
                                gap={gap}
                                adjust={adjust}
                                show
                            >
                                <Trigger>Open top right</Trigger>
                                <Content>
                                    I am the <br />Dropdown content
                                </Content>
                            </Dropdown>
                        </div>
                    </section>
                    <section>
                        <div className="dropdown-examples">
                            <Dropdown
                                direction="left"
                                edge="top"
                                beak={beak}
                                gap={gap}
                                adjust={adjust}
                                show
                            >
                                <Trigger>
                                    Open<br /> left<br /> top
                                </Trigger>
                                <Content>
                                    I am the <br />Dropdown content
                                </Content>
                            </Dropdown>
                            <Dropdown
                                direction="left"
                                edge="center"
                                beak={beak}
                                gap={gap}
                                adjust={adjust}
                                show
                            >
                                <Trigger>
                                    Open<br /> left<br /> center
                                </Trigger>
                                <Content>
                                    I am the <br />Dropdown content
                                </Content>
                            </Dropdown>
                            <Dropdown
                                direction="left"
                                edge="bottom"
                                beak={beak}
                                gap={gap}
                                adjust={adjust}
                                show
                            >
                                <Trigger>
                                    Open<br /> left<br /> bottom
                                </Trigger>
                                <Content>
                                    I am the <br />Dropdown content
                                </Content>
                            </Dropdown>
                        </div>
                    </section>
                    <section>
                        <div className="dropdown-examples" style={{ float: 'right' }}>
                            <Dropdown
                                direction="top"
                                edge="right"
                                beak={beak}
                                gap={gap}
                                adjust={adjust}
                                show
                            >
                                <Trigger>Top center</Trigger>
                                <Content>
                                    I am the <br />Dropdown content
                                </Content>
                            </Dropdown>
                        </div>
                    </section>
                    <section style={{ marginTop: '72px' }}>
                        <div className="dropdown-examples">
                            <Dropdown direction="right" beak={beak} gap={gap} adjust={adjust} show>
                                <Trigger>Open right</Trigger>
                                <Content>
                                    <Dropdown direction="top" beak={beak} gap={gap} adjust={adjust}>
                                        <Trigger>Top Nested</Trigger>
                                        <Content>Yeah!</Content>
                                    </Dropdown>
                                </Content>
                            </Dropdown>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Example />, document.getElementById('example'));

if (module.hot) {
    module.hot.accept();
}
