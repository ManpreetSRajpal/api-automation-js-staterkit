module.exports = {
    diff: true,
    extension:
        [
            'js'
        ],
    package: './package.json',
    reporter: 'spec',
    timeout: 5000,
    require:
        [
            '@babel/register',
            'util/setup.js'
        ],
    retries: 1,
    spec:
        [
            'test/spec/*.js'
        ],
};