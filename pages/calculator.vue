<template>
  <article class="w-full">
    <div class="mx-auto max-w-7xl">
      <div class="py-4 px-8">
        <div class="grid grid-cols-1 gap-8">
          <h1>Calculator</h1>
          <div class="flex h-[calc(100vh_-_20rem)] items-center justify-center">
            <div
              class="grid w-full max-w-xs auto-rows-auto grid-cols-4 overflow-hidden rounded-md border border-gray-500 text-center text-2xl"
            >
              <div
                class="col-span-4 -mx-[1px] bg-gray-800/90 p-4 text-right text-4xl leading-tight text-white"
              >
                12343
              </div>
              <div class="btn btn__light-gray">AC</div>
              <div class="btn btn__light-gray">+/-</div>
              <div class="btn btn__light-gray">%</div>
              <div class="btn btn__orange">÷</div>
              <div class="btn">7</div>
              <div class="btn">8</div>
              <div class="btn">9</div>
              <div class="btn btn__orange">×</div>
              <div class="btn">4</div>
              <div class="btn">5</div>
              <div class="btn">6</div>
              <div class="btn btn__orange">-</div>
              <div class="btn">1</div>
              <div class="btn">2</div>
              <div class="btn">3</div>
              <div class="btn btn__orange">+</div>
              <div class="btn col-span-2">0</div>
              <div class="btn">.</div>
              <div class="btn btn__orange">=</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup></script>

<style lang="scss" scoped>
.btn {
  @apply -m-[1px] border border-gray-600 bg-gray-100 py-4;

  &__orange {
    @apply bg-orange-400 text-white;
  }

  &__light-gray {
    @apply bg-gray-300;
  }
}
</style>
