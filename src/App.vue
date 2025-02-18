<script setup>
import { ref, onMounted } from 'vue'

import Poses from './components/pose_test.vue'

const faces = ['face_up', 'face_down', 'right', 'left', 'vertical_up', 'vertical_down']

let instrument_settings = (i) => {
  let n = 1
  let calc = x => n > 0 ? x - 1 : x

  let [f, s, v] = [
    calc(i.poses.faces), 
    calc(i.poses.sides), 
    calc(i.poses.vertical)
  ]
  
  let face_option = f > 2 ? [faces[1]] 
  : f > 1 ? [faces[0]] 
  : f > 0 ? [faces[0], faces[1]] 
  : []
  let sides = s > 2 ? [faces[2]] 
  : s > 1 ? [faces[3]] 
  : s > 0 ? [faces[3], faces[2]] 
  : []
  let vertical = v > 2 ? [faces[5]]
  : v > 1 ? [faces[4]] 
  : v > 0 ? [faces[4], faces[5]] 
  : []

  return [...face_option, ...sides, ...vertical]
}

const cubes = ref([])
const hl = ref([])

const chng_face = (i, face) => {
  let c = cubes.value.filter(ii => ii[0] != i)
  let h = hl.value.filter(ii => ii[0] != i)
  c.push([i, `show-${face}`])
  h.push([i, face])
  cubes.value = c
  hl.value = h
}

const getCube = i => {
  let c = cubes.value.filter(ii => ii[0] == i)
  return c.length > 0 ? c[0][1] : null
}

const getHL = (i, face) => {
  let h = hl.value.filter(ii => ii[0] == i)
  return h.length > 0 && h[0][1] == face ? true : false
}
</script>

<template>

  <div style="margin: 10px;">
    <!-- ADD YOUR POST INPUT AND GET OUTPUT IN THIS SPACE -->
  </div>

  <Poses :faces
  :chng_face :getCube :getHL :instrument_settings />

</template>

<style scoped lang="sass">
.task
  margin: 10px
  font-size: 12px
  font-weight: bold
</style>
