import { useAuthenticated } from "@/modules/auth/composables/use-authenticated";
import Chevron from "@/components/icons/icon-chevron.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Chevron
    },
    setup() {
        const { userData } = useAuthenticated()
        return {
            userData
        }
    }
})