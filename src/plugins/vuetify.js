import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from 'vuetify/es5/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        grey: '#F5F5F5',
        rojo:'#F44336',
        verde:'#00E676',
        azulgris:'#78909C',
        azulgris1:'#546E7A',
        rojo1:'#F4511E',
        verde1:'#00E676',
        fondo:'#292d3e',
        fondo1:'#31364a'
      },
    },
  },
    lang: {
      locales: { es },
      current: 'es',
    },
  icons: {
    iconfont: 'md',
  },
});
