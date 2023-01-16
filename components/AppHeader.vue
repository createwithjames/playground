<template>
  <header class="sticky w-full border-b border-slate-900/10">
    <div class="mx-auto max-w-7xl">
      <div class="py-4 px-8">
        <div class="flex items-center justify-between">
          <div class="flex-none">
            <NuxtLink to="/" class="flex gap-1">
              <BeakerIcon class="w-6 text-orange-500" />
              <span>Playground</span>
            </NuxtLink>
          </div>
          <nav>
            <ul class="flex gap-4">
              <li>
                <NuxtLink to="/calculator">Calculator</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/weather">Weather</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { BeakerIcon } from "@heroicons/vue/24/outline";
</script>
