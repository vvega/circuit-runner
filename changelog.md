# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
* Initial commit.
  * File structure
  * Webpack
  * Dev server
  * Phaser 3
* TS support
  * Defs for Phaser 3
  * tsconfig
* Scene types
* Test assets
* Parallax layers
* Rudimentary parallax movement
* Runner
* 3D camera for depth-based movement

### Changed
* webpack config to support TS transpile
* Update .gitignore to exclude .vscode directory
* Scenes defined on game construction
* Refactor to support scene-based layers
* Building pool in place per layer
* Using only "foreground" buildings to prepare for depth movement
* Convert buildings to 3D sprites