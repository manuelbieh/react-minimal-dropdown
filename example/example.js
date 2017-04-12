import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../src/Dropdown';
import css from './example.css';

class Example extends React.PureComponent {

    state = {
        gap: 10,
        beak: true
    };

    render() {

        const { gap, beak } = this.state;

        return (
            <div className={ css.wrapper }>

                <h1>React Minimal Dropdown</h1>

                <p>Pretty straightforward: I needed a tiny dropdown component which was good for exactly one thing: a user clicks on a trigger and content appears. I looked at dozens of existing react components but all of them were either overcomplicated or unmaintained or had a really bad quality (or all of it). The result: React Minimal Dropdown.</p>

                <p>You can configure a direction, you have a very little and neutral default styling and that's it. Use it if you need the simplest possible Dropdown with zero dependencies, adjust it to your needs and be happy :)</p>

                <h2>Props</h2>

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
                <section style={{marginTop: '72px'}}>
                    <Dropdown direction="right" show beak={beak} gap={gap}>
                        <Dropdown.Trigger>Open right</Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown direction="top">
                                <Dropdown.Trigger>Nested</Dropdown.Trigger>
                                <Dropdown.Content>Yeah!</Dropdown.Content>
                            </Dropdown>
                        </Dropdown.Content>
                    </Dropdown>
                </section>
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
