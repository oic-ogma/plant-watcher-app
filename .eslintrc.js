const OFF = 0;
const ERROR = 2;

module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jest/globals': true
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    'parserOptions': {
        'ecmaVersion': 8,
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true,
        },
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'jest'
    ],
    'rules': {
        'quotes': [ERROR,'single'],
        'semi': [ERROR,'always'],
        'space-infix-ops': [ERROR, {'int32Hint': false}],
        'object-curly-spacing': [ERROR, 'always'],
        'space-in-parens': [ERROR, 'never'],
        'camelcase': ERROR,
        'no-var': ERROR,
        'prefer-arrow-callback': ERROR,
        'func-style': [ERROR, 'expression'],
        'no-trailing-spaces': ERROR,
        'keyword-spacing': ERROR,
        'space-before-blocks': ERROR,
        'indent': [ERROR, 2, { 'SwitchCase': 1 }],
        'no-console': [ERROR, { allow: ["warn", "error"] }],


        /** React **/
        'react/display-name': OFF,
        'react/jsx-curly-spacing': [ERROR, {'when': 'never', 'children': true}],
        'react/jsx-equals-spacing': [ERROR, 'never'],
        'react/jsx-indent': [ERROR, 'tab'| 2],
        'react/jsx-wrap-multilines': ERROR,
        'react/prop-types': OFF,
        'jsx-quotes': [ERROR, 'prefer-single']
    }
};
