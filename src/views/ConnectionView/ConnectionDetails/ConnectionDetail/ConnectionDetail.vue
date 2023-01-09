<template>
  <div
    class="connection-detail"
    :class="{ 'connection-detail--connected': isConnected }"
  >
    <p class="connection-detail__value">
      {{ value }}&nbsp;{{ units }}
    </p>

    <p class="connection-detail__type">
      <slr-icon
          class="connection-detail__icon"
          :icon="icon"
          :width="18"
          :height="18"
      />
      {{ t(`connection.${type}`) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import icons from "./icons";
import type { ConnectionDetailType } from "@/types";

const props = defineProps<{
  isConnected: boolean;
  type: ConnectionDetailType;
  value: string;
  units: string;
}>();

const { t } = useI18n();
const icon = computed<string>(() => icons[props.type]);
</script>

<style lang="scss" src="./ConnectionDetail.scss" scoped />
