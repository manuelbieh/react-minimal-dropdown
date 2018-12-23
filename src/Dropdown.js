// @flow
import * as React from 'react';
import Trigger from './Trigger';
import Content from './Content';
import css from './Dropdown.module.css';

type DirectionT = 'toppp' | 'right' | 'bottom' | 'left';
type EdgeT = 'tttop' | 'right' | 'bottom' | 'left' | 'center';

type DropdownPropsT = {
    adjust: boolean,
    beak?: boolean,
    block?: boolean,
    children: any,
    className?: string,
    direction: DirectionT,
    edge: EdgeT,
    gap: number,
    ignoreResize: boolean,
    ignoreScroll: boolean,
    onOpen?: (e: SyntheticEvent<HTMLElement>) => void,
    onClose?: (e: SyntheticEvent<HTMLElement>) => void,
    show?: boolean,
};

type DropdownStateT = {
    show?: boolean,
    direction: DirectionT,
};

export class Dropdown extends React.PureComponent<
    DropsdownPropsT,
    DropdownStateT,
> {
    static defaultProps = {
        adjust: true,
        direction: 'bottom',
        edge: 'center',
        gap: 0,
        ignoreScroll: true,
        ignoreResize: false,
    };

    static Trigger = Trigger;
    static Content = Content;

    state = {
        show: this.props.show,
        direction: this.props.direction,
    };

    componentDidMount() {
        this.addEvents();
        this.calculatePosition();
    }

    componentDidUpdate(prevProps: DropdownPropsT, prevState: DropdownStateT) {
        if (
            prevProps.gap !== this.props.gap ||
            prevProps.direction !== this.props.direction
        ) {
            this.calculatePosition();
        }

        if (
            this.state.show === true &&
            prevState.show === false &&
            typeof this.props.onOpen === 'function'
        ) {
            return this.props.onOpen(this);
        }

        if (
            this.state.show === false &&
            prevState.show === true &&
            typeof this.props.onClose === 'function'
        ) {
            return this.props.onClose(this);
        }
    }

    componentWillUnmount() {
        this.removeEvents();
    }

    wrapperEl = React.createRef();
    contentEl = React.createRef();
    triggerEl = React.createRef();

    addEvents = () => {
        window.addEventListener('click', this.closeOnClick);
        window.addEventListener('touchstart', this.closeOnClick);
        window.addEventListener('keydown', this.closeOnEsc);

        if (!this.props.ignoreResize) {
            window.addEventListener('resize', this.calculatePosition);
        }

        if (!this.props.ignoreScroll) {
            window.addEventListener('scroll', this.calculatePosition);
        }
    };

    removeEvents = () => {
        window.removeEventListener('click', this.closeOnClick);
        window.removeEventListener('touchstart', this.closeOnClick);
        window.removeEventListener('keydown', this.closeOnEsc);
        window.removeEventListener('resize', this.calculatePosition);
        window.removeEventListener('scroll', this.calculatePosition);
    };

    closeOnEsc = (e) => {
        if (e.keyCode === 27) {
            this.hide();
        }
    };

    closeOnClick = (e) => {
        if (
            e.target !== this.wrapperEl &&
            !this.wrapperEl.current.contains(e.target) &&
            this.state.show
        ) {
            this.hide();
        }
    };

    setContentPosition = ({ top, right, bottom, left } = {}) => {
        this.contentEl.current.style.top =
            typeof top === 'number' ? `${top}px` : 'auto';
        this.contentEl.current.style.right =
            typeof right === 'number' ? `${right}px` : 'auto';
        this.contentEl.current.style.bottom =
            typeof bottom === 'number' ? `${bottom}px` : 'auto';
        this.contentEl.current.style.left =
            typeof left === 'number' ? `${left}px` : 'auto';
    };

    getWrapperBounds = () => {
        return this.wrapperEl.current.getBoundingClientRect();
    };

    getTriggerBounds = () => {
        return this.triggerEl.current.getBoundingClientRect();
    };

    getContentBounds() {
        this.contentEl.current.style.display = 'block';
        const bounds = this.contentEl.current.getBoundingClientRect();
        this.contentEl.current.style.display = null;
        return bounds;
    }

    getDirectionMode = () => {
        return ['left', 'right'].includes(this.state.direction)
            ? 'horizontal'
            : 'vertical';
    };

    getEdgePosition = (edge = this.props.edge) => {
        const triggerBounds = this.getTriggerBounds();
        const wrapperBounds = this.getWrapperBounds();
        const contentBounds = this.getContentBounds();

        if (this.getDirectionMode() === 'horizontal') {
            if (edge === 'top') {
                return {
                    top: triggerBounds.top - wrapperBounds.top,
                };
            } else if (edge === 'bottom') {
                return {
                    top:
                        triggerBounds.bottom -
                        wrapperBounds.top -
                        contentBounds.height,
                };
            }

            return {
                top:
                    triggerBounds.top -
                    wrapperBounds.top -
                    contentBounds.height / 2 +
                    triggerBounds.height / 2,
            };
        }

        if (edge === 'left') {
            return {
                left: triggerBounds.left - wrapperBounds.left,
            };
        } else if (edge === 'right') {
            return {
                left:
                    triggerBounds.right -
                    wrapperBounds.left -
                    contentBounds.width,
            };
        }

        return {
            left:
                triggerBounds.left -
                wrapperBounds.left -
                contentBounds.width / 2 +
                triggerBounds.width / 2,
        };
    };

    getContentPosition = (
        direction = this.props.direction,
        gap = this.props.gap,
    ) => {
        const triggerBounds = this.getTriggerBounds();
        const wrapperBounds = this.getWrapperBounds();

        if (direction === 'left') {
            return {
                right:
                    wrapperBounds.right -
                    triggerBounds.right +
                    triggerBounds.width +
                    (gap || 0),
                left: null,
            };
        }

        if (direction === 'right') {
            return {
                left: triggerBounds.right - wrapperBounds.left + (gap || 0),
                right: null,
            };
        }

        if (direction === 'top') {
            return {
                bottom:
                    wrapperBounds.bottom -
                    triggerBounds.bottom +
                    triggerBounds.height +
                    (gap || 0),
                top: null,
            };
        }

        if (direction === 'bottom') {
            return {
                top:
                    triggerBounds.top -
                    wrapperBounds.top +
                    triggerBounds.height +
                    (gap || 0),
                bottom: null,
            };
        }
    };

    shouldContentBeAdjusted = (direction = this.props.direction) => {
        const contentBounds = this.getContentBounds();

        const clientWidth = Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0,
        );

        if (direction === 'left') {
            if (
                contentBounds.left < 0 &&
                contentBounds.right < clientWidth &&
                this.props.adjust
            ) {
                return true;
            }
        }

        if (direction === 'right') {
            if (
                contentBounds.right > clientWidth &&
                contentBounds.left >= 0 &&
                this.props.adjust
            ) {
                return true;
            }
        }

        const clientHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0,
        );

        if (direction === 'top') {
            if (
                contentBounds.top < 0 &&
                contentBounds.bottom < clientHeight &&
                this.props.adjust
            ) {
                return true;
            }
        }

        if (direction === 'bottom') {
            if (
                contentBounds.bottom > clientHeight &&
                contentBounds.top < clientHeight &&
                this.props.adjust
            ) {
                return true;
            }
        }
        return false;
    };

    adjustContentPosition = (direction = this.props.direction) => {
        if (this.props.adjust && this.shouldContentBeAdjusted()) {
            const opposites = {
                left: 'right',
                right: 'left',
                top: 'bottom',
                bottom: 'top',
            };

            const opposite = opposites[direction];

            const oppositePosition = {
                ...this.getContentPosition(opposite),
                ...this.getEdgePosition(),
            };

            this.setState({
                direction: opposite,
            });

            // content is outside of the viewport. try opposite site
            this.setContentPosition(oppositePosition);

            if (this.shouldContentBeAdjusted(opposite)) {
                const restoredPosition = {
                    ...this.getContentPosition(),
                    ...this.getEdgePosition(),
                };

                this.setState(() => ({
                    direction,
                }));

                // ... content is still not visible, reset to original direction
                this.setContentPosition(restoredPosition);
            }
        }
    };

    calculatePosition = () => {
        const position = {
            ...this.getContentPosition(),
            ...this.getEdgePosition(),
        };

        this.setState(() => ({
            direction: this.props.direction,
        }));

        this.setContentPosition(position);

        if (this.props.adjust) {
            this.adjustContentPosition();
        }
    };

    hide = () => {
        this.setState(() => ({
            show: false,
        }));
        this.setContentPosition();
        this.removeEvents();
    };

    show = () => {
        this.setState(() => ({
            show: true,
        }));
        this.calculatePosition();
        this.addEvents();
    };

    isOpen = () => {
        return this.state.show;
    };

    toggle = () => {
        if (this.isOpen()) {
            this.hide();
        } else {
            this.show();
        }
    };

    render() {
        const { show, direction = 'bottom' } = this.state;

        const {
            block,
            children,
            className,
            edge = 'center',
            beak,
        } = this.props;

        const classNames = [
            'ReactMinimalDropdown',
            `ReactMinimalDropdown--is${show ? 'Open' : 'Closed'}`,
            `ReactMinimalDropdown--${direction}`,
            css.wrapper,
            block && css.block,
            beak && css.beak,
            show && css[direction],
            css[`edge--${edge}`],
            css[show ? 'open' : 'closed'],
            className,
            className && `${className}--is${show ? 'Open' : 'Closed'}`,
            className && `${className}--${direction}`,
        ]
            .filter((name) => name !== false && typeof name !== 'undefined')
            .join(' ');

        let triggerId;

        return (
            <div ref={this.wrapperEl} className={classNames}>
                {React.Children.map(children, (child) => {
                    if (child.type === Trigger) {
                        if (child.props.id) {
                            triggerId = child.props.id;
                        }

                        return React.cloneElement(child, {
                            ...child.props,
                            ref: this.triggerEl,
                            id: triggerId,
                            show: show,
                            toggle: this.toggle.bind(this),
                        });
                    }

                    if (child.type === Content) {
                        return React.cloneElement(child, {
                            ...child.props,
                            ref: this.contentEl,
                            ['aria-labelledby']:
                                child.props['aria-labelledby'] || triggerId,
                            direction: direction,
                        });
                    }

                    return child;
                })}
            </div>
        );
    }
}

export default Dropdown;

export { Trigger, Content };
