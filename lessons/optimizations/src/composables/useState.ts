import { metalness } from 'three/webgpu'
import { reactive, toRefs } from 'vue'

const tableMaterials = [
  {
    name: 'Light Wood',
    path: '/public/materials/Wood048_2K-JPG',
    filename: 'Wood048_2K-JPG',
    thumbnail: '/public/materials/Wood048_2K-JPG/Wood048.png',
  },
  {
    name: 'Dark Wood',
    path: '/public/materials/WoodFloor008_2k-JPG',
    filename: 'WoodFloor008_2K-JPG',
    thumbnail: '/public/materials/WoodFloor008_2k-JPG/WoodFloor008.png',
  },
  {
    name: 'Orange Wood',
    path: '/public/materials/Wood069_2k-JPG',
    filename: 'Wood069_2K-JPG',
    thumbnail: '/public/materials/Wood069_2k-JPG/Wood069.png',
  },
]

const accessoriesColors = [
  {
    name: 'Metallic dark gray',
    color: '#5B5B5B',
    metalness: 0.5,
    roughness: 0.5,
  },
  {
    name: 'Gloss White',
    color: '#FFFFFF',
    metalness: 0.2,
    roughness: 0.2,
  },
]

const state = reactive({
  tableMaterials,
  selectedTableMaterial: tableMaterials[0],
  accessoriesColors,
  selectedAccessoriesColor: accessoriesColors[0],
})

export const useState = () => {
  return {
    ...toRefs(state),
  }
}
