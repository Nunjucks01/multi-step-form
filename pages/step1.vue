<template>
  <section>
    <StepHeader>
      <template v-slot:h1>Personal info</template>
      <template v-slot:p>
        Please provide your name, email address, and phone number.
      </template>
    </StepHeader>
    <Step1PersonalData />
  </section>
</template>
