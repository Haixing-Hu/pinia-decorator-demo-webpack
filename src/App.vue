<!------------------------------------------------------------------------------
  -
  -    Copyright (c) 2022 - 2023.
  -    Haixing Hu, Qubit Co. Ltd.
  -
  -    All rights reserved.
  -
  ----------------------------------------------------------------------------->
<template>
  <my-component />
</template>
<script>
import { Component, toVue } from '@haixing_hu/vue3-class-component';
import MyComponent from '@/components/MyComponent.vue';

@Component({
  components: {
    MyComponent,
  },
})
class App {
  // empty
}

export default toVue(App);
</script>
<style scoped>
</style>
