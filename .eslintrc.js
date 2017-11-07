module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jest/globals': true
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true,
            'ecmaVersion': 6
        },
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'jest'
    ],
    'rules': {
        'indent': [
            'error',
            2
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'space-infix-ops': ['error', {'int32Hint': false}],
        'object-curly-spacing': [2, 'always'],
        'space-in-parens': ['error', 'never'],
        'camelcase': 'error',
        'no-var': 2,
        'prefer-arrow-callback': 2,
        'func-style': [2, 'expression'],
        'no-trailing-spaces': 2,
        'keyword-spacing': 2,
        'space-before-blocks': 2,
        'indent': ['error', 2, { 'SwitchCase': 1 }],


        /** React **/
        'react/display-name': 0,
        'react/jsx-curly-spacing': [2, {'when': 'never', 'children': true}],
        'react/jsx-equals-spacing': [2, 'never'],
        'react/jsx-indent': [2, 'tab'| 2],
        'react/jsx-wrap-multilines': 2,
        'react/prop-types': 0,
        'jsx-quotes': [2, 'prefer-single']
    }
};
