/**
 * Demo of gradienttag. Pulls in gradienttag assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'atoms/gradienttag';

// Import demo assets
import twig from './gradienttags.twig';
import yaml from './gradienttags.yml';
import markdown from './gradienttags.md';

export default {
  twig,
  yaml,
  markdown,
};
