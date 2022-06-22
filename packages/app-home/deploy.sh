curl -L https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 -o ./jq
chmod a+x ./jq
VERSION=$(node --eval="process.stdout.write(require('./package.json').version)")
yarn install
yarn build
aws s3 cp s3://mfe-shoppe/config/import-map.json import-map.json
NEW_URL=/config/mfe/app-home/$VERSION/shoppe-app-home.js
cat ./import-map.json | ./jq --arg NEW_URL "$NEW_URL" '.imports["@shoppe/app-home"] = $NEW_URL' > new.importmap.json
aws s3 cp dist s3://mfe-shoppe/config/mfe/app-home/$VERSION --recursive
aws s3 cp new.importmap.json s3://mfe-shoppe/config/import-map.json
aws cloudfront create-invalidation --distribution-id E2CSYO6LJ44WFR --paths '/config/import-map.json'
