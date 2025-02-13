
const fs = require('fs')

const dirs = fs.readdirSync('./app')

const upstream = dirs.map((dir, i) => `
upstream ${dir} {
  server 127.0.0.1:${4000 + i};
  keepalive 64;
}
`)
.join('\n')

const location = dirs.map((dir, i) => `
  location /${i > 0 ? dir : ''} {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Host $http_host;

    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";

    proxy_pass http://${dir}/;
    proxy_redirect off;
    proxy_read_timeout 240s;
  }
`)
.join('\n')

const conf = `
events {
  worker_connections 1024;
}

http {

${upstream}
server {
  listen 80;
${location}
}

}
`

fs.writeFileSync('/etc/nginx/nginx.conf', conf)
