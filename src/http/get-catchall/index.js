const arc = require('@architect/functions');

async function getCatchall (req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Example Svelte App</title>
  <!--<link rel="stylesheet" href="${arc.static('/my.css')}">-->
</head>
<body>
  <script defer src="${arc.static('/index.js')}"></script>
  <noscript>You need to enable JavaScript to run this app.</noscript>
</body>
</html>`
  };
}

exports.handler = arc.http.async(getCatchall);
