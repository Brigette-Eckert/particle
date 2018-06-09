/**
 * Demo of textbox. Pulls in textbox assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'atoms/textbox';

// Import demo assets
import twig from './textboxes.twig';
import yaml from './textboxes.yml';
import markdown from './textboxes.md';

export default {
  twig,
  yaml,
  markdown,
};
