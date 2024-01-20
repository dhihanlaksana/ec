import { defineComponent, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Chevron from '@/components/icons/icon-chevron.vue'
import { useMenu } from '@/modules/menu/composables/use-menu'
import type { MenuItem } from '@/modules/menu/types/menu'

export default defineComponent({
  components: {
    Chevron,
  },
  setup() {
    const route = useRoute()
    const { getAllMenu } = useMenu()
    const router = useRouter()
    const listMenu = ref<MenuItem[]>(new Array<MenuItem>)
    const currentRoute = ref<string>('')

    // == LIFECYCLE ==
    onMounted(() => {
      listMenu.value = getAllMenu()
      currentRoute.value = route?.path
      const currentMenu = listMenu.value.find(m => m.children?.find(c => c.path === currentRoute.value))
      if (currentMenu && 'isCollapse' in currentMenu)
      {
        toggleSubmenu(Number(currentMenu.id))
      }
    })
    
    const toggleSubmenu = (menuId: number) => {
      listMenu.value[menuId].isCollapse = !listMenu.value[menuId].isCollapse
    }

    const isSubmenuOpen = (menuId: number) => {
      return listMenu.value[menuId].isCollapse
    }

    const isPathActive = (path: string) => {
      return currentRoute.value.match(path)
    }

    const getId = (label: string) => {
      const cleanedLabel = label.replace(/[^a-zA-Z0-9 ]/g, '')
      return 'id_' + cleanedLabel.toLowerCase().replace(/\s+/g, '_')
    }

    const navigateTo = (path: string) => {
      router?.push(path)
    }

    // == WATCHER ==
    watch(
      () => route?.path,
      (newPath) => {
        currentRoute.value = newPath;

        if (listMenu.value.some(l => l.isCollapse))
        {
          listMenu.value.forEach(l => {
            l.isCollapse = false
          })
        }
      }
    );

    return {
      //state
      listMenu,
      currentRoute,
      // methods
      isSubmenuOpen,
      toggleSubmenu,
      isPathActive,
      getId,
      navigateTo,
      getAllMenu
    }
  },
})
