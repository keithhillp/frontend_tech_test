<script setup>
import { ref, onMounted } from 'vue'

import Poses from './components/pose_test.vue'

const faces = ['face_up', 'face_down', 'right', 'left', 'vertical_up', 'vertical_down']

/**
 * Checks items poses to see which poses should be displayed 
 * @param {Object} poses Object containing item's possible faces, sides and vertical positions
 * @param {number} poses.faces available faces to display (1 = none, 2 = both, 3 = initial value)
 * @param {number} poses.sides available sides to display (1 = none, 2 = both, 3 = initial value)
 * @param {number} poses.vertical available verticality to display (1 = none, 2 = both, 3 = initial value)
 */
let instrument_settings = (poses) => {
  let [f, s, v] = [
    poses.faces, 
    poses.sides, 
    poses.vertical
  ]

  const poseMap = [[0, 1], [3, 2], [4, 5]];

  return poseMap.flatMap(([low, high], i) => 
  [f, s, v][i] > 3 ? [faces[high]] 
  : [f, s, v][i] > 2 ? [faces[low]] 
  : [f, s, v][i] > 1 ? [faces[low], faces[high]] 
  : []
);
}

const cubes = ref([])
const hl = ref([])

/**
 * A function to change the cube rotation based on the face button being clicked (clicking face_down will rotate the cube to the face_down position)
 * @param {number} i The index value of proto item and its associated cube to be rotated
 * @param {string} face the face (position of the object) being passed to the cube i.e 'face_down', 'vertical_up'
 */
const chng_face = (i, face) => {
  let c = cubes.value.filter(ii => ii[0] != i)
  let h = hl.value.filter(ii => ii[0] != i)
  c.push([i, `show-${face}`])
  h.push([i, face])
  cubes.value = c
  hl.value = h
}

/**
 * A function to retrieve an item's associated cube from the cube array, returns null if not found
 * @param {number} i The index value of proto item and its associated cube 
 */
const getCube = i => {
  let c = cubes.value.filter(ii => ii[0] == i)
  return c.length > 0 ? c[0][1] : null
}

/**
 * A function to check if an item's cube should have a highlighted side
 * @param {number} i The index value of proto item
 * @param {string} face The pose to check, if the pose returns true from the hl array it will be highlighted
 */
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
