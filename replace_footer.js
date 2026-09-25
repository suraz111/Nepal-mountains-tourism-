const fs = require('fs');
const path = require('path');

const dir = 'c:/mini_project';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let modifiedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const searchPattern = /<div class="footer-col">\s*<h4>Kathmandu HQ<\/h4>\s*<div class="emergency-box">\s*<h5>Nepal Tourism Board Liaison<\/h5>\s*<p>Thamel, Kathmandu • Nepal<\/p>\s*<p>Local Inquiries: \+977 1 442 8900<\/p>\s*<\/div>\s*<\/div>/g;

  const replaceStr = `<div class="footer-col">
<h4>Our Services</h4>
<div class="emergency-box">
<h5>Online Service Portal</h5>
<a href="https://hackathon-861a0.firebaseapp.com/" target="_blank" style="color: var(--color-accent-orange); text-decoration: none; font-weight: bold; display: inline-block; margin-top: 0.5rem;">Visit Our Services</a>
</div>
</div>`;

  if (searchPattern.test(content)) {
    const newContent = content.replace(searchPattern, replaceStr);
    fs.writeFileSync(filePath, newContent);
    modifiedCount++;
  } else {
    // maybe spaces are different, let's try a softer replace using split/join or checking manually
    // Let's print out if it didn't match so we know
    console.log('No match in: ' + file);
  }
}

console.log('Modified ' + modifiedCount + ' files.');
