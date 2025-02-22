
cd app
FILES="*"

for f in $FILES
do
  echo $f
  cd $f
  if [[ -f app.js ]]
  then
    echo `pwd`
    echo node
    pnpm i
  elif [[ -f next.config.ts ]]
  then
    echo `pwd`
    echo next
    pnpm i
    pnpm run build
  elif [[ -f nuxt.config.ts ]]
  then
    echo `pwd`
    echo nuxt
    pnpm i
    pnpm run build
  elif [[ -f react-router.config.ts ]]
  then
    echo `pwd`
    echo react-router
    pnpm i
    pnpm run build
  elif [[ -f app.py ]]
  then
    echo `pwd`
    echo python
    poetry source add --priority=primary foo https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple
    poetry install
  fi
  cd ..
done
