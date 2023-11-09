<template>
  <div class="entry">
    <div class="head">
      <h4 class="bold" v-if="entry?.title">{{ entry.title }}</h4>
      <h4 v-if="entry?.subtitle">{{ entry.subtitle }}</h4>
      <small v-if="entry?.start">{{ entry.start }} - {{ entry?.end }}</small>
    </div>
    <div v-if="entry?.body" class="body" v-html="entry.body"/>
  </div>
</template>

<script>

export default {
  name: 'CvEntry',
  props: {
    entry: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style>
  
  h4 {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .entry {
    display: flex;
    flex-direction: row;

    padding: 0.5rem;
  }

  .head {
    width: 30%;
    max-width: 400px;

    padding: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .body {
    text-align: left;
    width: 70%;
  }

  .body * {
    text-align: left;
  }

  @media (max-width: 800px) {
    .entry {
      flex-direction: column;
      align-items: center;
    }
  
    .head {
      width: 100%;
      max-width: fit-content;
      margin-bottom: 0.5rem;
    }

    .body {
      width: 100%;
    }
  }

</style>