import { Button,Carousel,Menu } from 'element-ui'
const element = {
  install: function(Vue) {
    Vue.use(Button);
    Vue.use(Carousel);
    Vue.use(Menu);
  }
}
export default element
