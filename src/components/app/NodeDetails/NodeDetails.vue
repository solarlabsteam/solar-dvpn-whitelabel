<template>
  <div class="node-details" :class="{ 'node-details--inactive': !isActive }">
    <div
        class="node-details__flag"
        :class="{
        'fp fp-lg': isActive,
        [node.locationCountryCode]: isActive,
      }"
    >
      <div v-if="!isActive" class="m-s14-lh17">?</div>
    </div>
    <div class="node-details__info">
      <div class="node-details__title">
        {{ nodeName }}
      </div>
      <div class="node-details__subtitle">
        {{ countryName }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { type Node, NodeStatus } from "@/types";
import lookupCountry from "country-code-lookup";

const props = defineProps<{ node: Node }>();

const { t } = useI18n();

const isActive = computed(() => props.node.status === NodeStatus.active);
const nodeName = computed(() => props.node.moniker || t("node.unavailable"));

const lookedUpCountry = computed(
    () =>
        lookupCountry.byIso(props.node.locationCountryCode) ||
        lookupCountry.byFips(props.node.locationCountryCode)
);
const countryCode = computed<string>(
    () => lookedUpCountry.value?.iso2.toLowerCase() || ""
);
const countryName = computed<string>(
    () => lookedUpCountry.value?.country || ""
);
</script>

<style lang="scss" src="./NodeDetails.scss" scoped />
