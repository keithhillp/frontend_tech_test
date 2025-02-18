<script setup>
import { ref, onMounted } from 'vue'

import Poses from './components/pose_test.vue'
import { usePoseStore } from './stores/pose_store'
import { proto } from './components/proto_demo.mjs'

const store = usePoseStore()

onMounted(() => {
  let i = 0;
  for (const item of proto) {
    store.setCube(i, item.settings.poses)
    store.setHl(i, item.settings.poses)
    i++;
  }
})

</script>

<template>

  <div style="margin: 10px;">
    <!-- ADD YOUR POST INPUT AND GET OUTPUT IN THIS SPACE -->
  </div>

  <Poses :faces :chng_face :getCube :getHL :instrument_settings />

</template>

<style scoped lang="sass">
.task
  margin: 10px
  font-size: 12px
  font-weight: bold
</style>
