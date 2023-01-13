<template>
  <slr-view>
    <template #header-nav>
      <slr-icon
        class="slr-clickable"
        :icon="'close'"
        :size="38"
        @click.prevent.stop="() => close()"
      />
    </template>
    <template #header-title>Account</template>
    <template #content>
      <account-settings />
    </template>
  </slr-view>
</template>

<script setup lang="ts">
import AccountSettings from "@/views/AccountView/AccountSettings";
import useAppRouter from "@/hooks/useAppRouter";

const { openConnectionView } = useAppRouter();

const close = () => {
  openConnectionView();
};
</script>

<style lang="scss" scoped></style>
