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
    margin-bottom: 0.5rem;
  }

  h1 {
    margin: 0;
    margin-bottom: 0.5rem;
  }
</style>