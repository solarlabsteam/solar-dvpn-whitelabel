<template>
  <button
    class="slr-button slr-clickable"
    :class="classes"
    :disabled="disabled || loading"
    @click="onClick"
  >
    <slr-loader v-if="loading" :size="15" />
    <slot v-else name="default" :loading="loading" />
  </button>
</template>

<script>
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  name: "SlrButton",

  props: {
    to: {
      type: String,
      default: null,
    },
    block: {
      type: Boolean,
      default: false,
    },
    tiny: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    large: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: "",
      validator: (variant) =>
        variant ? ["primary", "secondary", "danger", "info", "light", "text"].includes(variant) : true,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    const router = useRouter();
    const classes = computed(() => ({
      // Properties
      "slr-button--block": props.block,
      "slr-button--tiny": props.tiny,
      "slr-button--large": props.large,
      "slr-button--disabled": props.disabled || props.loading,
      "slr-button--shadow": props.shadow,
      "slr-button--outline": props.outline,

      // Variants
      "slr-button--primary": props.variant === "primary",
      "slr-button--secondary": props.variant === "secondary",
      "slr-button--danger": props.variant === "danger",
      "slr-button--info": props.variant === "info",
      "slr-button--light": props.variant === "light",
      "slr-button--text": props.variant === "text",
    }));

    const onClick = (e) => {
      if (props.disabled || props.loading) {
        e.stopImmediatePropagation();
        e.preventDefault();
        return;
      }

      emit("click", e);

      if (props.to) {
        router.push(props.to);
      }
    };

    return {
      onClick,
      classes,
    };
  },
};
</script>

<style lang="scss" src="./SlrButton.scss" scoped />
