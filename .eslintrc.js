module.exports = {
  env: {
    browser : true,
    es2021  : true,
  },
  extends       : ['plugin:react/recommended', 'standard-with-typescript'],
  overrides     : [],
  parserOptions : {
    ecmaVersion : 'latest',
    sourceType  : 'module',
    project     : ['tsconfig.json'],
  },
  plugins : ['react'],
  rules   : {
    'comma-dangle'                    : 'off',
    '@typescript-eslint/comma-dangle' : 'off',
    '@typescript-eslint/semi'         : 'off',
    semi                              : 'off',
    'key-spacing'                     : [
      'error',
      {
        align: {
          beforeColon : true,
          afterColon  : true,
          on          : 'colon',
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
