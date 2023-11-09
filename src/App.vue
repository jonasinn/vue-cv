<template>
  <div>
    <Cv :cvData="cvData"></Cv>
  </div>
</template>

<script>

import Cv from '@/components/Cv.vue'
import cvData from '@/assets/cv.json'

export default {
  name: 'App',
  components: {
    Cv
  },
  data () {
    return {
      cvData: cvData
    }
  }
}
</script>

<style>
* {
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
}
</style>
