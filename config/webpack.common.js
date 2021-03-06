const path = require('path');
const entry = process.env.NODE_ENV === 'production' ?
    path.resolve(__dirname, '../src/entry.js') :
    path.resolve(__dirname, '../src/entry-dev.js');

module.exports = {
    paths: {
        build: path.resolve(__dirname, '../'),
        entry,
        public: path.resolve(__dirname, '../'),
        src: path.resolve(__dirname, '../src'),
        presentationalComponents: path.resolve(__dirname, '../src/PresentationalComponents'),
        charts: path.resolve(__dirname, '../src/Charts'),
        pages: path.resolve(__dirname, '../src/pages'),
        static: path.resolve(__dirname, '../static')
    }
};
