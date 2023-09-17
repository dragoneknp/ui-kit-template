<script lang="ts" setup>
import { defineProps, PropType } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
  },
  color: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  },
});
</script>

<template>
  <button class="button" :class="[props.size, props.color]" :disabled="props.disabled">
    <slot name="left-icon" />
    <slot />
    <slot name="right-icon" />
  </button>
</template>

<style scoped>
.button {
  color: #ffffff;
  outline: none;
  border: none;
  padding: 0 16px;
}

.small {
  height: 32px;
  border-radius: 8px;
}

.medium {
  height: 36px;
  border-radius: 10px;
}

.large {
  height: 40px;
  border-radius: 12px;
}

.primary {
  background: #535bf2;
}

.secondary {
  background: #a7a7a7;
}
</style>
