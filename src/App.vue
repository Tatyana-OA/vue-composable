<script setup>
import { useMouse } from "./composables/mouse";
const { x, y } = useMouse();
</script>

<template>
  <main>Mouse Position: X: {{ x }}; Y: {{ y }}</main>
</template>
