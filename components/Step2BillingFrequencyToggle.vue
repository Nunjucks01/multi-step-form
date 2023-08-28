<script setup lang="ts">
import { useFormStore } from "@/stores/form";

const formStore = useFormStore();
</script>

<template>
  <div class="billing-frequency">
    <p :class="{ activeText: formStore.monthly }">Monthly</p>
    <button
      type="button"
      @click="formStore.monthly = !formStore.monthly"
      class="toggle"
    >
      <div
        :class="{ activeIcon: !formStore.monthly }"
        class="toggle-icon"
      ></div>
    </button>
    <p :class="{ activeText: !formStore.monthly }">Yearly</p>
  </div>
</template>

<style scoped lang="scss">
.billing-frequency {
  background-color: #f6f6ff;
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
}
.toggle {
  border: none;
  border-radius: 8px;
  background-color: var(--color-marine-blue);
  width: 28px;
  height: 14px;
  position: relative;
  &-icon {
    position: absolute;
    background-color: var(--color-white);
    border-radius: 100%;
    width: 8px;
    height: 8px;
    top: 3px;
    left: 3px;
    transition: transform 0.3s;
  }
}
.activeIcon {
  transform: translateX(14px);
}
p {
  font-weight: 700;
}
.activeText {
  color: var(--color-marine-blue);
}
</style>
