<template>
  <section>
    <StepHeader>
      <template v-slot:h1>Finishing up</template>
      <template v-slot:p>
        Double-check everything looks OK before confirming.
      </template>
    </StepHeader>
    <Step4BillingDetails />
    <Step4TotalPrice />
    <Step4Buttons />
  </section>
</template>
