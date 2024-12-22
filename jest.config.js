const { name } = require('./package.json')
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

/** @type {import('jest').Config}*/
const config = {
  verbose: true,
  clearMocks: true,
  displayName: name,
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['./src/__tests__'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  })
}

module.exports = createJestConfig(config)
