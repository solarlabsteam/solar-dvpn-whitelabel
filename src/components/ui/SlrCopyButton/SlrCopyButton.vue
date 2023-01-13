<template>
  <slr-popper
    :content="t('action.copied')"
    :show="isPopperShown"
    :offset-distance="'6'"
    :placement="placement"
    :class="wrapperClassName"
  >
    <slr-button
      class="slr-copy-button__btn"
      v-clipboard:copy="value"
      v-clipboard:success="onCopy"
      :variant="'light'"
      v-bind="$attrs"
    >
      {{ t('action.copy') }}
    </slr-button>
  </slr-popper>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onBeforeUnmount, ref } from "vue";

withDefaults(
  defineProps<{
    value: string | number;
    placement?: string;
    wrapperClassName?: string;
  }>(),
  {
    value: "",
    placement: "right",
    wrapperClassName: "",
  }
);

const { t } = useI18n();
const isPopperShown = ref<boolean>(false);
let timer: number;

const onCopy = (): void => {
  isPopperShown.value = true;

  clearTimeout(timer);
  timer = setTimeout(() => {
    isPopperShown.value = false;
  }, 1000) as unknown as number;
};

onBeforeUnmount((): void => {
  clearTimeout(timer);
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
.slr-copy-button__btn {
  padding: 6px 44px;
  border: 1px solid var(--slr__border-clr);
  @include font-template(10px, 15px);
}
</style>
