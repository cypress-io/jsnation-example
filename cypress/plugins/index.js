module.exports = (on, config) => {
  on('task', require('@cypress/code-coverage/task'))
  on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
  // tell Cypress to use .babelrc file
  // and instrument the specs files
  // only the extra application files will be instrumented
  // not the spec files themselves
  return config
}
