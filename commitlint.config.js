/**
 * 主要type:
 *        feat： 新的feature,新功能
 *        fix：修复bug，修复错误
 * 特殊type:
 *        docs：仅仅修改了文档，例如 read.md
 *        style: 仅仅对样式修改 ,如 都好，缩进、空格等。不修改代码逻辑
 *        build:构建工具或者外部依赖的改动，例如webpack、vite、rollup， npm
 *        refactor: 生成代码重构，没有新增功能和修复bug
 *        revert：版本回滚
 *
 * 暂不生用type:
 *        test： 测试用例，包括单元测试集成测试
 *        perf: 优化相关，如提升性能，用户体验等
 *        ci:  CI(持续集成服务)有关改动
 *        chore:  不修改 src 或者 test的其余修改， 例如构建流程、增加依赖库、辅助工具变动
 *
 * 注：可以在这里自定义类型
 *
 **/

const types = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'build'];
const maxLength = 120;
const ruleModule = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', types],
    'type-empty': [2, 'never'],
    'scope-case': [0, 'always'],
    'subject-empty': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [2, 'always', maxLength],
  },
};

module.exports = ruleModule;
