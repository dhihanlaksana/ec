import { supabase } from "@/supabase-client";
import { useTitle } from "@vueuse/core";
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
    setup() {
        const router = useRouter()

        onMounted(() => {


        })



        const navigateTo = (link: string) => {
            router.push(link)
        }
        return {
            navigateTo
        }
    }
})