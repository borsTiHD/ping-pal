import { onMounted, watch } from 'vue'
import { useDarkModeState } from './darkmode-state'

export function useDarkModeEffects() {
  const { colorModeModel, changeColorMode } = useDarkModeState()

  watch(colorModeModel, () => {
    changeColorMode(colorModeModel.value)
  })

  onMounted(() => {
    changeColorMode(colorModeModel.value)
  })
}
