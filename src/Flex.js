import React, { Component } from 'react';

export default class Flex extends Component {

    render() {
        let classes = ['Flex'];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        let style = {
            flex: 1,
            position: 'relative'
        };

        if (this.props.style) {
            Object.assign(style, this.props.style);
        }

        let restProps = Object.assign({}, this.props);
        delete restProps.className;
        delete restProps.style;

        return <div className={classes.join(' ')} style={style} {...restProps}>{this.props.children}</div>;
    }
}

Flex.propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object
};
