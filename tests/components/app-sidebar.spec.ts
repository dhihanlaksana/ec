// @vitest-environment jsdom
import createFetchMock from 'vitest-fetch-mock'
import { it, vi, expect, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import i18n from '@/i18n'
import routes from '@/router'
import consoleError from '~/helpers/error'
import AppSidebar from '@/components/app-sidebar/index.vue'
import { createTestingPinia } from '@pinia/testing'



describe('Sidebar Test', () => {
  it('should return all menu items', () => {
    const i18nInstance = i18n.setupI18n('en')

    const wrapper = mount(AppSidebar, {
      global: {
        plugins: [i18nInstance]
      }
    });

    const allMenu = wrapper.vm.getAllMenu();

    expect(allMenu).toBeDefined();

    wrapper.unmount()
  })

  it('should toggle submenu on button click', async () => {
    const i18nInstance = i18n.setupI18n('en');


    const wrapper = mount(AppSidebar, {
      global: {
        plugins: [i18nInstance, routes]
      }
    });

    const allMenu = wrapper.vm.getAllMenu();


    // Loop through all menu items
    for (const menuItem of allMenu) {
      // Skip items without submenus
      if (!menuItem.children) {
        continue;
      }

      const menuId = wrapper.vm.getId(menuItem.label)

      // Trigger a click on the menu item to show its submenu
      await wrapper.vm.toggleSubmenu(Number(menuItem.id));
      await wrapper.vm.$nextTick();

      const isSubmenuOpen = wrapper.vm.isSubmenuOpen(Number(menuItem.id))
      expect(isSubmenuOpen).toBe(true)

    }

    wrapper.unmount()
  });

  it('should push to right routes', async () => {
    const i18nInstance = i18n.setupI18n('en');
    const pinia = createTestingPinia({
      createSpy: vi.fn,
    })

    const wrapper = mount(AppSidebar, {
      global: {
        plugins: [i18nInstance, routes, pinia]
      }
    });

    const push = vi.spyOn(routes, 'push')


    const allMenu = wrapper.vm.getAllMenu();


    // Loop through all menu items
    for (const menuItem of allMenu) {
      // Skip items without submenus
      if (menuItem.children?.length) {
        continue;
      }

      await wrapper.vm.navigateTo(menuItem.path);
      await wrapper.vm.$nextTick();

      expect(push).toHaveBeenCalledWith(menuItem.path)
    }

    wrapper.unmount()
  });
});
