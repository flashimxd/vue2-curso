import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

// const vuetify = new Vuetify({
// 	theme: {
// 		themes: {
// 			light: {
// 				primary: 'green',
// 				secondary: 'blue',
// 				accent: 'yellow',
// 				error: 'purple'
// 			},
// 		},
// 	},
// })

Vue.use(Vuetify, {
	iconfont: 'md',
	theme: {
		themes: {
			light: {
				primary: 'green',
				secondary: 'blue',
				accent: 'yellow',
				error: 'purple'
			},
		},
	}
})

// export default vuetify
