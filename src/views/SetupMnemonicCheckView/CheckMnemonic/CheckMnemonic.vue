<template>
  <div class="check-mnemonic">
    <div class="check-mnemonic__info">
      <slr-secure-blur class="check-mnemonic__blur">
        <table class="check-mnemonic__phrase1">
          <tr v-for="r in 8" class="check-mnemonic__phrase-row">
            <td v-for="c in 3"
                class="check-mnemonic__phrase-cell"
                :class="{
                  'check-mnemonic__phrase-cell--left': c === 1,
                  'check-mnemonic__phrase-cell--right': c === 3,
                  'check-mnemonic__phrase-cell--top': r === 1,
                  'check-mnemonic__phrase-cell--bottom': r === 8
                }"
            >
              <span class="check-mnemonic__phrase-cell-value">
                {{ (r - 1) * 3 + c }}.&nbsp;{{ words.slice((r - 1) * 3, 3 * r)[c - 1]}}
              </span>
            </td>
          </tr>
        </table>
      </slr-secure-blur>

      <div class="check-mnemonic__data">
        <p class="check-mnemonic__title" v-html="t('setup.mnemonic.check.title')"></p>
        <p class="check-mnemonic__text mb-5" v-html="t('setup.mnemonic.check.text')"></p>
      </div>
    </div>

    <div>
      <p v-if="!isTimeOver" class="mb-3">
        {{ t("setup.mnemonic.check.timerTitle") }}
      </p>

      <slr-timer
        :time="30 * 1000"
        @done="onTimeIsOver"
        class="check-mnemonic__timer"
      >
        <template #zhdun>
          <slr-button
            :block="true"
            :variant="'primary'"
            :large="true"
            :loading="isWalletLoading"
            @click="confirm"
          >
            {{ t("setup.mnemonic.action.confirmCheck") }}
          </slr-button>
        </template>
      </slr-timer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import useWallet from "@/hooks/useWallet";
import useAppRouter from "@/hooks/useAppRouter";
import useAppSettings from "@/hooks/useAppSettings";

const props = defineProps<{
  mnemonic: string;
}>();

const { t } = useI18n();
const { isWalletLoading, recover } = useWallet();
const { openSetupCompleteView } = useAppRouter();
const { login } = useAppSettings();

const isTimeOver = ref<boolean>(false);

const words = computed<string[]>(() => props.mnemonic.split(" "));

const onTimeIsOver = () => {
  isTimeOver.value = true;
};

const confirm = (): void => {
  recover(props.mnemonic).then(login).then(openSetupCompleteView);
};
</script>

<style lang="scss" src="./CheckMnemonic.scss" />
