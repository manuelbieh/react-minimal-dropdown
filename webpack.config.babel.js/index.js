module.exports = (env = 'development') => {
    return require(`./${env}.babel`);
};
