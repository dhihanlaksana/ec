<template>
  <aside
    class="bg-bluegray-900 col w-64 sticky top-0 h-screen"
    aria-label="Sidebar"
  >
    <!-- Logo and header -->
    <div class="flex items-center justify-center px-3 py-4">
      <img src="../../assets/images/logo-mosa.svg" />
    </div>

    <!-- Menu items -->
    <div class="px-3 py-4 h-full overflow-scroll no-scrollbar">
      <div class="space-y-2 font-medium mb-2">
        <label class="text-gray-500">Menu</label>
      </div>
      <ul class="space-y-2 font-medium">
        <!-- Iterate over listMenu -->
        <li v-for="menu in listMenu" :key="menu.id">
          <template v-if="menu.children && !menu.path">
            <!-- Menu item with children -->
            <button
              :id="getId(menu.label)"
              type="button"
              :class="[
                'flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:bg-gray-500',
                isSubmenuOpen(Number(menu.id))
                  ? 'text-orange-600'
                  : 'text-white',
              ]"
              @click="toggleSubmenu(Number(menu.id))"
            >
              <component :is="menu.icon" />
              <span
                class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
              >
                {{ menu.label }}
              </span>

              <Chevron
                :class="{ 'rotate-180': isSubmenuOpen(Number(menu.id)) }"
              />
            </button>

            <!-- Submenu -->
            <ul
              :id="'submenu-' + menu.id"
              v-show="isSubmenuOpen(Number(menu.id))"
              class="py-2 space-y-2"
            >
              <li v-for="child in menu.children" :key="child.id">
                <a
                  :id="getId(child.label)"
                  :href="child?.path"
                  :class="['flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500',
                    isPathActive(String(child?.path)) ? 'text-orange-600': 'text-gray-500 ',
                  ]"
                  :style="{
                    backgroundColor: isPathActive(String(child?.path))
                      ? '#FB8C0029'
                      : 'transparent',
                  }"
                >
                  {{ child.label }}
                </a>
              </li>
            </ul>
          </template>

          <template v-else>
            <!-- Menu item without submenu -->
            <button
              :id="getId(menu.label)"
              type="button"
              @click="navigateTo(String(menu.path))"
              :class="['flex w-full p-2 rounded-lg transition duration-75 hover:bg-gray-500 group',
                isPathActive(String(menu.path))
                  ? 'text-orange-600'
                  : 'text-white',
              ]"
              :style="{
                backgroundColor: isPathActive(String(menu.path))
                  ? '#FB8C0029'
                  : 'transparent',
              }"
            >
              <!-- Your icon here -->
              <component :is="menu.icon" />
              <span class="ms-3 whitespace-nowrap">
                {{ menu.label }}
              </span>
            </button>
          </template>
        </li>
      </ul>
    </div>
    <footer class="copyright-footer">
      <p class="text-white text-xs">&copy; {{ $t('general.copyright') }}</p>
    </footer>
  </aside>
</template>
<script src="./index.ts" lang="ts"></script>
<style src="./index.css" scoped></style>
