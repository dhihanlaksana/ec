import { reactive } from 'vue'
import type { MenuItem } from '../types/menu'
import IconHome from '@/components/icons/icon-home.vue'
import IconSpeaker from '@/components/icons/icon-speaker.vue'
import IconUsers from '@/components/icons/icon-users.vue'
import IconUserGroup from '@/components/icons/icon-user-group.vue'
import IconSwitchHorizontal from '@/components/icons/icon-switch-horizontal.vue'
import IconGift from '@/components/icons/icon-gift.vue'
import IconPresentationChartBar from '@/components/icons/icon-presentation-chartbar.vue'
import IconLink from '@/components/icons/icon-link.vue'
import IconQuestionMarkCircle from '@/components/icons/icon-questionmark-circle.vue'

export function useMenu() {
  const menuItems: MenuItem[] = reactive([
    {
      id: 1,
      label: 'Beranda',
      icon: IconHome,
      path: '/home',
    },
    {
      id: 2,
      label: 'Pesanan',
      icon: IconSwitchHorizontal,
      path: '/order',
    },
    {
      id: 3,
      label: 'Link Checkout',
      icon: IconSwitchHorizontal,
      path: '/checkout-link',
    },
  ])

  const getAllMenu = () => {
    return menuItems
  }

  return {
    //method
    getAllMenu,
  }
}
