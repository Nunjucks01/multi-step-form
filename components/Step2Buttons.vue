<script setup lang="ts">
import { useFormStore } from "@/stores/form";
const planCheck = ref(true);

const formStore = useFormStore();

const router = useRouter();

const goBack = () => {
  formStore.activeStep = 1;
  router.push(`/step${formStore.activeStep}`);
};

const next = () => {
  if (formStore.chosenPlan) {
    formStore.activeStep = 3;
    router.push(`/step${formStore.activeStep}`);
  } else {
    planCheck.value = false;
  }
};
</script>

<template>
  <p v-show="!planCheck" class="error-message">Please select the plan.</p>
  <div class="nav-buttons">
    <button type="button" @click="goBack()" class="btn-back">Go Back</button>
    <button type="button" @click="next()" class="btn-primary btn-primary-next">
      Next Step
    </button>
  </div>
</template>
<style scoped>
.error-message {
  color: red;
  font-size: large;
  margin: auto;
}
</style>
