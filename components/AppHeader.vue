<template>
  <header
    class="fixed top-0 w-full border-b border-slate-900/10 bg-white/80 backdrop-blur"
  >
    <div class="mx-auto max-w-7xl">
      <div class="py-4 px-8">
        <div class="flex items-center justify-between">
          <div class="flex-none">
            <NuxtLink to="/" class="flex gap-1">
              <BeakerIcon class="w-6 text-orange-500" />
              <span>Playground</span>
            </NuxtLink>
          </div>
          <AppDropdown />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { BeakerIcon } from "@heroicons/vue/24/outline";
</script>
