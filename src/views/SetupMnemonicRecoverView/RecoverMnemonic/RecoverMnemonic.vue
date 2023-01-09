<template>
  <div class="recover-mnemonic">
    <div class="recover-mnemonic__fields">
      <div class="recover-mnemonic__field" v-for="n in wordsNumber" :key="n">
        <div class="recover-mnemonic__field-pretend">{{ n }}</div>
        <slr-input
          type="text"
          :wrapper-class-name="'recover-mnemonic__field-input'"
          :model-value="words[n - 1]"
          @paste="paste"
          @update:model-value="(str) => onWordsUpdate(str, n - 1)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SlrInput from "@/components/ui/SlrInput/SlrInput.vue";
import debounce from "lodash.debounce";

defineProps<{
  words: string[];
  wordsNumber: number;
}>();

const emit = defineEmits<{
  (e: "update:model-value", v: string, i: number): void;
}>();

const onWordsUpdate = (value: string, index: number) => {
  debounce(emit("update:model-value", value, index));
};

const paste = (e: ClipboardEvent) => {
  e.preventDefault();

  const text = (e.clipboardData?.getData("text") as string) || "";
  text.split(" ").map((word, index) => emit("update:model-value", word, index));
};
</script>

<style lang="scss">
.recover-mnemonic {
  padding: 0 16px 16px;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  box-sizing: border-box;

  &__fields {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    padding: 1px;
  }

  &__field {
    display: flex;
    align-items: center;
    outline: 1px solid #515151;
    border-radius: 21px;
    background-color: var(--slr__body-bg-clr);
  }

  &__field-pretend {
    padding: 11px;
    outline: 1px solid #515151;
    border-radius: 21px;
    background-color: var(--slr__border-clr);
    width: 53px;
    height: 100%;
    box-sizing: border-box;
  }

  &__field-input {
    border: none;
    background-color: transparent;
    border-radius: 21px;
    width: 100%;
  }
}
</style>
