/**
 * Demo of bubblecard. Pulls in bubblecard assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'molecules/bubblecard';

// Import demo assets
import twig from './bubblecards.twig';
import yaml from './bubblecards.yml';
import markdown from './bubblecards.md';

export default {
  twig,
  yaml,
  markdown,
};
