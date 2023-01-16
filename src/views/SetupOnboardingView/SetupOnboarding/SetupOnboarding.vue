<template>
  <div class="setup-onboarding"
     :style="{
        backgroundImage: `url('./assets/images/${onboardingViews[currentOnboardingView].icon}.png')`,
     }"
  >
    <div class="setup-onboarding__content">
      <div class="setup-onboarding__title" v-html="t(`setup.onboarding.${onboardingViews[currentOnboardingView].name}.title`)"></div>
      <div class="setup-onboarding__text" v-html="t(`setup.onboarding.${onboardingViews[currentOnboardingView].name}.text`)"></div>
      <div class="setup-onboarding__carousel">
        <div
          v-for="i in onboardingViews.length"
          class="setup-onboarding__carousel-item"
          :class="{ 'setup-onboarding__carousel-item--active': currentOnboardingView === i - 1 }">
        </div>
      </div>
    </div>
    <div class="setup-onboarding__buttons">
      <slr-button
        class="setup-onboarding__button-skip"
        :variant="'text'"
        @click="openSetupActionsView"
      >
        {{ t('action.skip') }}
      </slr-button>
      <slr-button
        :variant="'primary'"
        @click="openNextOnboardingView"
      >
        {{ t('action.next') }}
      </slr-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAppRouter from "@/hooks/useAppRouter";
import {computed, ref} from "vue";
import {useI18n} from "vue-i18n";

const { t } = useI18n();
const { openSetupActionsView } = useAppRouter();

const onboardingViews: { icon: string, name: string }[] = [
  {
    icon: "blue-hacker",
    name: "encryption"
  },
  {
    icon: "blue-soldier",
    name: "freedom"
  },
  {
    icon: "blue-gladiator",
    name: "safety"
  },
]

const currentOnboardingView = ref<number>(0);

const openNextOnboardingView = () => {
  if (currentOnboardingView.value !== onboardingViews.length - 1) {
    currentOnboardingView.value += 1
  } else {
    openSetupActionsView();
  }
}
</script>

<style src="./SetupOnboarding.scss" scoped />
