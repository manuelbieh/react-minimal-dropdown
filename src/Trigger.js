import React from 'react';
import css from './Dropdown.css';

let PropTypes;
if (process.env.NODE_ENV !== 'production') {
    PropTypes = require('prop-types');
}

export default class Trigger extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.any,
        arrow: PropTypes.bool,
        toggle: PropTypes.func,
        show: PropTypes.bool,
    };

    get DOMNode() {
        return this.node;
    }

    setNode = (node) => {
        this.node = node;
    };

    render() {
        const { children, className = '', toggle, show, arrow, ...leftover } = this.props;

        return (
            <div
                {...leftover}
                ref={this.setNode}
                onClick={toggle}
                className={`ReactMinimalDropdown__Trigger ${css.trigger ||
                    ''} ${className} ${(arrow && css.arrow) || ''}`}
                aria-expanded={show}
                aria-haspopup="true"
            >
                {children}
            </div>
        );
    }
}
