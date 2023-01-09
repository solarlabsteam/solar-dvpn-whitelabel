<template>
  <div class="qr-code">
    <canvas id="qr" ref="qr" />
  </div>
</template>

<script setup lang="ts">
import QRious from "qrious";
import { onMounted, ref, watch } from "vue";

const props = defineProps<{
  value: String;
  size: Number;
}>();

const qr = ref<Element | null>(null);

function draw(): void {
  // eslint-disable-next-line no-new
  new QRious({
    element: qr.value,
    value: props.value,
    size: props.size,
    background: 'transparent',
    foreground: 'black',
    padding: 0
  });
}

onMounted((): void => {
  if (props.value) draw();

  watch(
    () => props.value,
    () => {
      draw();
    }
  );
});
</script>

<style lang="scss" scoped>
.qr-code {
  display: inline-flex;
}
</style>
