import moment from 'moment';
import { Plugin } from 'vue';

const MomentPlugin: Plugin = {
  install: (app) => {
    app.config.globalProperties.$moment = moment;
  },
};

export default MomentPlugin;