import type { Component } from 'vue'

export type MenuItem = {
  id?: number
  label: string
  children?: MenuItem[]
  isCollapse?: boolean
  icon?: Component
  path: string
}
