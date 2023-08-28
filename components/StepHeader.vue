<template>
  <div>
    <h1><slot name="h1"></slot></h1>
    <p><slot name="p"></slot></p>
  </div>
</template>

<style scoped>
p {
  margin-top: 12px;
  margin-bottom: 32px;
  line-height: 20px;
}
</style>
