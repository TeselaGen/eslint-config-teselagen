const path = require('path');

let currentModule = module;
while (!/[\\/]eslint[\\/]lib[\\/]cli-engine[\\/]config-array-factory\.js/i.test(currentModule.filename)) {
  if (!currentModule.parent) {
    // This was tested with ESLint 6.1.0; other versions may not work
    throw new Error('Failed to patch ESLint because the calling module was not recognized');
  }
  currentModule = currentModule.parent;
}
const eslintFolder = path.join(path.dirname(currentModule.filename), '../..');

const configArrayFactoryPath = path.join(eslintFolder, "lib/cli-engine/config-array-factory");
const configArrayFactoryModule = require(configArrayFactoryPath);

const moduleResolverPath = path.join(eslintFolder, "lib/shared/relative-module-resolver");
const ModuleResolver = require(moduleResolverPath);

const originalLoadPlugin = configArrayFactoryModule.ConfigArrayFactory.prototype._loadPlugin;
configArrayFactoryModule.ConfigArrayFactory.prototype._loadPlugin = function(name, importerPath, importerName) {
  const originalResolve = ModuleResolver.resolve;
  try {
    ModuleResolver.resolve = function (moduleName, relativeToPath) {
      // resolve using importerPath instead of relativeToPath
      return originalResolve.call(this, moduleName, importerPath);
    };
    return originalLoadPlugin.apply(this, arguments);
  } finally {
    ModuleResolver.resolve = originalResolve;
  }
}

module.exports = {
  extends: ['react-app'],
  rules: {
    'no-var': 2,
    'no-console': [1, { allow: ['warn', 'error', "info"] }],
    'no-debugger': 2,
    'no-empty': [2],
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 1,
    'no-inner-declarations': [2, 'functions'],
    'no-undef': 2,
    'no-unneeded-ternary': 1,
    'no-unsafe-negation': 2,
    'no-unused-vars': [1, { ignoreRestSiblings: true }],
    'import/no-unresolved': 2,
    'import/named': 2,
    'no-const-assign': 2,
    'import/default': 2,
    'react/jsx-boolean-value': 0,
    'react/jsx-key': 2
  }
}
