1. back and forvard browser events

<template>
  <div class="form-container">
    <Sidebar />
    <form @submit.prevent action="">
      <NuxtPage />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-container {
  max-width: 960px;
  background-color: var(--color-white);
  border-radius: 10px;
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  box-shadow: 0px 8px 16px 0px #e1e4e9;
}
</style>
