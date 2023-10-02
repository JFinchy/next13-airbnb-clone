import { defineConfig, presetAttributify, presetUno, presetWebFonts, transformerVariantGroup } from 'unocss'

import { presetRadixUi } from 'unocss-preset-primitives'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx(),
    presetWebFonts(),
    // presetRadixUi(),
  ],
  transformers: [
    transformerVariantGroup(),
  ]
})