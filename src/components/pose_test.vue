<script setup>
import { proto } from './proto_demo.mjs'

const { faces, chng_face, getCube, getHL, instrument_settings } = defineProps({
  faces: {
    type: Array,
    default: ['face_up', 'face_down']
  },
  chng_face: Function,
  getCube: Function,
  getHL: Function,
  instrument_settings: Function,
})
</script>

<template>

  <table class="list">
    <th>face</th>
    <th>options</th>
    <th>result</th>

    <template v-for="(item, idx) of proto">
      
      <tr class="title space">
        <td colspan="3">{{ '|   ' }}</td>
      </tr>
      
      <tr class="title">
        <td colspan="3">{{ item.scalpel_id }}</td>
      </tr>
      
      <tr class="v_up">
        <td>{{ idx }}</td>
        <td class="code">
          poses: {{ item.settings.poses }}
        </td>
        <td>
          <div v-for="res of instrument_settings(item.settings)">{{ res }}</div>
        </td>
      </tr>
      
      <tr>

        <td>
          <div class="scene">
            <div :class="`cube ${getCube(idx)}`">
              <div 
              v-for="pose in faces" 
              :class="`cube__face cube__face--${pose}${getHL(idx, pose) ? ' highlight' : ''}`">
                {{ pose.split('_').join(' ') }}
              </div>
            </div>
          </div>
        </td>

        <td>

          <div style="display: flex; flex-direction: row;">
            <div v-for="face in instrument_settings(item.settings)" class="scene2">
              <div :class="`cube2 show-${face}`">
                <div 
                v-for="pose in faces" 
                :class="`cube2__face cube2__face--${pose}`">
                  {{ pose == face ? String(pose).split('_').join(' ') : null }}
                </div>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: row;">
            <button
            v-for="face in faces"
            @click="chng_face(idx, face)">
              {{ face }}
            </button>
          </div>

        </td>
      </tr>
    
    </template>
  </table>

</template>

<style scoped lang="sass">

body
  font-size: 12px
  background-color: #242424

button
  margin: 2px

.list
  border-spacing: 0px
  .title
    border-spacing: 0
    font-size: large
  .v_up
    vertical-align: top
    .code
      color: #bebebe
      font-size: small

.space
  background-color: #242424
  color: #242424

.sect
  display: flex
  flex-direction: column
  max-width: 30vw
  min-width: 29vw
  margin: 20px

.sub
  color: #edff79

table
  padding: 0 10px
  text-transform: lowercase
  font-family: monospace

tr
  background-color: #183666

td
  padding: 10px 0 0 10px

.col
  display: flex
  flex-direction: column
  margin-right: 20px

.active
  background-color: #565ed8

</style>
