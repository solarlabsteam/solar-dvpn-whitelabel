<template>
  <div class="node-preview" :class="{ 'node-preview--inactive': !isActive }">
    <div
      class="node-preview__flag"
      :class="{
        'fp fp-lg': isActive,
        [node.locationCountryCode]: isActive,
      }"
    >
      <div v-if="!isActive" class="m-s14-lh17">?</div>
    </div>
    <div class="node-preview__info">
      <div class="node-preview__title">
        {{ nodeName }}
      </div>
      <div class="node-preview__subtitle">
        {{ countryName }}
      </div>
      <template v-if="showPrice">
        <div class="node-preview__subtitle">
          <template v-if="isActive">
            <span class="text-black m-s13-lh16">{{ price }}</span
            >&nbsp;
          </template>
          <template v-else> — </template>
        </div>
        <div class="node-preview__subtitle">per GB</div>
      </template>
    </div>
    <div class="node-preview__action">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { type Node, NodeStatus } from "@/types";
import lookupCountry from "country-code-lookup";

const props = withDefaults(defineProps<{ node: Node; showPrice?: boolean }>(), {
  showPrice: true,
});

const { t } = useI18n();

const isActive = computed(() => props.node.status === NodeStatus.active);
const nodeName = computed(() => props.node.moniker || t("node.unavailable"));
const price = computed(
  () => `${(props.node.defaultPrice / 1e6).toFixed(2)} ${t("node.dvpn")}`
);
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

<style lang="scss" src="./NodePreview.scss" scoped />
