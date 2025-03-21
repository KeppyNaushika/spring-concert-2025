import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import eslintConfigPrettier, { rules } from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  eslintConfigPrettier,
  rules: {
    "prettier/prettier": [
      "error",
      {
        "tabWidth": 2,
        "useTabs": false,
        "semi": false,
        "singleQuote": true,
        "trailingComma": "es5",
      }
    ]
  }
]

export default eslintConfig
