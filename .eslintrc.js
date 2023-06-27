/* eslint quote-props: 'off' */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'next', // Add
        'plugin:@typescript-eslint/recommended', // Add
        'prettier',
    ],
    globals: {
        document: false,
        fetch: false,
        FormData: false,
        localStorage: false,
        shallow: false,
        window: false,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        project: ['tsconfig.json'],
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['**/*.stories.tsx'],
            },
        ],

        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'arrow-parens': 'off',
        camelcase: 'off',
        curly: 'off',
        'object-curly-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/no-dynamic-require': 'off',
        'import/no-named-as-default': 'off',
        indent: 'off',
        'jsx-a11y/anchor-has-content': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'linebreak-style': 'off',
        'no-case-declarations': 'off',
        'no-console': ['error', { allow: ['warn'] }],
        'no-floating-decimal': 'off',
        'no-nested-ternary': 'off',
        'no-plusplus': 'off',
        'require-await': ['warn'],
        'no-return-assign': 'off',
        'no-shadow': 'off',
        'no-tabs': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        'nonblock-statement-body-position': 'off',
        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: true,
            },
        ],

        'react/jsx-closing-tag-location': 'off',
        'react/jsx-curly-newline': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/no-array-index-key': 'off',
        'react/no-danger': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'sort-keys': 'off',
        'react/default-props-match-prop-types': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    {
                        group: ['.*'],
                        message: "Please use a clean path like: 'util/something' instead of '../../util/something'.",
                    },
                ],
                paths: [
                    {
                        name: 'react',
                        importNames: ['default'],
                        message: "From React 17 importing React isn't necessary anymore.",
                    },
                    {
                        name: 'lodash',
                        message: 'Use the specific module in order to support tree shaking, like so: `import range from lodash/range`',
                    },
                    {
                        name: 'react-i18next',
                        message: 'Use the `next-i18next` package instead',
                    },
                ],
            },
        ],
        'react/jsx-no-useless-fragment': 'error',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': ['error'],
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
        'react/function-component-definition': [
            1,
            {
                namedComponents: ['arrow-function', 'function-declaration'],
                unnamedComponents: ['arrow-function'],
            },
        ],
        'react/no-unstable-nested-components': [1, { allowAsProps: true }],
    },
}
