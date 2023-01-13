<template>
  <slr-view>
    <template #header-nav>
      <slr-icon
        class="slr-clickable"
        :icon="'cross-active'"
        :size="15"
        @click.prevent.stop="() => close()"
      />
    </template>
    <template #header-title>
      {{ t("account.getStarted") }}
    </template>
    <template #content>
      <setup-mnemonic />
    </template>
  </slr-view>
</template>

<script setup lang="ts">
import SetupMnemonic from "@/views/SetupMnemonicView/SetupMnemonic";
import useAppRouter from "@/hooks/useAppRouter";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { openSetupGreetingView } = useAppRouter();

const close = () => {
  openSetupGreetingView();
};
</script>
