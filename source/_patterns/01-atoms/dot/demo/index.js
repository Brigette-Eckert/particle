/**
 * Demo of dot. Pulls in dot assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'atoms/dot';

// Import demo assets
import twig from './dots.twig';
import yaml from './dots.yml';
import markdown from './dots.md';

export default {
  twig,
  yaml,
  markdown,
};
