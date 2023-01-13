<template>
  <div class="setup-complete">
    <div class="setup-complete__info">
      <p class="setup-complete__title" v-html="t('setup.complete.title')"></p>
      <p class="setup-complete__text" v-html="t('setup.complete.text')"></p>
    </div>

    <slr-button
      :block="true"
      :variant="'primary'"
      :large="true"
      @click="close"
    >
      {{ t("setup.complete.continue") }}
    </slr-button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import useAppRouter from "@/hooks/useAppRouter";

const { t } = useI18n();
const { openConnectionView } = useAppRouter();

const close = () => {
  openConnectionView();
};
</script>

<style src="./SetupComplete.scss" scoped lang="scss" />
