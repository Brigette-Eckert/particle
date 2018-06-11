/**
 * Demo of circle. Pulls in circle assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'atoms/circle';

// Import demo assets
import twig from './circles.twig';
import yaml from './circles.yml';
import markdown from './circles.md';

export default {
  twig,
  yaml,
  markdown,
};
