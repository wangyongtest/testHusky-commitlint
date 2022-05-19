const ruleModule = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'test',
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'subject-full-stop': [0, 'never'],
    'subject-empty': [0],
    'subject-case': [0, 'never']
  }
}

module.exports = ruleModule