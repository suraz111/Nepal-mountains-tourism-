const fs = require('fs');
const path = require('path');

const dir = 'c:/mini_project';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let modifiedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Look for the end of the nav-links div/nav block.
  // The nav block ends with </nav>
  // We'll insert the new link right before </nav>
  
  const searchStr = '</a>\n</nav>';
  const searchStrAlt = '</a>\r\n</nav>';
  
  if (content.includes('Our Services')) {
    // If we've already added it, or it's somewhere else, let's just make sure it's not in the nav
    if (content.includes('>Our Services</a>\n</nav>') || content.includes('>Our Services</a>\r\n</nav>')) {
      console.log('Already updated nav in ' + file);
      continue;
    }
  }

  const replaceStr = `</a>\n<a class="nav-item-link" href="https://hackathon-861a0.firebaseapp.com/" target="_blank">Our Services</a>\n</nav>`;

  if (content.includes(searchStr)) {
    content = content.replace(searchStr, replaceStr);
    fs.writeFileSync(filePath, content);
    modifiedCount++;
  } else if (content.includes(searchStrAlt)) {
    content = content.replace(searchStrAlt, `</a>\r\n<a class="nav-item-link" href="https://hackathon-861a0.firebaseapp.com/" target="_blank">Our Services</a>\r\n</nav>`);
    fs.writeFileSync(filePath, content);
    modifiedCount++;
  } else {
    // some files might just be formatted differently, try regex
    const regex = /<\/a>\s*<\/nav>/;
    if (regex.test(content)) {
      content = content.replace(regex, `</a>\n<a class="nav-item-link" href="https://hackathon-861a0.firebaseapp.com/" target="_blank">Our Services</a>\n</nav>`);
      fs.writeFileSync(filePath, content);
      modifiedCount++;
    } else {
      console.log('No nav block found in: ' + file);
    }
  }
}

console.log('Modified ' + modifiedCount + ' files.');
