<script setup lang="ts">
import { useFormStore } from "@/stores/form";

const formStore = useFormStore();

const router = useRouter();

const goBack = () => {
  formStore.activeStep = 3;
  router.push(`/step${formStore.activeStep}`);
};
</script>

<template>
  <div class="nav-buttons">
    <button type="button" @click="goBack()" class="btn-back">Go Back</button>
    <button
      @click="router.push('/step5')"
      class="btn-primary btn-primary-confirm"
    >
      Confirm
    </button>
  </div>
</template>
