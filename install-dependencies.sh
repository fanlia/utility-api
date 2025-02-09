
cd app
FILES="*"

for f in $FILES
do
  echo $f
  cd $f
  if [[ $f = node* ]]
  then
    echo `pwd`
    npm i
  elif [[ $f = next* ]]
  then
    echo `pwd`
    npm i
    npm run build
  elif [[ $f = nuxt* ]]
  then
    echo `pwd`
    npm i
    npm run build
  elif [[ $f = python* ]]
  then
    echo `pwd`
    python3 -m venv env
    source env/bin/activate && pip install -r requirements.txt
  fi
  cd ..
done
