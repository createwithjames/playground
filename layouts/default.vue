<template>
  <div class="bg-zinc-50">
    <AppHeader />
    <div class="pt-14">
      <slot />
    </div>
  </div>
</template>

<script setup>
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: "%s - Site Title",
  // ... or as a function
  titleTemplate: (productCategory) => {
    return productCategory ? `${productCategory} - Playground` : "Playground";
  },
});
</script>
