import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import ThemeContext from '../Dark/configContext';

const PageHeader = ({ className, children, ...props }) => {

    let pageHeaderClasses = classNames(
        className,
        'pear-l-page__main-section'
    );

    return (
        <ThemeContext.Consumer>
            { theme => {
                return (
                    <section className={ `${ pageHeaderClasses } pear-m-${ theme }-200` } widget-type='PearPageHeader'>
                        <div className='pear-c-content'>
                            { children }
                        </div>
                    </section>
                );
            } }
        </ThemeContext.Consumer>
    );
};

export default PageHeader;

PageHeader.propTypes = {
    children: propTypes.any.isRequired,
    className: propTypes.string
};
