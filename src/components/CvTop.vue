<template>
  <div>
    <img alt="Vue logo" :src="cvData.information.image" class="image">
    <h1>{{cvData.information.name}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    cvData: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="">
    
</style>