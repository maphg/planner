<template>
  <div
    class="
      hidden
      md:flex
      md:my-0
      my-6
      w-full
      md:w-auto
      text-center
      flex-none
      snapy
      mr-0
      md:mr-24
      py-1
    "
  >
    <div class="flex flex-col items-center justify-center leading-none w-full">
      <h1 class="text-3xl font-semibold">{{ array.ubicacion }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    array: {
      type: Object,
    },
  },
};
</script>

<style></style>
