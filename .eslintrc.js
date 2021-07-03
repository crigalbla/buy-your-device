module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'react-app',
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
    ],
    rules: {
        'array-callback-return': [0, { allowImplicit: true }],
        'prefer-destructuring': ['error', { object: false, array: false }],
        camelcase: [0, { properties: 'never' }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-props-no-spreading': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-closing-bracket-location': 0,
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 0,
        'max-len': ['warn', { code: 140, tabWidth: 4, ignoreUrls: true }],
        'no-unused-vars': 1,
        'linebreak-style': 0,
        indent: ['warn', 4],
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        quotes: ['warn', 'single'],
        'no-template-curly-in-string': 'warn',
    },
};
