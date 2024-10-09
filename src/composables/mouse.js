import { ref, onMounted, onUnmounted } from "vue";

export function useMouse() {
  // Create reactive references (composable will work with sharing stateful logic)
  const x = ref(0);
  const y = ref(0);

  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  // Event listeners attach and cleanup
  onMounted(() => window.addEventListener("mousemove", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));

  return { x, y };
}
