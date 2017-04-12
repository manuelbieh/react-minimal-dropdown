import React from 'react';
let PropTypes;
if (process.env.NODE_ENV !== 'production') {
    PropTypes = require('prop-types');
}

import css from './Dropdown.css';

export default class Content extends React.PureComponent {

    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string
    };

    get DOMNode() {
        return this.node;
    }

    render() {

        const { children, className='ReactMinimalDropdown__Content', ...leftover } = this.props;

        return (
            <div {...leftover} ref={(node) => { this.node = node; }} className={`${css.content || ''} ${className}`}>
                <div className={css.inner}>
                    { children }
                </div>
            </div>
        );

    }

}
