'use strict';

let Project = require('./lib/project');
const Versioning = require('./lib/versioning');
const Bundle = require('./lib/bundle');
const CoreRuntimeManager = require('./lib/manager');
const Platform = require('./lib/platform');

const defaults = {
  factory: {
    createNewBundle: (definition, manager = void undefined) => new Bundle (manager, definition),
    createManager: (platform, versionManager = new Versioning()) => new CoreRuntimeManager (platform, versionManager)
  }
};

module.exports = {
  Project: Project,
  VersionManager: Versioning,
  factory: defaults.factory,
  Platform: Platform
};
