<template>
  <CvTop :cvData="cvData"></CvTop>
  <div v-for="sectionData, sectionIndex in cvData.sections" :key="sectionIndex">
    <CvSection class="cv-section" :title="sectionData?.title">
      <CvEntry class="cv-entry" v-for="entryData, entryIndex in sectionData?.entries ? sectionData.entries : []" :key="entryIndex"
        :title="entryData?.title"
        :body="entryData?.body"/>
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