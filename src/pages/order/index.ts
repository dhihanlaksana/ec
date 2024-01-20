import { useTitle } from "@vueuse/core";
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        useTitle('Order')
        return {}
    }
})