const fs = require('fs');
let c = fs.readFileSync('portfolio.jsx', 'utf8');

c = c.replace(/rgba\(0,255,136,\.1\)/g, 'var(--accent-bg)');
c = c.replace(/rgba\(0,255,136,\.12\)/g, 'var(--accent-bg)');
c = c.replace(/textShadow:"0 0 40px rgba\(0,255,136,\.3\)"/g, 'textShadow:"var(--accent-glow)"');
c = c.replace(/rgba\(0,255,136,\.06\)/g, 'var(--accent-bg)');
c = c.replace(/rgba\(255,255,255,\.4\)/g, 'var(--text-muted)');
c = c.replace(/rgba\(255,255,255,\.12\)/g, 'var(--glass-border)');
c = c.replace(/rgba\(0,255,136,\.09\)/g, 'var(--accent-bg)');
c = c.replace(/rgba\(0,255,136,\.07\)/g, 'var(--accent-bg)');
c = c.replace(/rgba\(0,255,136,\.28\)/g, 'var(--focus-ring)');
c = c.replace(/0 14px 32px rgba\(0,255,136,\.1\)/g, 'var(--glow-shadow-hover)');
c = c.replace(/rgba\(255,255,255,\.03\)/g, 'var(--card-bg)');
c = c.replace(/rgba\(255,255,255,\.07\)/g, 'var(--glass-border)');
c = c.replace(/rgba\(255,255,255,\.35\)/g, 'var(--text-muted-heavy)');
c = c.replace(/color: active===i \? "#fff" : "var\(--text-muted\)"/g, 'color: active===i ? "var(--text-main)" : "var(--text-muted)"');
c = c.replace(/rgba\(0,255,136,\.02\)/g, 'transparent');
c = c.replace(/rgba\(0,255,136,\.25\)/g, 'var(--focus-ring)');
// Clean up one more `#fff` that was part of a template literal
c = c.replace(/active===i \? "#fff" : "var\(--text-muted\)"/g, 'active===i ? "var(--text-main)" : "var(--text-muted)"');

fs.writeFileSync('portfolio.jsx', c);
