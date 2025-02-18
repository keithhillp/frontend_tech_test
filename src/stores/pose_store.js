import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePoseStore = defineStore('pose', () => {
    const faces = ['face_up', 'face_down', 'right', 'left', 'vertical_up', 'vertical_down']
    const cubes = ref([])
    const hl = ref([])

    const setCube = (index, poses) => {
        let faces = instrument_settings(poses)        
        
        cubes.value.push([index, 'show-' + faces[faces.length - 1]])
    }

    const setHl = (index, poses) => {
        let faces = instrument_settings(poses)        
        hl.value.push([index, faces[faces.length - 1]])
    }

    /** 
 * Checks items poses to see which poses should be displayed 
 * @param {Object} poses Object containing item's possible faces, sides and vertical positions
 * @param {number} poses.faces available faces to display (1 = none, 2 = both, 3 = initial value)
 * @param {number} poses.sides available sides to display (1 = none, 2 = both, 3 = initial value)
 * @param {number} poses.vertical available verticality to display (1 = none, 2 = both, 3 = initial value)
 */
    const instrument_settings = (poses) => {
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

    /**
 * A function to change the cube rotation based on the face button being clicked (clicking face_down will rotate the cube to the face_down position)
 * @param {number} i The index value of proto item and its associated cube to be rotated
 * @param {string} face the face (position of the object) being passed to the cube i.e 'face_down', 'vertical_up'
 */
    const chng_face = (i, face) => {
        cubes.value[i] = [i, `show-${face}`]
        hl.value[i] = [i, face]
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

    return {
        faces,
        cubes,
        hl,
        setCube,
        setHl,
        instrument_settings,
        chng_face,
        getHL,
    }
})