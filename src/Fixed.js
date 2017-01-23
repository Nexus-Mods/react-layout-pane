import React, { Component } from 'react';
import assign from 'object-assign';

export default class Fixed extends Component {

    render() {
        let classes = ['Fixed'];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        let style = {
            position: 'relative'
        };

        if (this.props.style) {
            assign(style, this.props.style);
        }

        let restProps = assign({}, this.props);
        delete restProps.className;
        delete restProps.style;


        return <div className={classes.join(' ')} style={style} {...restProps}>{this.props.children}</div>;
    }
}

Fixed.propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object
};
