<template>
  <section>
    <StepHeader>
      <template v-slot:h1>Select your plan</template>
      <template v-slot:p>
        You have the option of mothly or yearly billing.
      </template>
    </StepHeader>
    <Step2Plans />
    <Step2BillingFrequencyToggle />
    <Step2Buttons />
  </section>
</template>
