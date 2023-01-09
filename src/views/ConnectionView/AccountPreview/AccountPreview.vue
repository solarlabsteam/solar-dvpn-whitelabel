<template>
  <div class="account-preview">
    <div class="account-preview__icon slr-clickable" @click="openAccountView">
      <slr-icon :icon="'account'" :size="38" />
    </div>
    <div class="account-preview__info">
      BlueVPN
    </div>
    <div class="account-preview__icon slr-clickable" @click="openSettingsView">
      <slr-icon :icon="'gear'" :size="38" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useAppRouter from "@/hooks/useAppRouter";
import useWallet from "@/hooks/useWallet";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { wallet } = useWallet();
const { openAccountView, openSettingsView } = useAppRouter();

const balance = computed<string | undefined>(
  () => wallet.value && `${wallet.value.balance / 1e6} ${t("node.dvpn")}`
);
const croppedAddress = computed<string | undefined>(
  () =>
    wallet.value &&
    `${wallet.value.address.slice(0, 8)}...${wallet.value.address.slice(-8)}`
);
</script>

<style scoped lang="scss" src="./AccountPreview.scss" />
