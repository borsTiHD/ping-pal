/*
  Layout System Explanation:
  This layout system allows for multiple layouts in a Vue 3 application.
  It imports different layout components and exports them as an object.
  The `Layouts` interface defines the structure of this object, ensuring
  that each layout is correctly typed. This system is useful for dynamically
  switching between different layouts based on the route or other conditions.

  For more information, refer to the article:
  "3 Ways to Create a Multiple Layouts System in Vue 3"
  Origin URL: https://itnext.io/3-ways-to-create-a-multiple-layouts-system-vue-3-b24c0736b7bb

  Edited by: @borsTiHD
*/

import AppLayout from './AppLayout.vue'
import BlankLayout from './BlankLayout.vue'
import OldAppLayout from './OldAppLayout.vue'

export interface LayoutItem {
  name: string
  layout: any
}

const layouts: LayoutItem[] = [
  { name: 'AppLayout', layout: AppLayout },
  { name: 'OldAppLayout', layout: OldAppLayout },
  { name: 'BlankLayout', layout: BlankLayout },
]

export default layouts
