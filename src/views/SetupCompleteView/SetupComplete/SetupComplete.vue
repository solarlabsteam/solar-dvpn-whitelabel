<template>
  <div class="setup-complete">
    <div class="setup-complete__info">
      <slr-icon :icon="'blue-wizard'" :width="360" :height="405" class="mb-5" />

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

<style scoped lang="scss">
.setup-complete {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 16px;
  width: 100%;
  height: 100%;
  text-align: center;

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &__title {
    margin-bottom: 13px;
    color: var(--slr__title-txt-clr);
    @include font-template(26px, 39px, 700);
  }

  &__text {
    @include font-template(18px, 27px, 400);
  }
}
</style>
