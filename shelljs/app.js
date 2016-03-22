require('shelljs/global');

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

// Copy files to release dir
mkdir('-p', 'out/Release');

var json = {data:'hello world'};
JSON.stringify(json, null, 2).to('data.json');

exec('git add data.json');
exec('git commit -m "Automatic commit: shelljs' + Date() + '"');
exec('git push origin develop');
