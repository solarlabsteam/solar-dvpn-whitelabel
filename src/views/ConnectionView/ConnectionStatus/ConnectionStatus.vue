<template>
  <div
    class="connection-status"
    :class="{
      'connection-status--protected': isConnected,
    }"
  >
    <div class="connection-status__card">
      <div>
        <span class="connection-status__card-text">{{ t("connection.youAre") }}</span>&nbsp;
        <span class="connection-status__card-status-text">{{ isConnected ? t("connection.protected") : t("connection.unprotected") }}</span>
      </div>
      <div class="connection-status__ip">{{ t('connection.yourIp', { ip: currentIp }) }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

defineProps<{
  currentIp?: string;
  isConnected: boolean;
}>();

const { t } = useI18n();
</script>

<style scoped src="./ConnectionStatus.scss" lang="scss" />
