<template>
  <section>
    <img src="/images/icon-thank-you.svg" alt="" />
    <StepHeader>
      <template v-slot:h1>Thank you!</template>
      <template v-slot:p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quos
        molestiae. Voluptatem, incidunt aperiam voluptatibus magni harum quod ex
        rerum repellendus molestiae et doloremque earum hic voluptates. Quidem,
      </template>
    </StepHeader>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
div {
  text-align: center;
}

img {
  width: 15%;
  margin-bottom: 32px;
}
</style>
