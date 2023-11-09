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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.image {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
}

</style>
