/*!
  Copyright (c) 2017 Manuel Bieh.
  Licensed under the MIT License (MIT), see
  https://github.com/manuelbieh/react-minimal-dropdown
*/

import React from 'react';

let PropTypes;
if (process.env.NODE_ENV !== 'production') {
    PropTypes = require('prop-types');
}

import Trigger from './Trigger';
import Content from './Content';

import css from './Dropdown.css';

export class Dropdown extends React.PureComponent {

    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
        show: PropTypes.bool,
        gap: PropTypes.number,
        adjust: PropTypes.bool,
        onBeforeOpen: PropTypes.func,
        onBeforeClose: PropTypes.func,
        onAfterOpen: PropTypes.func,
        onAfterClose: PropTypes.func,
        ignoreResize: PropTypes.bool,
        ignoreScroll: PropTypes.bool,
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
        ignoreScroll: true,
        ignoreResize: false,
        adjust: true,
        direction: 'bottom',
        edge: 'center',
        gap: 0
    };

    static Trigger = Trigger;
    static Content = Content;

    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            direction: props.direction
        };
        this.closeOnClick = this.closeOnClick.bind(this);
        this.closeOnEsc = this.closeOnEsc.bind(this);
        this.calculatePosition = this.calculatePosition.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.toggle = this.toggle.bind(this);
        this.isOpen = this.isOpen.bind(this);
    }

    componentDidMount() {
        this.addEvents();
        this.calculatePosition();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.gap !== this.props.gap || nextProps.direction !== this.props.direction) {
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

        if (!this.props.ignoreResize) {
            window.addEventListener('resize', this.calculatePosition);
        }

        if (!this.props.ignoreScroll) {
            window.addEventListener('scroll', this.calculatePosition);
        }

    }

    removeEvents() {
        window.removeEventListener('click', this.closeOnClick);
        window.removeEventListener('touchstart', this.closeOnClick);
        window.removeEventListener('keydown', this.closeOnEsc);
        window.removeEventListener('resize', this.calculatePosition);
        window.removeEventListener('scroll', this.calculatePosition);

    }

    closeOnEsc(e) {
        if (e.keyCode === 27) {
            this.hide();
        }
    }

    closeOnClick(e) {
        if (e.target !== this.wrapperEl && !this.wrapperEl.contains(e.target) && this.state.show) {
            this.hide();
        }
    }

    componentWillUpdate(nextProps, nextState) {

        if (nextState.show === true && this.state.show === false && typeof this.props.onBeforeOpen === 'function') {
            return this.props.onBeforeOpen(this);
        }

        if (nextState.show === false && this.state.show === true && typeof this.props.onBeforeClose === 'function') {
            return this.props.onBeforeClose(this);
        }

    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.show === true && prevState.show === false && typeof this.props.onAfterOpen === 'function') {
            return this.props.onAfterOpen(this);
        }

        if (this.state.show === false && prevState.show === true && typeof this.props.onAfterClose === 'function') {
            return this.props.onAfterClose(this);
        }

    }

    setContentPosition({ top, right, bottom, left}={}) {
        this.contentEl.DOMNode.style.top = typeof top === 'number' ? `${top}px` : 'auto';
        this.contentEl.DOMNode.style.right = typeof right === 'number' ? `${right}px` : 'auto';
        this.contentEl.DOMNode.style.bottom = typeof bottom === 'number' ? `${bottom}px` : 'auto';
        this.contentEl.DOMNode.style.left = typeof left === 'number' ? `${left}px` : 'auto';
    }

    getWrapperBounds() {
        return this.wrapperEl.getBoundingClientRect();
    }

    getTriggerBounds() {
        return this.triggerEl.DOMNode.getBoundingClientRect();
    }

    getContentBounds() {
        this.contentEl.DOMNode.style.display = 'block';
        const bounds = this.contentEl.DOMNode.getBoundingClientRect();
        this.contentEl.DOMNode.style.display = null;
        return bounds;
    }

    getDirectionMode() {
        return ['left', 'right'].includes(this.state.direction) ? 'horizontal' : 'vertical';
    }

    getEdgePosition(edge=this.props.edge) {

        const triggerBounds = this.getTriggerBounds();
        const wrapperBounds = this.getWrapperBounds();
        const contentBounds = this.getContentBounds();

        if (this.getDirectionMode() === 'horizontal') {

            if (edge === 'top') {

                return {
                    top: triggerBounds.top - wrapperBounds.top
                };

            } else if (edge === 'bottom') {

                return {
                    top: (triggerBounds.bottom - wrapperBounds.top) - contentBounds.height
                };

            }

            return {
                top: (triggerBounds.top - wrapperBounds.top - (contentBounds.height / 2)) + triggerBounds.height / 2
            };

        }

        if (edge === 'left') {

            return {
                left: triggerBounds.left - wrapperBounds.left
            };

        } else if (edge === 'right') {

            return {
                left: (triggerBounds.right - wrapperBounds.left) - contentBounds.width
            };

        }

        return {
            left: (triggerBounds.left - wrapperBounds.left - (contentBounds.width / 2)) + triggerBounds.width / 2
        };

    }

    getContentPosition(direction=this.props.direction, gap=this.props.gap) {

        const triggerBounds = this.getTriggerBounds();
        const wrapperBounds = this.getWrapperBounds();

        if (direction === 'left') {
            return {
                right: wrapperBounds.right - triggerBounds.right + triggerBounds.width + (gap || 0),
                left: null
            };
        }

        if (direction === 'right') {
            return {
                left: triggerBounds.right - wrapperBounds.left + (gap || 0),
                right: null
            };
        }

        if (direction === 'top') {
            return {
                bottom: wrapperBounds.bottom - triggerBounds.bottom + triggerBounds.height + (gap || 0),
                top: null
            };
        }

        if (direction === 'bottom') {
            return {
                top: triggerBounds.top - wrapperBounds.top + triggerBounds.height + (gap || 0),
                bottom: null
            };
        }

    }

    shouldContentBeAdjusted(direction=this.props.direction) {

        const contentBounds = this.getContentBounds();

        const clientWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        if (direction === 'left') {
            if (contentBounds.left < 0 && contentBounds.right < clientWidth && this.props.adjust) {
                return true;
            }
        }

        if (direction === 'right') {
            if (contentBounds.right > clientWidth && contentBounds.left >= 0 && this.props.adjust) {
                return true;
            }
        }

        const clientHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        if (direction === 'top') {
            if (contentBounds.top < 0 && contentBounds.bottom < clientHeight && this.props.adjust) {
                return true;
            }
        }

        if (direction === 'bottom') {
            if (contentBounds.bottom > clientHeight && contentBounds.top < clientHeight && this.props.adjust) {
                return true;
            }
        }
        return false;

    }

    adjustContentPosition(direction=this.props.direction) {

        if (this.props.adjust && this.shouldContentBeAdjusted()) {

            const opposites = {
                left: 'right',
                right: 'left',
                top: 'bottom',
                bottom: 'top'
            };

            const opposite = opposites[direction];

            const oppositePosition = Object.assign({},
                this.getContentPosition(opposite),
                this.getEdgePosition()
            );

            this.setState({
                direction: opposite
            });

            // content is outside of the viewport. try opposite site
            this.setContentPosition(oppositePosition);

            if (this.shouldContentBeAdjusted(opposite)) {

                const restoredPosition = Object.assign({},
                    this.getContentPosition(),
                    this.getEdgePosition()
                );

                this.setState({
                    direction: direction
                });

                // ... content is still not visible, reset to original direction
                this.setContentPosition(restoredPosition);

            }

        }

    }

    calculatePosition() {

        const position = Object.assign({},
            this.getContentPosition(),
            this.getEdgePosition()
        );

        this.setState({
            direction: this.props.direction
        });

        this.setContentPosition(position);

        if (this.props.adjust) {
            this.adjustContentPosition();
        }

    }

    hide() {
        this.setState({
            show: false
        });
        this.setContentPosition();
        this.removeEvents();
    }

    show() {
        this.setState({
            show: true
        });
        this.calculatePosition();
        this.addEvents();
    }

    isOpen() {
        return this.state.show;
    }

    toggle() {

        if (this.isOpen()) {
            this.hide();
        } else {
            this.show();
        }

    }

    render() {

        const {
            show,
            direction='bottom'
        } = this.state;

        const {
            children,
            className,
            edge='center',
            beak
        } = this.props;

        const classNames = [
            'ReactMinimalDropdown',
            `ReactMinimalDropdown--is${show ? 'Open' : 'Closed'}`,
            `ReactMinimalDropdown--${direction}`,
            css.wrapper,
            beak && css.beak,
            show && css[direction],
            css[`edge--${edge}`],
            css[show ? 'open' : 'closed'],
            className,
            `${className}--is${show ? 'Open' : 'Closed'}`,
            `${className}--${direction}`
        ]
        .filter((name) => name !== false && typeof name !== 'undefined')
        .join(' ');

        let triggerId = Math.random().toString(36).substring(2);

        return (
            <div
                ref={(node) => { this.wrapperEl = node; }}
                className={ classNames }>
                {
                    React.Children.map(children, (child) => {

                        if (child.type === Trigger) {

                            if (process.env.NODE_ENV !== 'production' && this.triggerEl) {
                                console.error('[react-minimal-dropdown] Dropdowns may only contain one <Dropdown.Trigger> element.');
                            }

                            if (child.props.id) {
                                triggerId = child.props.id;
                            }

                            return React.cloneElement(child, {
                                ...child.props,
                                ref: (node) => {
                                    this.triggerEl = node;
                                },
                                id: triggerId,
                                show: show,
                                toggle: this.toggle.bind(this)
                            });


                        }

                        if (child.type === Content) {

                            if (process.env.NODE_ENV !== 'production' && this.contentEl) {
                                console.error('[react-minimal-dropdown] Dropdowns may only contain one <Dropdown.Content> element.');
                            }

                            return React.cloneElement(child, {
                                ...child.props,
                                ref: (node) => {
                                    this.contentEl = node;
                                },
                                ['aria-labelledby']: child.props['aria-labelledby'] || triggerId,
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

export {
    Trigger,
    Content
};
