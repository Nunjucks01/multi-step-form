<script setup lang="ts">
import { useFormStore } from "@/stores/form";
import { Plan } from "~/types";

const formStore = useFormStore();

const monthlyPriceArr = formStore.chosenAddOns.map((a) => a.monthlyPrice);
const yearlyPriceArr = formStore.chosenAddOns.map((a) => a.yearlyPrice);

const totalMonthlyPrice =
  (formStore.chosenPlan as Plan).monthlyPrice +
  monthlyPriceArr.reduce((sum, current) => sum + current, 0);

const totalYearlyPrice =
  (formStore.chosenPlan as Plan).yearlyPrice +
  yearlyPriceArr.reduce((sum, current) => sum + current, 0);
</script>

<template>
  <div class="flex total">
    <p>
      Total
      <span v-if="formStore.monthly">(per month)</span>
      <span v-else>(per year)</span>
    </p>
    <div v-if="formStore.monthly" class="total-price">
      +${{ totalMonthlyPrice }}/mo
    </div>
    <div v-else class="total-price">+${{ totalYearlyPrice }}/yr</div>
  </div>
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.total {
  padding: 20px;
}
strong {
  font-size: 15px;
  & span {
    font-weight: 700;
  }
}
.total-price {
  color: var(--color-purplish-blue);
  font-weight: 700;
  font-size: 20px;
}
</style>
