const fs = require('fs')

const dirs = fs.readdirSync('./app')

const apps = dirs
  .map((dir, i) => {
    if (fs.existsSync(`./app/${dir}/app.js`)) {
      return {
        name: dir,
        cwd: `./app/${dir}`,
        script: `app.js`,
        port: 4000 + i,
      }
    } else if (fs.existsSync(`./app/${dir}/next.config.ts`)) {
      return {
        name: dir,
        cwd: `./app/${dir}`,
        script: `npm`,
        args: `start`,
        port: 4000 + i,
      }
    } else if (fs.existsSync(`./app/${dir}/nuxt.config.ts`)) {
      return {
        name: dir,
        cwd: `./app/${dir}`,
        script: `.output/server/index.mjs`,
        port: 4000 + i,
      }
    } else if (fs.existsSync(`./app/${dir}/react-router.config.ts`)) {
      return {
        name: dir,
        cwd: `./app/${dir}`,
        script: `npm`,
        args: `start`,
        port: 4000 + i,
      }
    } else if (fs.existsSync(`./app/${dir}/app.py`)) {
      return {
        name: dir,
        cwd: `./app/${dir}`,
        interpreter: `./app/${dir}/.venv/bin/python3`,
        script: `app.py`,
        port: 4000 + i,
      }
    }
  })
  .filter((d) => d)

module.exports = {
  apps,
}
