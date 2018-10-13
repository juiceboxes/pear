const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const react = {
    commonjs: 'react',
    commonjs2: 'react',
    amd: 'react',
    root: 'React'
};

const reactDom = {
    commonjs: 'react-dom',
    commonjs2: 'react-dom',
    amd: 'react-dom',
    root: 'ReactDOM'
};

const ReactRouterDOM = {
    commonjs: 'react-router-dom',
    commonjs2: 'react-router-dom',
    amd: 'react-router-dom',
    root: 'ReactRouterDOM',
}

const isDirectory = source => lstatSync(source).isDirectory();

const getDirectories = (source, dest) =>
    readdirSync(source)
    .filter(name => name.indexOf('utils') === -1)
    .map(name => {
        const key = `${dest}/${name}`;
        return {
            [key]: './' + join(source, `${name}/index.js`)
        };
    })
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});
const entries = {
    ...getDirectories('./src/PresentationalComponents', 'components'),
    ...getDirectories('./src/Charts', 'charts')
};

module.exports = {
    entries,
    externals: {
        react,
        'react-dom': reactDom,
        classnames: 'classnames',
        d3: 'd3',
        c3: 'c3',
        'react-router-dom': ReactRouterDOM
    },
};
