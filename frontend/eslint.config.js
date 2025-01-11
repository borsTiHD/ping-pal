import antfu from '@antfu/eslint-config'
import vue from 'eslint-plugin-vue'

export default antfu(
  {
    // Configures for antfu's config
  },

  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    plugins: {
      vue,
    },
  },
)
