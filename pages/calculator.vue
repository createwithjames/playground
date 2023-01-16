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
                {{ current || 0 }}
              </div>
              <div @click="clear" class="btn btn__gray">AC</div>
              <div @click="sign" class="btn btn__gray">+/-</div>
              <div @click="percent" class="btn btn__gray">%</div>
              <div @click="divide" class="btn btn__orange">÷</div>
              <div @click="append('7')" class="btn">7</div>
              <div @click="append('8')" class="btn">8</div>
              <div @click="append('9')" class="btn">9</div>
              <div @click="multiply" class="btn btn__orange">×</div>
              <div @click="append('4')" class="btn">4</div>
              <div @click="append('5')" class="btn">5</div>
              <div @click="append('6')" class="btn">6</div>
              <div @click="subtract" class="btn btn__orange">-</div>
              <div @click="append('1')" class="btn">1</div>
              <div @click="append('2')" class="btn">2</div>
              <div @click="append('3')" class="btn">3</div>
              <div @click="add" class="btn btn__orange">+</div>
              <div @click="append('0')" class="btn col-span-2">0</div>
              <div @click="decimal" class="btn">.</div>
              <div @click="equal" class="btn btn__orange">=</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";

const current = ref("");
const previous = ref("");
const operator = ref();
const operatorClicked = ref(false);

function clear() {
  current.value = "";
}

function sign() {
  if (current.value === "" || current.value === "0") {
    return;
  }
  current.value =
    current.value.charAt(0) === "-"
      ? current.value.slice(1)
      : "-" + current.value;
}

function percent() {
  current.value = `${parseFloat(current.value) / 100}`;

  console.log(current.value);
}

function append(number) {
  if (operatorClicked.value) {
    current.value = "";
    operatorClicked.value = false;
  }
  current.value = `${current.value}${number}`;
}

function decimal() {
  if (current.value.includes(".")) {
    return;
  }
  append(".");
}

function setPrevious() {
  previous.value = current.value;
  operatorClicked.value = true;
}

function divide() {
  operator.value = (a, b) => a / b;
  setPrevious();
}

function multiply() {
  operator.value = (a, b) => a * b;
  setPrevious();
}

function subtract() {
  operator.value = (a, b) => b - a;
  setPrevious();
}

function add() {
  operator.value = (a, b) => a + b;
  setPrevious();
}

function equal() {
  current.value = `${operator.value(
    parseFloat(current.value),
    parseFloat(previous.value)
  )}`;
  previous.value = null;
}
</script>

<style lang="scss" scoped>
.btn {
  @apply -m-[1px] border border-gray-600 bg-gray-100 py-4 hover:cursor-pointer;

  &__orange {
    @apply bg-orange-400 text-white;
  }

  &__gray {
    @apply bg-gray-300;
  }
}
</style>
