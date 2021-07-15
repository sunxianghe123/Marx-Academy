import Vue from 'vue';
import "element-ui/lib/theme-chalk/index.css"
import {
  Button,
  FormItem,
  Form,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem
} from "element-ui";

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.prototype.$Message = Message;
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
