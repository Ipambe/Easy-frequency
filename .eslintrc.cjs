module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      extends: 'love',
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
      }

    }
  ]
}
