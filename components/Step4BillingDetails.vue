<script setup lang="ts">
import { useFormStore } from "@/stores/form";
import { Plan } from "~/types";

const router = useRouter();
const formStore = useFormStore();

const updatePlan = () => {
  formStore.activeStep = 2;
  router.push("/step2");
};
</script>

<template>
  <div class="bill">
    <div class="flex">
      <div>
        <strong>
          {{ (formStore.chosenPlan as Plan).title }}
          <span v-if="formStore.monthly">(Monthly)</span>
          <span v-else>(Yearly)</span>
        </strong>
        <button type="button" @click="updatePlan()" class="change">
          Change
        </button>
      </div>
      <strong v-if="formStore.monthly" class="header-price">
        ${{ (formStore.chosenPlan as Plan).monthlyPrice }}/mo
      </strong>
      <strong v-else class="header-price">
        ${{ (formStore.chosenPlan as Plan).yearlyPrice }}/yr
      </strong>
    </div>
    <div class="line"></div>
    <div v-for="(addOn, index) in formStore.chosenAddOns" :key="index">
      <div v-if="addOn.chosen" class="flex">
        <p>{{ addOn.title }}</p>
        <div v-if="formStore.monthly" class="price">
          +${{ addOn.monthlyPrice }}/mo
        </div>
        <div v-else class="price">+${{ addOn.yearlyPrice }}/yr</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bill {
  background-color: #f6f6ff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 160px;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

strong {
  font-size: 15px;
  & span {
    font-weight: 700;
  }
}
.line {
  background-color: var(--color-light-grey);
  height: 1px;
}
.change {
  text-decoration: underline;
  margin-top: 4px;
  color: var(--color-cool-grey);
  background-color: transparent;
  border: none;
  display: block;
  padding: 0;
  letter-spacing: -1px;
  &:hover {
    color: var(--color-purplish-blue);
  }
}
.price {
  font-weight: 500;
}
</style>
