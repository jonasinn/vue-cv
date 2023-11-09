<template>
  <div class="cv-section">
    <h1>{{ title }}</h1>
    <slot></slot>      
  </div>
</template>

<script>

export default {
  name: 'CvSection',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped>
  .cv-section {
    margin-bottom: 2rem;
  }
</style>