# baseui [![DeepSource](https://static.deepsource.io/deepsource-badge-light-mini.svg)](https://deepsource.io/gh/denzuko/baseui/?ref=repository-badge) [![Build Status](https://travis-ci.org/denzuko/baseui.svg?branch=master)](https://travis-ci.org/sanketsaurav/s3tree) [![Coverage Status](https://coveralls.io/repos/github/denzuko/baseui/badge.svg?branch=master)](https://coveralls.io/github/denzuko/baseui?branch=master) [![License](https://badgen.net/github/license/denzuko/baseui)](https://github.com/denzuko/baseui/blob/master/LICENSE)
Rapid PWA development framework. Uses VueJS, Hammerjs, Vuex, Vuerouter, Bulma/MDL, and require.js to rapidly develop full featured progressive web aplications.

API Trasport is provided by Axios and a SQL interface to data is provided by alasql (yes we have SQL query supports to REST in a frontend that's *NOT* GraphQL or dependant on the data source)


## Usage

```
git clone --depth=1 https://github.com/denzuko/baseui baseui && cd $_
$EDITOR src/app.js # add define() blocks for new VueJS views/controllers
make all
```

### Requirements
- Docker for OSx/Windowws or just a Linux machine with docker.
- GNU make
- VIM/Emacs/$EDITOR of choice
- ipfs, s3, cloudflair cdn, or datagrid/communitygrid (optional)
- Your app's Assets / copytext
