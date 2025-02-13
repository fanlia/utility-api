
const fs = require('fs')
const child_process = require('child_process')

const dirs = fs.readdirSync('./app')

const apps = dirs.map((dir, i) => {
  if (fs.existsSync(`./app/${dir}/app.js`)) {
    return {
      name   : dir,
      script : `./app/${dir}/app.js`,
      env: {
        PORT: 4000 + i,
      },
    }
  } else if (fs.existsSync(`./app/${dir}/next.config.ts`)) {
    return {
      name   : dir,
      script : `./app/${dir}/node_modules/next/dist/bin/next`,
      args: `start ./app/${dir} -p ${4000 + i}`,
    }
  } else if (fs.existsSync(`./app/${dir}/nuxt.config.ts`)) {
    return {
      name   : dir,
      script: `./app/${dir}/.output/server/index.mjs`,
      env: {
        PORT: 4000 + i,
      },
    }
  } else if (fs.existsSync(`./app/${dir}/app.py`)) {
    const interpreter = child_process.execSync('poetry --directory app/python env info --executable').toString().trim()
    return {
      name   : dir,
      interpreter,
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
