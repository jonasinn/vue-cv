<template>
  <div class="top-bar">
    <img alt="Vue logo" :src="cvData.information.image" class="image">
    <div>
      <h1>{{cvData.information.name}}</h1>
      <div>{{cvData.information.about}}</div>
    </div>
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

<style scoped>

  .image {
    height: 200px;
    width: 200px;
    object-fit: cover;
    object-position: 50% 35%;
    padding: 1rem;
    border-radius: 50%;
  }

  .top-bar {
    
    padding: 0.5rem;

    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

  }

  @media (max-width: 800px) {
    .top-bar {
      width: 100%;
      height: fit-content;
      position: relative;
    }
  }
</style>