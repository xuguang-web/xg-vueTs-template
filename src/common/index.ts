// import Utils from './utils';
import Components from './components';
// import Directives from './directives';
export default {
    install: (app:any) => {
        // app.config.globalProperties.$utils = Utils;
        Reflect.ownKeys(Components).forEach(key => {
            app.component(key, Components[key]);
        });
        // Reflect.ownKeys(Directives).forEach(key => {
        //     app.directive(key, Directives[key]);
        // });
    }
};
