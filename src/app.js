// environment
requirejs.config({
  paths: {
    axios: 'https://unpkg.com/axios/dist/axios.min',
    Vue: 'https://unpkg.com/vue@latest/dist/vue.min',
    VueRouter: 'https://unpkg.com/vue-router@latest/dist/vue-router',
    Vuex: 'https://unpkg.com/vuex@latest/dist/vuex',
    alasql: 'https://unpkg.com/alasql@latest/dist/alasql.min',
    hammer: 'https://hammerjs.github.io/dist/hammer',
    material: 'https://unpkg.com/material-design-lite@1.3.0/dist/material.min',
    vue: 'https://unpkg.com/requirejs-vue@1.1.5/requirejs-vue',
    css: 'https://unpkg.com/requirejs-cssloader@1.1.4/.dist/css',
    domReady: 'https://cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.min',
    i18n: 'https://cdnjs.cloudflare.com/ajax/libs/require-i18n/2.0.4/i18n.min',
    fontawesome: 'https://use.fontawesome.com/releases/v5.0.6/js/all',
    bulma: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min',
    bulmawatch: 'https://jenil.github.io/bulmaswatch/materia/bulmaswatch.min',
  },
  config: {
    i18n: {
      locale: 'en-us',
    }
  },
  optimizeCss: "standard.keepLines",
  shim: {
    domReady: {
      deps: ['require', 'css', 'fontawesome', 'css!bulma', 'css!bulmawatch']
    },
    VueRouter: {
      deps: ['Vue']
    },
    Vuex: {
      deps: ['Vue']
    },
    VueTouch: {
       deps: ['Vue', 'hammerjs']
    },
    alasql: {
      exports: 'alasql'
    },
  }
})

// Api helper
define('Api', ['axios'], (axios) => {

  return axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    
})

define('TouchEvents', ['hammer', 'Api'], (Hammer, Api) => {

  const mc = new Hammer.Manager(document.querySelector('main'));
        mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2}))
        mc.get('doubletap').recognizeWith('singletap')
        mc.on('doubletap', (ev) => {
          Api.get('/todos')
             .then((response) => {})
        })

  return mc;

})

define('TasksComponent', ['Vue', 'Api'], (Vue, api) => {

  return Vue.component('tasks', {
	  template: '#tasks', // use `...` for inline templates
    data() {
  	  return {
    	  todos: []
      }
    },
    mounted() {
      let vm = this;
      api.get('/todos')
  		   .then((response) => vm.todos = response.data)

    },
    methods: {
  	  toggle: (todo) => todo.completed = !todo.completed
    }
  });

})

define('NotfoundComponent', ['Vue'], (Vue) => {
  return Vue.component('not-found', {
    template: '#notFound'
  })
})

define('Router', ['TasksComponent', 'NotfoundComponent', 'VueRouter'], 
(TasksComponent, NotfoundComponent, VueRouter) => {

  const routes = [{
  	path: '/',
  	component: TasksComponent
  }, {
  	path: '*',
    component: NotfoundComponent
  }];
  
  return new VueRouter({routes})
})


//require(['domReady', 'i18n', 'require'], (domReady, i18n, require) => {
//  domReady(() => 
require(['Vue', 'Router'], (Vue, router) => {
  	return new Vue({
      el: '#app',
      router
    })
 // }))
})
