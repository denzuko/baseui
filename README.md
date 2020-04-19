# baseui [![DeepSource](https://static.deepsource.io/deepsource-badge-light-mini.svg)](https://deepsource.io/gh/denzuko/baseui/?ref=repository-badge) [![Build Status](https://travis-ci.org/denzuko/baseui.svg?branch=master)](https://travis-ci.org/sanketsaurav/s3tree) [![Coverage Status](https://coveralls.io/repos/github/denzuko/baseui/badge.svg?branch=master)](https://coveralls.io/github/denzuko/baseui?branch=master) [![License](https://badgen.net/github/license/denzuko/baseui)](https://github.com/denzuko/baseui/blob/master/LICENSE)
Rapid PWA development framework. Uses VueJS, Hammerjs, Vuex, Vuerouter, Bulma/MDL, and require.js to rapidly develop full featured progressive web aplications.

API Trasport is provided by Axios and a SQL interface to data is provided by alasql (yes we have SQL query supports to REST in a frontend that's *NOT* GraphQL or dependant on the data source)

## Concept
Developing a frontend application should not mean learning new ecosystems, libraries, or extra tools to produce a product. This was the success behind jQuery, it emplowered developers to build better javascript applications. Now that most of the features from jQuery are core ES8 one should be able to translate that same experence into the future of reactive progressive apps. Thus the use of VueJS and this framework.

The end proccess is to allow individual developers to rapidly develop a full product that then can be put on any hosting system be it a CDN, docker cluster, ipfs or what ever. While still being lightwieght in choices to the developer nor heavily "optiniionated".

If one needs sql there is AlaSQL to manipulate data in ram. If one needs GraphQL then defind that as your API class and use that instead of Axios

At the end of the day the tools should not be in the way to deliver a product and developers should be able to leverage existing skills that copmpliment both Unix Philosphy and 12 factor. That is the core philosophy behind [BaseUI](https://github.com/denzuko/baseui/blob/master/README.md) and the Companions [BaseAPI](https://github.com/denzuko/baseapi/blob/master/README.md) / [CommunityGrid](https://github.com/Dallas-Makerspace/CommunityGrid/blob/master/README.md).

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
