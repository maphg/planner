<template>
  <div class="flex flex-row items-center">
    <div
      class="
        min-w-10
        h-10
        rounded-tl-xl rounded-br-xl
        flex
        items-center
        justify-center
        leading-none
      "
      :class="`${seccion.toLowerCase()}`"
    >
      <p class="flex-none fw-500 text-lg">{{ seccion }}</p>
    </div>
    <div
      class="
        fw-500
        self-center
        flex flex-row flex-wrap
        text-xs
        px-2
        leading-tight
        justify-start
        items-center
      "
    >
      <h1>{{ nombreseccion }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seccion: {
      type: String,
    },
    nombreseccion: {
      type: String,
    },
  },
};
</script>

<style scoped>
.min-w-10 {
  min-width: 2.5rem;
}
</style>
