<script setup lang="ts">
import { useFormStore } from "@/stores/form";
import { AddOn } from "~/types";

const formStore = useFormStore();
const router = useRouter();

const addOns = reactive<AddOn[]>([
  {
    title: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
    chosen: false,
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
    chosen: false,
  },
  {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
    chosen: false,
  },
]);

const addToArr = (addOn: AddOn) => {
  addOn.chosen = !addOn.chosen;
  if (addOn.chosen === true) {
    formStore.chosenAddOns.push(addOn);
  } else {
    const index = formStore.chosenAddOns.indexOf(addOn);
    formStore.chosenAddOns.splice(index, 1);
  }
};

const goBack = () => {
  formStore.activeStep = 2;
  router.push(`/step${formStore.activeStep}`);
};

const next = () => {
  formStore.activeStep = 4;
  router.push(`/step${formStore.activeStep}`);
};
</script>

<template>
  <button
    type="button"
    @click="addToArr(addOn)"
    class="add-ons-item"
    v-for="(addOn, index) in addOns"
    :key="index"
    :class="{ checked: addOn.chosen }"
  >
    <input type="checkbox" v-model="addOn.chosen" />
    <div>
      <h3>{{ addOn.title }}</h3>
      <p>{{ addOn.description }}</p>
    </div>
    <p v-if="formStore.monthly" class="price">+${{ addOn.monthlyPrice }}/mo</p>
    <p v-if="!formStore.monthly" class="price">+${{ addOn.yearlyPrice }}/yr</p>
  </button>
  <div class="nav-buttons">
    <button type="button" @click="goBack()" class="btn-back">Go Back</button>
    <button type="button" @click="next()" class="btn-primary btn-primary-next">
      Next Step
    </button>
  </div>
</template>

<style scoped lang="scss">
.add-ons-item {
  display: flex;
  border: solid 1px var(--color-light-grey);
  background-color: transparent;
  text-align: unset;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & input {
    margin-right: 16px;
  }
  & h3 {
    margin-bottom: 4px;
    font-size: 14px;
  }
  & p {
    font-size: 12px;
  }
  & .price {
    margin-left: auto;
    color: var(--color-purplish-blue);
    font-weight: 500;
  }
}
.checked {
  background-color: rgba($color: #856ffd, $alpha: 0.1);
  border-color: var(--color-purplish-blue);
}
</style>
