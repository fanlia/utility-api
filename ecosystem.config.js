
const fs = require('fs')

const dirs = fs.readdirSync('./app')

const apps = dirs.map((dir, i) => {
  if (dir.startsWith('node')) {
    return {
      name   : dir,
      script : `./app/${dir}/app.js`,
      env: {
        PORT: 4000 + i,
      },
    }
  } else if (dir.startsWith('python')) {
    return {
      name   : dir,
      interpreter: `./app/${dir}/env/bin/python3`,
      script : `./app/${dir}/app.py`,
      env: {
        PORT: 4000 + i,
      },
    }
  }
}).filter(d => d)

module.exports = {
  apps,
}
