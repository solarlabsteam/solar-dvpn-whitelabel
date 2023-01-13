<template>
  <div class="account-settings">
    <div>
      <settings-section class="account-settings__address mb-5">
        <template #content>
          <div class="d-flex align-items-center">
            <qr-code v-if="address" class="mr-4" :value="address" :size="91" />
            <div class="account-settings__body-wallet">
              <div class="d-flex w-100">
                <div class="w-100">
                  <p class="s-s16-lh24 text-black">{{ t("account.wallet") }}</p>
                  <p class="r-s14-lh19">{{ t("account.address") }}</p>
                  <p class="r-s14-lh19 text-black">{{ croppedAddress }}</p>
                  <slr-clipboard-text class="mt-1" :text="address" />
                </div>
              </div>
            </div>
          </div>
        </template>
      </settings-section>
      <settings-section :title="t('account.balance')" :subtitle="t('account.balanceUpdate', { time: balanceUpdated })" class="account-settings__balance">
        <template #content>
          <div class="d-flex align-items-center">
            <div>
              <div class="account-settings__balance-denom d-flex align-items-center">
                {{ t("node.dvpn") }}&nbsp;
                <slr-icon
                  class="slr-clickable"
                  :icon="'refresh'"
                  :size="14"
                  @click="get"
                />
              </div>
              <div class="account-settings__balance-amount">{{ balance }}</div>
            </div>
          </div>
        </template>
        <template #buttons>
          <slr-button
            class="text-uppercase"
            :large="true"
            :block="true"
            :variant="'primary'"
            @click="openPurchaseModal"
          >
            {{ t("account.buyTokens") }}
          </slr-button>
        </template>
      </settings-section>
    </div>
    <settings-section class="mt-5">
      <template #buttons>
        <logout-btn />
      </template>
    </settings-section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import QrCode from "@/components/app/QrCode";
import SlrClipboardText from "@/components/ui/SlrClipboardText";
import LogoutBtn from "@/components/app/LogoutBtn";
import SettingsSection from "@/components/app/SettingsSection";
import SlrButton from "@/components/ui/SlrButton/SlrButton.vue";
import useWallet from "@/hooks/useWallet";
import useAppDialogs from "@/hooks/useAppDialogs";
import {formatDistance} from "date-fns";

const { t } = useI18n();
const { wallet, walletUpdateTime, get } = useWallet();
const { openPurchaseModal } = useAppDialogs();

const balance = computed<string | undefined>(() => wallet.value && (wallet.value.balance / 1e6).toLocaleString("en-US"));
const balanceUpdated = computed<string | undefined>(() => wallet.value && formatDistance(Date.now(), walletUpdateTime.value!));
const address = computed<string | undefined>(() => wallet.value?.address);
const croppedAddress = computed<string | undefined>(
  () =>
    address.value &&
    `${address.value.slice(0, 9)}...${address.value.slice(-10)}`
);
</script>

<style lang="scss" src="./AccountSettings.scss" scoped />
