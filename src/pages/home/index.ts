import { defineComponent, ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import 'primeicons/primeicons.css'
import { useTitle } from '@vueuse/core'
import { useAuthenticated } from '@/modules/auth/composables/use-authenticated'

export default defineComponent({
  components: {
    Breadcrumb,
  },
  setup() {
    useTitle('Home')
    const { userData  } = useAuthenticated()

    const home = ref({
      icon: 'pi pi-home',
    })

    const items = ref([{ label: 'Beranda' }])

    return {
      home,
      items,
      userData
    }
  },
})
