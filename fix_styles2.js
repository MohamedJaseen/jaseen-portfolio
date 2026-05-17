const fs = require('fs');
let c = fs.readFileSync('portfolio.jsx', 'utf8');

// Global Text Colors
c = c.replace(/color:\s*"#fff"/g, 'color:"var(--text-main)"');
c = c.replace(/color:\s*"rgba\([^,]+,[^,]+,[^,]+,\.[0-9]+\)"/g, (match) => {
    if (match.includes('255,255,255')) return 'color:"var(--text-muted)"';
    if (match.includes('0,255,136')) return 'color:"var(--accent)"';
    return match;
});

// Global Backgrounds
c = c.replace(/background:\s*"rgba\(255,255,255,\.0[0-9]+\)"/g, 'background:"var(--card-bg)"');
c = c.replace(/background:\s*"rgba\(255,255,255,\.1[0-9]*\)"/g, 'background:"var(--glass-hover)"');
c = c.replace(/background:\s*"rgba\(0,255,136,\.[0-9]+\)"/g, 'background:"var(--accent-bg)"');

// Global Borders
c = c.replace(/border:\s*"1px solid rgba\(255,255,255,\.[0-9]+\)"/g, 'border:"1px solid var(--card-border)"');
c = c.replace(/border:\s*"1px solid rgba\(0,255,136,\.[0-9]+\)"/g, 'border:"1px solid var(--accent)"');
c = c.replace(/borderBottom:\s*"1px solid rgba\(255,255,255,\.[0-9]+\)"/g, 'borderBottom:"1px solid var(--card-border)"');
c = c.replace(/borderTop:\s*"1px solid rgba\(255,255,255,\.[0-9]+\)"/g, 'borderTop:"1px solid var(--card-border)"');

// Global Box Shadows
c = c.replace(/boxShadow:\s*"0 0 [0-9]+px rgba\(0,255,136,\.[0-9]+\)"/g, 'boxShadow:"var(--glow-shadow)"');

// Hardcoded #080810 inside Buttons or elements
c = c.replace(/color:\s*"#080810"/g, 'color:"var(--btn-text)"');
c = c.replace(/background:\s*"#080810"/g, 'background:"var(--bg-color)"');

// Hover styles which are set via inline event handlers (e.g. e.currentTarget.style.color = "#fff")
c = c.replace(/style\.color\s*=\s*"#fff"/g, 'style.color="var(--text-main)"');
c = c.replace(/style\.color\s*=\s*"#00ff88"/g, 'style.color="var(--accent)"');
c = c.replace(/style\.background\s*=\s*"transparent"/g, 'style.background="transparent"');
c = c.replace(/style\.background\s*=\s*"rgba\(255,255,255,\.[0-9]+\)"/g, 'style.background="var(--glass-hover)"');
c = c.replace(/style\.borderColor\s*=\s*"rgba\(255,255,255,\.[0-9]+\)"/g, 'style.borderColor="var(--card-border)"');

// Glow hover
c = c.replace(/style\.boxShadow\s*=\s*"0 0 [0-9]+px rgba\(0,255,136,\.[0-9]+\)"/g, 'style.boxShadow="var(--glow-shadow-hover)"');

fs.writeFileSync('portfolio.jsx', c);
console.log("Replacements complete.");
