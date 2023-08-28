import { ref } from "vue";
import { defineStore } from "pinia";
import type { AddOn, Plan } from "~/types";

export const useFormStore = defineStore("form", () => {
  const activeStep = ref(1);
  const monthly = ref(true);
  const chosenPlan = ref<Plan>();
  const chosenAddOns = ref<AddOn[]>([]);

  return { activeStep, monthly, chosenPlan, chosenAddOns };
});
