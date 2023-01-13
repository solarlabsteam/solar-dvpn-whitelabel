<template>
  <slr-view>
    <template #header-nav>
      <slr-button :variant="'text'" :tiny="true" @click="back">
        {{ t("action.back") }}
      </slr-button>
    </template>
    <template #header-title>
      {{ t('account.getStarted')}}
    </template>
    <template #content>
      <check-mnemonic :mnemonic="props.mnemonic" />
    </template>
  </slr-view>
</template>

<script setup lang="ts">
import CheckMnemonic from "@/views/SetupMnemonicCheckView/CheckMnemonic";
import { useI18n } from "vue-i18n";
import useAppRouter from "@/hooks/useAppRouter";

const props = defineProps<{
  mnemonic: string;
}>();

const { t } = useI18n();
const { openSetupActionsView } = useAppRouter();

const back = () => {
  openSetupActionsView();
};
</script>
