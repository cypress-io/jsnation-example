# jsnation-example [![CircleCI](https://circleci.com/gh/cypress-io/jsnation-example.svg?style=svg)](https://circleci.com/gh/cypress-io/jsnation-example) [![renovate-app badge][renovate-badge]][renovate-app] [![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/cypress-io/jsnation-example) [![Coverage Status](https://coveralls.io/repos/github/cypress-io/jsnation-example/badge.svg?branch=master)](https://coveralls.io/github/cypress-io/jsnation-example?branch=master)
> Example TodoMVC application for JSNation conference

This example is a fork of the official [Redux TodoMVC example](https://github.com/reduxjs/redux/tree/master/examples/todomvc) with a set of [Cypress.io](https://www.cypress.io) end-to-end tests. The tests run instrumented application code and the code coverage is saved automatically using [cypress-istanbul](https://github.com/cypress-io/cypress-istanbul) plugin.

## Install and use

```shell
npm ci
npm run dev
```

After you execute Cypress tests, the full code coverage HTML report will be saved in `coverage`. You can also run all tests in headless mode with

```shell
npm run test:all
```

## Code coverage

For details how 100% code coverage works, see [cypress-example-todomvc-redux](https://github.com/cypress-io/cypress-example-todomvc-redux)

## Visual testing

See [Visual Testing](https://docs.cypress.io/guides/tooling/visual-testing.html) tooling guide

## License

This project is licensed under the terms of the [MIT license](/LICENSE.md).

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
