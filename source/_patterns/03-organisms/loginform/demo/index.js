/**
 * Demo of loginform. Pulls in loginform assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/loginform';

// Import demo assets
import twig from './loginforms.twig';
import yaml from './loginforms.yml';
import markdown from './loginforms.md';

export default {
  twig,
  yaml,
  markdown,
};
