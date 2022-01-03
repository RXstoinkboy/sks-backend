module.exports = {
   overrides: [
      {
         files: ['*.ts', '*.tsx'], // Your TypeScript files extension
         parserOptions: {
            project: ['./tsconfig.json'], // Specify it only for TypeScript files
         },
      },
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
   },
   plugins: ['@typescript-eslint/eslint-plugin'],
   extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
   ],
   root: true,
   env: {
      node: true,
      jest: true,
   },
   ignorePatterns: ['.eslintrc.js'],
   rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'default-case': ['error'],
      'dot-notation': ['error'],
      eqeqeq: ['error'],
      'max-depth': ['error', 3],
      'max-lines': ['error', 200],
      'max-lines-per-function': ['error', 50],
      'max-nested-callbacks': ['error', 3],
      'max-params': ['error', 3],
      'no-console': ['warn'],
      'no-lone-blocks': ['error'],
      'no-magic-numbers': ['error'],
      'no-multi-assign': ['error'],
      'no-negated-condition': ['error'],
      'no-param-reassign': ['error'],
      'no-proto': ['error'],
      'no-return-await': ['error'],
      'no-sequences': ['error'],
      // 'no-shadow': ['error'],
      'no-var': ['error'],
      'prefer-arrow-callback': ['error'],
      'prefer-destructuring': [
         'error',
         {
            array: true,
            object: true,
         },
      ],
      'prefer-object-spread': ['error'],
      'prefer-rest-params': ['error'],
      'prefer-spread': ['error'],
      'prefer-template': ['error'],
      'require-await': ['error'],
      'require-yield': ['error'],
      'sort-keys': ['error'],
      'sort-imports': [
         'error',
         {
            allowSeparatedGroups: true,
         },
      ],
   },
};
