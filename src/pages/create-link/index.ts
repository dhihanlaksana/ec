import { useTitle } from "@vueuse/core";
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {
        const productName = ref('')
        useTitle('Create Link')
        return {
            productName
        }
    }
})