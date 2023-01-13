<template>
  <div class="node-switch">
    <node-details v-if="node" :node="node" />
    <slr-button
      class="node-switch__btn"
      :variant="'info'"
      :block="!node"
      @click="openNodesView"
    >
      {{ t("action.switch") }}
    </slr-button>
  </div>
</template>

<script setup lang="ts">
import type { Node } from "@/types";
import SlrButton from "@/components/ui/SlrButton/SlrButton.vue";
import { useI18n } from "vue-i18n";
import useAppRouter from "@/hooks/useAppRouter";
import NodeDetails from "@/components/app/NodeDetails";

defineProps<{
  node?: Node;
}>();

const { t } = useI18n();
const { openNodesView } = useAppRouter();
</script>

<style lang="scss" scoped>
.node-switch {
  display: flex;
  border: 1px solid #E6E6E6;
  border-radius: 32px;
  padding: 9px;

  &__btn {
    text-transform: uppercase;
    @include font-template(14px, 21px, 600);
  }
}
</style>
