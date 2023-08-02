// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes:{
      light: {
        dark: true,
        colors:{
          primary: colors.red.darken2,
          secondary: colors.red.darken4
        }
      }
    }
  }
})
