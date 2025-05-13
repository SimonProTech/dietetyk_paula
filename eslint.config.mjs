import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import * as prettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react,
            'react-hooks': reactHooks,
            prettier: prettierPlugin,
        },
        rules: {
            // React/TypeScript/Custom rules
            'react/jsx-uses-react': 'off', // not needed with React 17+
            'react/react-in-jsx-scope': 'off', // Next.js
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // Prettier as ESLint rule
            'prettier/prettier': 'warn',
        },
    },
    prettier,
]
