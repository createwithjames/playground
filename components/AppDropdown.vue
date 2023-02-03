<template>
  <div class="stext-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton class="">
          <Bars3Icon class="ml-2 -mr-1 h-5 w-5 text-black" aria-hidden="true" />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <div v-for="link in navLinks">
              <MenuItem v-slot="{ active }">
                <NuxtLink
                  :to="link.slug"
                  :class="[
                    active ? 'bg-orange-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <component
                    :is="markRaw(icons[link.icon])"
                    :active="active"
                    :class="[
                      active ? 'text-white' : 'text-orange-400',
                      'mr-2 h-5 w-5',
                    ]"
                    aria-hidden="true"
                  />
                  {{ link.label }}
                </NuxtLink>
              </MenuItem>
            </div>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  Bars3Icon,
  CalculatorIcon,
  CubeIcon,
  CloudIcon,
} from "@heroicons/vue/24/outline";

const icons = {
  Bars3Icon,
  CalculatorIcon,
  CubeIcon,
  CloudIcon,
};

const navLinks = [
  { slug: "/threejs", label: "Three.js", icon: "CubeIcon" },
  { slug: "/calculator", label: "Calculator", icon: "CalculatorIcon" },
  { slug: "/weather", label: "Weather App", icon: "CloudIcon" },
];
</script>
