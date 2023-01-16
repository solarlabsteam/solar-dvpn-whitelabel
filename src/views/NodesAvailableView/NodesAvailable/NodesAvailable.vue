<template>
  <div class="nodes-available">
    <slr-linear-loader v-if="isNodesLoading" class="available-nodes__loader" />

    <countries-list
      v-else-if="!countryCode"
      :countries="countryNodesCount"
      :open="openCountry"
    />

    <no-data
      v-else-if="!isLoadingFailed && !isNodesLoading && nodes.length === 0"
      :title="t('node.list.noData.title')"
      :text="t('node.list.noData.text')"
    />
    <no-data
      v-else-if="isLoadingFailed"
      :title="t('node.list.loadingFailure.title')"
      :text="t('node.list.loadingFailure.text')"
      :action-text="t('action.retry')"
      :action="reloadNodes"
    />

    <nodes-list v-else :nodes="nodes" :select="select" :load-more="loadMore" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed, watch } from "vue";
import type { ContinentCode, CountryNodesInfo } from "@/types";
import SlrLinearLoader from "@/components/ui/SlrLinearLoader";
import NodesList from "@/components/app/NodesList";
import CountriesList from "@/components/app/CountriesList";
import NoData from "@/components/app/NoData";
import useConnection from "@/hooks/useConnection";
import useAppRouter from "@/hooks/useAppRouter";
import useNodes from "@/hooks/useNodes";
import useNodesFilters from "@/hooks/useNodesFilters";

const props = defineProps<{
  continentCode?: ContinentCode;
  countryCode?: string;
}>();

const { t } = useI18n();
const { openNodesAvailableView } = useAppRouter();
const { select } = useConnection();
const {
  continents,
  nodes,
  isNodesLoading,
  isNodesLoadingFailed: isLoadingFailed,
  isMoreNodesAvailable,
  loadAvailableNodes,
  loadMoreAvailableNodes,
} = useNodes();
const { filters } = useNodesFilters();

const countryNodesCount = computed<CountryNodesInfo[]>(
  () =>
    continents.value?.countries.filter(
      (country) => country.continentCode === props.continentCode
    ) || []
);

const openCountry = (code: string) => {
  openNodesAvailableView(props.continentCode, code);
};

const loadMore = () => {
  if (isMoreNodesAvailable.value && !isNodesLoading.value) {
    loadMoreAvailableNodes({
      country: props.countryCode,
      continent: props.continentCode,
    });
  }
};

const reloadNodes = () => {
  const { query, countryCode, continentCode, orderBy, minPrice, maxPrice } = filters.value;
  loadAvailableNodes({
    query,
    country: countryCode === "any" ? undefined : countryCode,
    continent: continentCode === "any" ? undefined : (continentCode as ContinentCode),
    minPrice: Number(minPrice) * 1e6,
    maxPrice: Number(maxPrice) * 1e6,
    orderBy,
  });
};

watch(
  () => props.countryCode,
  (countryCode) => countryCode && loadAvailableNodes({ country: countryCode })
);
</script>

<style lang="scss" src="./NodesAvailable.scss" />
