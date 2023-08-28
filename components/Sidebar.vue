<script setup lang="ts">
import { Step } from "~/types";
import { useFormStore } from "../stores/form";

const steps = ref<Step[]>([
  { id: 1, heading: "YOUR INFO" },
  { id: 2, heading: "SELECT PLAN" },
  { id: 3, heading: "ADD-ONS" },
  { id: 4, heading: "SUMMARY" },
]);

const formStore = useFormStore();
</script>

<template>
  <div class="sidebar">
    <div v-for="step in steps">
      <div
        :class="{ active: formStore.activeStep === step.id }"
        class="step-icon"
      >
        {{ step.id }}
      </div>
      <div>
        <p>STEP {{ step.id }}</p>
        <h2>{{ step.heading }}</h2>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.sidebar {
  background-image: url("/images/bg-sidebar-desktop.svg");
  width: 274px;
  height: 568px;
  color: var(--color-white);
  padding: 40px 32px;
  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
  }
}
.step-icon {
  font-size: 14px;
  margin-right: 24px;
  border: 1px solid var(--color-white);
  border-radius: 100%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}

h2 {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 4px;
}

.active {
  background-color: var(--color-light-blue);
  color: var(--color-black);
}
</style>
