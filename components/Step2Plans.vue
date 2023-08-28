<script setup lang="ts">
import type { Plan } from "@/types";
import { useFormStore } from "@/stores/form";

const formStore = useFormStore();

const plans = ref<Plan[]>([
  {
    id: 0,
    icon: "arcade",
    title: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    chosen: false,
  },
  {
    id: 1,
    icon: "advanced",
    title: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    chosen: false,
  },
  {
    id: 2,
    icon: "pro",
    title: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    chosen: false,
  },
]);

const planSelect = (planValue: Plan) => {
  plans.value.forEach((a: Plan) => (a.chosen = false));
  planValue.chosen = true;
  formStore.chosenPlan = planValue;
};
</script>

<template>
  <div class="card-container">
    <button
      type="button"
      v-for="plan in plans"
      @click="planSelect(plan)"
      :key="plan.id"
      :class="{ activePlan: plan.chosen }"
      class="plan-card"
      :value="plan.id"
    >
      <img :src="`/images/icon-${plan.icon}.svg`" alt="" />
      <strong>{{ plan.title }}</strong>
      <p class="price" v-if="formStore.monthly">${{ plan.monthlyPrice }}/mo</p>
      <p class="price" v-if="!formStore.monthly">${{ plan.yearlyPrice }}/yr</p>
      <p class="discount" v-if="!formStore.monthly">2 months free</p>
    </button>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-bottom: 32px;
}
.plan-card {
  border: 1px solid var(--color-light-grey);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  & img {
    width: 32px;
    margin-bottom: 40px;
  }
  &:hover {
    border-color: var(--color-purplish-blue);
  }
}
.activePlan {
  border-color: var(--color-purplish-blue);
  background-color: #f6f6ff;
}
.price {
  margin: 4px 0;
}
.discount {
  color: var(--color-marine-blue);
}
</style>
