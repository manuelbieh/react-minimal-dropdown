import React from 'react';

let PropTypes;
if (process.env.NODE_ENV !== 'production') {
    PropTypes = require('prop-types');
}

import { findDOMNode } from 'react-dom';

import Trigger from './Trigger';
import Content from './Content';

import css from './Dropdown.css';

export class Dropdown extends React.Component {

    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
        show: PropTypes.bool,
        gap: PropTypes.number,
        onBeforeOpen: PropTypes.func,
        onBeforeClose: PropTypes.func,
        onAfterOpen: PropTypes.func,
        onAfterClose: PropTypes.func,
        direction: PropTypes.oneOf([
            'top',
            'right',
            'bottom',
            'left'
        ]),
        edge: PropTypes.oneOf([
            'top',
            'right',
            'bottom',
            'left',
            'center'
        ]),
        beak: PropTypes.bool,
    };

    static defaultProps = {
        direction: 'bottom',
        edge: 'center'
    };

    static Trigger = Trigger;
    static Content = Content;

    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
        };
        this.closeOnClick = this.closeOnClick.bind(this);
        this.closeOnEsc = this.closeOnEsc.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.addEvents();
        this.calculatePosition();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.gap !== this.props.gap) {
            this.calculatePosition();
        }
    }

    componentWillUnmount() {
        this.removeEvents();
    }

    addEvents() {
        window.addEventListener('click', this.closeOnClick);
        window.addEventListener('touchstart', this.closeOnClick);
        window.addEventListener('keydown', this.closeOnEsc);
    }

    removeEvents() {
        window.removeEventListener('click', this.closeOnClick);
        window.removeEventListener('touchstart', this.closeOnClick);
        window.removeEventListener('keydown', this.closeOnEsc);
    }

    closeOnEsc(e) {
        if (e.keyCode === 27) {
            this.hide();
        }
    }

    closeOnClick(e) {
        const self = findDOMNode(this);
        if (e.target !== self && !self.contains(e.target) && this.state.show) {
            this.hide();
        }
    }

    componentWillUpdate(nextProps, nextState) {

        if (nextState.show && typeof this.props.onBeforeOpen === 'function') {
            return this.props.onBeforeOpen(this);
        }

        if (!nextState.show && typeof this.props.onBeforeClose === 'function') {
            return this.props.onBeforeClose(this);
        }

    }

    componentDidUpdate() {

        if (this.state.show && typeof this.props.onAfterOpen === 'function') {
            return this.props.onAfterOpen(this);
        }

        if (!this.state.show && typeof this.props.onAfterClose === 'function') {
            return this.props.onAfterClose(this);
        }

    }

    setContentPosition({ top='auto', right='auto', bottom='auto', left='auto'}={}) {
        // console.log('TRBL:', top, right, bottom, left);
        this.contentEl.DOMNode.style.top = isNaN(top) && top !== 'auto' ? top : `${top}px`;
        this.contentEl.DOMNode.style.right = isNaN(right) && right !== 'auto' ? right : `${right}px`;
        this.contentEl.DOMNode.style.bottom = isNaN(bottom) && bottom !== 'auto' ? bottom : `${bottom}px`;
        this.contentEl.DOMNode.style.left = isNaN(left) && left !== 'auto' ? left : `${left}px`;
        // const { top: Top, right: Right, bottom: Bottom, left: Left } = this.contentEl.DOMNode.style;
        // console.log('CELPOS', Top, Right, Bottom, Left);
    }

    get wrapperBounds() {
        return this.wrapperEl.getBoundingClientRect();
    }

    get triggerBounds() {
        return this.triggerEl.DOMNode.getBoundingClientRect();
    }

    get contentBounds() {
        this.contentEl.DOMNode.style.display = 'block';
        const bounds = this.contentEl.DOMNode.getBoundingClientRect();
        this.contentEl.DOMNode.style.display = null;
        return bounds;
    }

    getHorizontalEdgePosition(edge) {

        if (edge === 'left') {
            return this.triggerBounds.left - this.wrapperBounds.left;
        } else if (edge === 'right') {
            return (this.triggerBounds.right - this.wrapperBounds.left) - this.contentBounds.width;
        } else {
            return (this.triggerBounds.left - this.wrapperBounds.left - (this.contentBounds.width / 2)) + this.triggerBounds.width / 2;
        }

    }

    getVerticalEdgePosition(edge) {

        if (edge === 'top') {
            return this.triggerBounds.top - this.wrapperBounds.top;
        } else if (edge === 'bottom') {
            return (this.triggerBounds.bottom - this.wrapperBounds.top) - this.contentBounds.height;
        } else {
            return (this.triggerBounds.top - this.wrapperBounds.top - (this.contentBounds.height / 2)) + this.triggerBounds.height / 2;
        }

    }


    calculatePosition() {

        const { direction, edge, gap=0 } = this.props;
        const wrapperBounds = this.wrapperEl.getBoundingClientRect();
        const triggerBounds = this.triggerEl.DOMNode.getBoundingClientRect();
        this.contentEl.DOMNode.style.display = 'block';
        const contentBounds = this.contentEl.DOMNode.getBoundingClientRect();
        this.contentEl.DOMNode.style.display = null;

        if (direction === 'top') {

            const edgePos = this.getHorizontalEdgePosition(edge);

            this.setContentPosition({
                bottom: wrapperBounds.bottom - triggerBounds.bottom + triggerBounds.height + gap,
                // left: (triggerBounds.left - wrapperBounds.left - (contentBounds.width / 2)) + triggerBounds.width / 2
                left: edgePos
            });

        } else if (direction === 'left') {
            this.setContentPosition({
                right: wrapperBounds.right - triggerBounds.right + triggerBounds.width + gap,
                // top: (triggerBounds.top - wrapperBounds.top + (triggerBounds.height / 2)) - (contentBounds.height / 2)
            });
        } else if (direction === 'right') {
            this.setContentPosition({
                left: triggerBounds.right - wrapperBounds.left + gap,
                // top: (triggerBounds.top - wrapperBounds.top + (triggerBounds.height / 2)) - (contentBounds.height / 2)
            });
        } else {
            const edgePos = this.getHorizontalEdgePosition(edge);
            this.setContentPosition({
                // left: (triggerBounds.left - wrapperBounds.left - (contentBounds.width / 2)) + triggerBounds.width / 2
                top: triggerBounds.top - wrapperBounds.top + triggerBounds.height + gap,
                left: edgePos
            });
        }

        console.log('TRIGGER BOUNDS:', triggerBounds);
        console.log('WRAPPER BOUNDS:', wrapperBounds);

    }

    hide() {
        this.setState({
            show: false
        });
        this.removeEvents();
    }

    show() {
        this.setState({
            show: true
        });
        this.calculatePosition();
        this.addEvents();
    }

    toggle() {

        if (this.state.show) {
            this.hide();
        } else {
            this.show();
        }

    }

    render() {

        const { show } = this.state;
        const {
            children,
            className='ReactMinimalDropdown',
            direction='bottom',
            edge='center',
            beak
        } = this.props;

        const classNames = [
            css.wrapper,
            beak && css.beak,
            css[direction],
            css[`edge--${edge}`],
            css[show ? 'open' : 'closed'],
            className,
            `${className}--${direction}`
        ]
        .filter((name) => typeof name !== 'undefined')
        .join(' ');

        return (
            <div
                ref={(node) => { this.wrapperEl = node; }}
                className={ classNames }>
                {
                    React.Children.map(children, (child) => {

                        if (child.type === Trigger) {

                            if (process.env.NODE_ENV === 'production' && this.triggerEl) {
                                console.error('[react-minimal-dropdown] Dropdowns may only contain one Dropdown.Trigger element.');
                            }

                            return React.cloneElement(child, {
                                ...child.props,
                                ref: (node) => {
                                    this.triggerEl = node;
                                },
                                toggle: this.toggle.bind(this)
                            });
                        }

                        if (child.type === Content) {

                            if (process.env.NODE_ENV === 'production' && this.contentEl) {
                                console.error('[react-minimal-dropdown] Dropdowns may only contain one Dropdown.Content element.');
                            }

                            return React.cloneElement(child, {
                                ...child.props,
                                ref: (node) => {
                                    this.contentEl = node;
                                },
                                direction: direction
                            });
                        }

                        return child;

                    })
                }
            </div>
        );

    }

}

export default Dropdown;
