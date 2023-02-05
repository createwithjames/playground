<template>
  <div class="mx-auto max-w-7xl">
    <div class="px-8">
      <div class="grid grid-cols-12 gap-4 pt-8">
        <div class="col-span-12 flex flex-col gap-4 md:col-span-8">
          <header>
            <p
              class="mb-2 text-sm font-semibold leading-6 text-orange-500 dark:text-orange-400"
            >
              {{ data.group }}
            </p>
            <h1
              class="inline-block text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
            >
              {{ data.title }}
            </h1>
          </header>
          <component :is="lessonComponent" />
          <ContentRenderer :value="data" />
        </div>
        <div class="col-span-12 md:col-span-4">
          <h2 class="mb-2 text-sm font-semibold leading-6">The Basics</h2>
          <div v-for="link in nav">
            <NuxtLink :to="link._path">
              {{ link.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);

const nav = await queryContent("threejs", `${route.params.group}`).find();

const ThreeBasicScene = resolveComponent("ThreeBasicScene");
const ThreeLocalServer = resolveComponent("ThreeLocalServer");

const lessons = {
  ThreeBasicScene,
  ThreeLocalServer,
};

const lessonComponent = computed(() =>
  markRaw(lessons[data.value.lessonComponent])
);
</script>

<style lang="scss" scoped>
.router-link-active {
  @apply font-semibold text-orange-500 dark:text-orange-400;
}
</style>
