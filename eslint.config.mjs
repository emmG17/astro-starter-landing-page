import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
    // Global config
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    // TypeScript config
    ...tseslint.configs.recommended,

    // Astro config
    ...eslintPluginAstro.configs.recommended,
    {
        ignores: [
            "dist/**",
            ".astro/**",
            "src/env.d.ts",
            "**/*.d.ts"
        ]
    },
    {
        rules: {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
            "@typescript-eslint/no-explicit-any": "off"
        }
    }
];
