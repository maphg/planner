<template>
  <div class="fila" v-for="(x, y) in array" :key="y">
    <div
      class="w-2 h-2 rounded-full flex-none mr-1"
      :class="x.tipo.toLowerCase()"
    ></div>
    <h1 class="truncate">{{ x.titulo }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    array: { type: Object },
  },
};
</script>

<style scoped>
.fila {
  @apply w-full flex flex-row items-center justify-start px-2 py-1 hover:bg-gris-30 rounded-lg text-sm cursor-pointer hover:text-bluedemon-300;
}

.emergencia {
  @apply bg-red-400;
}
.urgencia {
  @apply bg-yellow-400;
}
.alarma {
  @apply bg-yellow-300;
}
.alerta {
  @apply bg-green-400;
}
.seguimiento {
  @apply bg-blue-400;
}
.mp {
  @apply bg-gray-700;
}
.pda {
  @apply bg-indigo-300;
}
</style>
