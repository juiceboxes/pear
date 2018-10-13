import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import ThemeContext from '../Dark/configContext';

/**
 * This is a component that wraps the page
 */

class Main extends Component {
    render () {
        const { className, children, ...props } = this.props;
        return (
            <ThemeContext.Consumer>
                { theme => {

                    let themeClasses = classNames(
                        { [`pear-m-${ theme }`]: theme  === 'dark' }
                    );

                    return (
                        <section { ...props }
                            className={ `${ classNames(className, 'pear-l-page__main-section') } ${ themeClasses }` }
                        >
                            { children }
                        </section>
                    );
                } }
            </ThemeContext.Consumer>
        );
    }
}

Main.propTypes = {
    className: propTypes.string,
    children: propTypes.any.isRequired
};

export default Main;
