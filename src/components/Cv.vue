<template>
  <CvTop :cvData="cvData"></CvTop>
  <div class="main-page">
    <CvSection class="cv-section" v-for="sectionData, sectionIndex in cvData.sections" :key="sectionIndex" :title="sectionData?.title">
      <CvEntry class="cv-entry" v-for="entryData, entryIndex in sectionData?.entries ? sectionData.entries : []" :key="entryIndex" :entry="entryData"/>
    </CvSection>
  </div>
</template>

<script>

import CvEntry from '@/components/CvEntry.vue'
import CvSection from '@/components/CvSection.vue'
import CvTop from './CvTop.vue';

export default {
  name: 'CV',
  components: {
    CvEntry,
    CvSection,
    CvTop
},
  props: {
    cvData: {
      type: Object,
      default: {}
    }
  },
}
</script>

<style scoped>
  
  .main-page {
    margin-left: 300px;
    padding: 0.5rem;
  }

  @media (max-width: 800px) {
    .main-page {
      margin-left: 0px;
    }
  }
</style>