// scripts/check-brand.js
// Fails dev/build if the old site name is used as the site name.
const fs = require('fs')
const path = require('path')

const banned = [/\|\s*NASA Artemis/, /['"`]NASA Artemis['"`]/, /siteName:\s*['"`]NASA/]
const exts = ['.js', '.jsx', '.ts', '.tsx']
const hits = []

function walk(dir) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (exts.includes(path.extname(entry.name))) {
      fs.readFileSync(full, 'utf8').split('\n').forEach((line, i) => {
        if (banned.some((re) => re.test(line))) hits.push(`${full}:${i + 1}: ${line.trim()}`)
      })
    }
  }
}

;['app', 'lib'].forEach(walk)

if (hits.length) {
  console.error('Old site name found. Use SITE_NAME from lib/site.js instead:\n' + hits.join('\n'))
  process.exit(1)
}
console.log('Brand check passed.')
