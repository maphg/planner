<template>
  <div
    class="
      snapy
      flex flex-row
      justify-center
      items-center
      w-full
      md:w-auto
      flex-none
      mr-0
      md:mr-10
    "
  >
    <div class="px-3">
      <h1 class="md:hidden text-2xl fw-700 leading-none">
        {{ array.ubicacion }}
      </h1>
    </div>
    <div class="px-3">
      <h1 class="text-xl fw-700 leading-none">{{ array.activos }}</h1>
      <h3 class="text-xs leading-none">Activos</h3>
    </div>
    <div class="px-3">
      <h1 class="text-lg fw-700 leading-none">{{ array.fueraServicio }}</h1>
      <h3 class="text-xs leading-none">F/S</h3>
    </div>
    <div class="px-3">
      <h1 class="text-lg fw-700 leading-none">{{ array.taller }}</h1>
      <h3 class="text-xs leading-none">Taller</h3>
    </div>
    <div class="px-3">
      <h1 class="text-lg fw-700 leading-none">{{ array.operaMal }}</h1>
      <h3 class="text-xs leading-none">O. mal</h3>
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
