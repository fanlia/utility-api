
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
  elif [[ -f app.py ]]
  then
    echo `pwd`
    echo python
    python3 -m venv env
    source env/bin/activate && pip install -r requirements.txt
  fi
  cd ..
done
