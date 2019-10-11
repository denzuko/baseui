<template>
  <div>
    <md-toolbar class="md-primary"
      v-hammer:pan.down="reload"
    >
        <h1 class="md-title">DDC Service Manager</h1>
    </md-toolbar>

    <md-content>
        <div
          id="app-content"
          v-hammer:swipe.horizontal="test"
        > Services
        </div>
        <div
          class="content"
          v-hammer:press="test2"
          v-hammer:tap="test"
          v-hammer:pan.left="test"
          v-hammer:panstart="test2"
          v-hammer:panend="test2"
        > testy... test
        </div>
    </md-content>
  </div>
</template>

<style>
html, body {
  height: 100%;

}
.md-content {
  padding: 16px;
  height: 100%;
}
#app-content {
  width: 300px;
  height: 200px;
  background-color: #ddd;
}
.content {
  width: 100px;
  height: 200px;
  background-color: red;
}
</style>


<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  methods: {
    reload(event) {
        location.reload(true)
    },
    test(e) {
      console.log(e);
      this.msg=e;
      this.$ServiceBus.$emit('testTrigger', e);
    },
    test2(e) {
      this.msg='AAAA';
      this.$ServiceBus.$emit('test2Trigger', 'AAAA');
    }
  }
};
</script>
