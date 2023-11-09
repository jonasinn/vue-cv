<template>
  <div>
      <h2>{{ title }}</h2>
      <h3>{{ subtitle }}</h3>
      <p>{{ body }}</p>
  </div>
</template>

<script>

export default {
  name: 'CvEntry',
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    body: {
      type: String
    }
  }
}
</script>

<style>
    
</style>