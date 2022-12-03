/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const fs = require('fs-extra')
const path = require('path')
const defaultEnvironment = 'local'

function getConfigurationFromFile(file) {
    const pathToConfigFile = path.resolve('cypress/config', `cypress.env.${file}.json`)
    return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
    const file = config.env.configFile || defaultEnvironment
    return getConfigurationFromFile(file)
}
