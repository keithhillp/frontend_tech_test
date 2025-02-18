<script setup>
import { proto } from './proto_demo.mjs'
import { usePoseStore } from '../stores/pose_store'

const store = usePoseStore()
</script>

<template>
  <table class="list">
    <thead>
      <tr>
        <th>Face</th>
        <th>Options</th>
        <th>Result</th>
        <th>Properties</th>
      </tr>
  </thead>

    <template v-for="(item, idx) of proto">

      <tr class="title space">
        <td colspan="4">{{ '| ' }}</td>
      </tr>

      <tr class="title">
        <td colspan="4">{{ item.scalpel_id }}</td>
      </tr>

      <tr class="v_up">
        <td>{{ idx }}</td>
        <td class="code">
          poses: {{ item.settings.poses }}
        </td>
        <td>
          <div v-for="res of store.instrument_settings(item.settings.poses)">{{ res }}</div>
        </td>
        <td class="props">
          <p v-if="item.properties.sub">Sub: {{ item.properties.sub }}</p>
          <p v-if="item.properties.length">Length: {{ item.properties.length }}</p>
          <p v-if="item.properties.characteristic">Characteristic: {{ item.properties.characteristic }}</p>
          <span v-if="item.properties.speciality">
            <p>Speciality:</p>
            <ul>
              <li v-for="(speciality, idx) of item.properties.speciality">{{ speciality }}</li>
            </ul>
          </span>
          <p v-if="item.properties.finer">Finer: {{ item.properties.finer }}</p>
          <p v-if="item.properties.broader">Broader: {{ item.properties.broader }}</p>
        </td>
      </tr>

      <tr>

        <td>
          <div class="scene">
            <div :class="`cube ${store.cubes[idx]?.[1]}`">
              <div v-for="pose in store.faces"
                :class="`cube__face cube__face--${pose}${store.getHL(idx, pose) ? ' highlight' : ''}`">
                {{ pose.split('_').join(' ') }}
              </div>
            </div>
          </div>
        </td>

        <td>

          <div style="display: flex; flex-direction: row;">
            <div v-for="face in store.instrument_settings(item.settings.poses)" class="scene2">
              <div :class="`cube2 show-${face}`">
                <div v-for="pose in store.faces" :class="`cube2__face cube2__face--${pose}`">
                  {{ pose == face ? String(pose).split('_').join(' ') : null }}
                </div>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: row;">
            <select name="faces" @change="store.chng_face(idx, $event.target.value)">
              <option v-for="face in store.instrument_settings(item.settings.poses)"
                :selected="store.hl[idx]?.[1] === face" :value="face">
                {{ face }}
              </option>
            </select>
          </div>

        </td>
      </tr>

    </template>
  </table>

</template>

<style scoped lang="scss">
body {
  font-size: 12px;
  background-color: #242424;

  table {
    width: 100vw;
  }
}

button {
  margin: 2px;
}

.list {
  border-spacing: 0px;

  .title {
    border-spacing: 0;
    font-size: large;

    .v_up {
      vertical-align: top;

      .code {
        color: #bebebe;
        font-size: small;
      }
    }
  }
}

.space {
  background-color: #242424;
  color: #242424;
}

.sect {
  display: flex;
  flex-direction: column;
  max-width: 30vw;
  min-width: 29vw;
  margin: 20px;
}

.sub {
  color: #edff79;
}

table {
  padding: 0 10px;
  font-family: monospace;
}

tr {
  background-color: #183666;
}

td {
  padding: 10px 0 0 10px;
}

.col {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}

.active {
  background-color: #565ed8;
}

.props {
  p {
    margin-top: 0;
  }
}
</style>
