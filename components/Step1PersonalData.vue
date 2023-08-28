<script setup lang="ts">
import { useFormStore } from "@/stores/form";
const router = useRouter();

const formStore = useFormStore();

const name = ref("");
const email = ref("");
const phone = ref("");

const nameCheck = ref(true);
const emailCheck = ref(true);
const phoneCheck = ref(true);

if (process.client) {
  name.value = sessionStorage.getItem("name") as string;
  email.value = sessionStorage.getItem("email") as string;
  phone.value = sessionStorage.getItem("phone") as string;
}

watch(name, () => sessionStorage.setItem("name", name.value));
watch(email, () => sessionStorage.setItem("email", email.value));
watch(phone, () => sessionStorage.setItem("phone", phone.value));

const next = () => {
  !name.value ? (nameCheck.value = false) : (nameCheck.value = true);
  !email.value ? (emailCheck.value = false) : (emailCheck.value = true);
  !phone.value ? (phoneCheck.value = false) : (phoneCheck.value = true);
  if (name.value && email.value && phone.value) {
    formStore.activeStep = 2;
    router.push(`/step${formStore.activeStep}`);
  }
};
</script>
<template>
  <div class="wrapper">
    <label for="name">Name</label>
    <p v-if="!nameCheck">This field is required</p>
  </div>
  <input
    :class="{ error: !nameCheck }"
    v-model="name"
    type="text"
    id="name"
    placeholder="e.g. Stephen King"
    required
  />
  <div class="wrapper">
    <label for="email">Email Address</label>
    <p v-if="!emailCheck">This field is required</p>
  </div>
  <input
    :class="{ error: !emailCheck }"
    v-model="email"
    type="email"
    id="email"
    placeholder="e.g. stephenking@lorem.com"
    required
  />
  <div class="wrapper">
    <label for="phone">Phone Number</label>
    <p v-if="!phoneCheck">This field is required</p>
  </div>
  <input
    :class="{ error: !phoneCheck }"
    v-model="phone"
    type="tel"
    id="phone"
    name="phone"
    pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
    required
    placeholder="e.g. 123 123 123"
    maxlength="11"
  />
  <div class="nav-buttons">
    <button type="button" @click="next()" class="btn-primary btn-primary-next">
      Next Step
    </button>
  </div>
</template>

<style lang="scss" scoped>
input {
  width: 100%;
  border: 1px solid var(--color-light-grey);
  padding: 12px;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 20px;
  &::placeholder {
    color: var(--color-cool-grey);
  }
}
.wrapper {
  display: flex;
  justify-content: space-between;
}
p {
  color: red;
  font-weight: bold;
}
.error {
  border-color: red;
}
</style>
