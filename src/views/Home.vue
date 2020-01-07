<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <booklist></booklist>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Booklist from 'E:/project/bookproject/src/modules/books/components/book-list.vue'

export default {
  name: 'home',
  components: {
    Booklist
  }
}
</script>
