if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod.babel');
} else {
    module.exports = require('./dev.babel');
}
