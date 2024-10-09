<script setup>
import { useMouse } from "./composables/mouse";
import {
  useTitle,
  useRefHistory,
  useInterval,
  useAsyncQueue,
} from "@vueuse/core";
import { ref } from "vue";

// Custom Composable
const { x, y } = useMouse();
// Page Title
const title = useTitle("Mouse Position", { titleTemplate: "%s | My Site" });
// Ref History
const count = ref(0);
const { undo } = useRefHistory(count);

const incrementCount = () => {
  count.value++;
};

const undoCount = () => {
  undo();
};

const clearCount = () => {
  count.value = 0;
};

const { counter: timer, pause, resume } = useInterval(1000, { controls: true });
console.log(timer);

const getFirstPromise = () => {
  // Create our first promise
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000);
    }, 10);
  });
};

const getSecondPromise = (result) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000 + result);
    }, 20);
  });
};

const { activeIndex, result } = useAsyncQueue([
  getFirstPromise,
  getSecondPromise,
]);
</script>

<template>
  <main>
    <h1>Mouse Position: X: {{ x }}; Y: {{ y }}</h1>
    <!-- Change Page title dynamically -->
    <input type="text" v-model="title" />
    <h3>This is count: {{ count }}</h3>
    <button @click="incrementCount">Increment Count</button>
    <button @click="undoCount">Undo Change</button>
    <button @click="clearCount">Clear Count</button>
    <h3>Seconds: {{ timer }}</h3>
    <button @click="pause">Pause Timer</button>
    <button @click="resume">Resume Timer</button>

    <p>active index: {{ activeIndex }}</p>
    <p>{{ result }}</p>
  </main>
</template>
