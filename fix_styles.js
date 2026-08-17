const fs = require('fs');
let c = fs.readFileSync('portfolio.jsx', 'utf8');

c = c.replace(/"rgba\(255,255,255,\.025\)"/g, '"var(--glass-bg)"');
c = c.replace(/"1px solid rgba\(255,255,255,\.07\)"/g, '"1px solid var(--glass-border)"');
c = c.replace(/"rgba\(255,255,255,\.04\)"/g, '"var(--glass-hover)"');
c = c.replace(/"rgba\(255,255,255,\.1\)"/g, '"var(--input-border)"');
c = c.replace(/"rgba\(255,255,255,\.06\)"/g, '"var(--glass-border)"');
c = c.replace(/"rgba\(255,255,255,\.32\)"/g, '"var(--text-muted-heavy)"');
c = c.replace(/"rgba\(255,255,255,\.28\)"/g, '"var(--text-muted-heavy)"');
c = c.replace(/"rgba\(255,255,255,\.42\)"/g, '"var(--text-muted-heavy)"');
c = c.replace(/"rgba\(255,255,255,\.5\)"/g, '"var(--text-muted)"');
c = c.replace(/"rgba\(255,255,255,\.25\)"/g, '"var(--text-muted-heavy)"');
c = c.replace(/"rgba\(255,255,255,\.3\)"/g, '"var(--text-muted-heavy)"');
c = c.replace(/"0 0 32px rgba\(0,255,136,\.25\)"/g, '"var(--glow-shadow)"');
c = c.replace(/"0 0 52px rgba\(0,255,136,\.45\)"/g, '"var(--glow-shadow-hover)"');
c = c.replace(/"linear-gradient\(135deg,#00ff88,#00cc70\)"/g, '"var(--btn-gradient)"');
c = c.replace(/color:\s*"#080810"/g, 'color:"var(--btn-text)"');
c = c.replace(/"rgba\(0,255,136,\.5\)"/g, '"var(--focus-ring)"');
c = c.replace(/"rgba\(255,255,255,\.2\)"/g, '"var(--particle-color)"');
c = c.replace(/"radial-gradient\(ellipse 55% 45% at 30% 55%,rgba\(0,255,136,\.07\) 0%,transparent 70%\)"/g, '"var(--hero-glow)"');
// some other hardcoded colors
c = c.replace(/"rgba\(255,255,255,\.22\)"/g, '"var(--text-muted-heavy)"');
c = c.replace(/"rgba\(255,255,255,\.18\)"/g, '"var(--text-muted-heavy)"');
c = c.replace(/"rgba\(255,255,255,\.08\)"/g, '"var(--glass-border)"');

fs.writeFileSync('portfolio.jsx', c);
console.log("Done");
