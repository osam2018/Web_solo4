import Model from '@/model/Model';
import Vue from "vue";

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {

    /*
    Vue.프로퍼티 처럼 접근하고자 할때 .
     */
    interface VueConstructor {
        $http:any;
    }
    /*
    this.프로퍼티 처럼 접근하고자 할때
     */
    interface Vue {

    }
}

declare global {
    interface Window {

        $globalBus:Vue;
        $model:Model;
    }

}