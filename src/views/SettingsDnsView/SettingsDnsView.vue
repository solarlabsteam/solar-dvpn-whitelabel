<template>
  <slr-view>
    <template #header-nav>
      <slr-icon
        class="slr-clickable"
        :icon="'back'"
        :size="38"
        @click.prevent.stop="back"
      />
    </template>
    <template #header-title>
      {{ t("settings.dns") }}
    </template>
    <template #content>
      <settings-dns />
    </template>
  </slr-view>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SettingsDns from "@/views/SettingsDnsView/SettingsDns/SettingsDns.vue";
import useAppRouter from "@/hooks/useAppRouter";

const { openSettingsView } = useAppRouter();
const { t } = useI18n();

const back = () => {
  openSettingsView();
};
</script>
