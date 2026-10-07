// Basic tests for Wanderer's Guide
const { describe, it, expect } = require('@jest/globals');

describe('Wanderer\'s Guide', () => {
  it('should have a valid manifest', () => {
    const manifest = require('../public/manifest.json');
    expect(manifest.name).toBe('Wanderer\'s Guide');
    expect(manifest.display).toBe('standalone');
    expect(manifest.icons.length).toBeGreaterThan(0);
  });

  it('should have a service worker', () => {
    const fs = require('fs');
    const path = require('path');
    const swPath = path.join(__dirname, '../public/sw.js');
    expect(fs.existsSync(swPath)).toBe(true);
  });

  it('should have dark mode CSS', () => {
    const fs = require('fs');
    const path = require('path');
    const cssPath = path.join(__dirname, '../src/css/dark-mode.css');
    expect(fs.existsSync(cssPath)).toBe(true);
  });
});
