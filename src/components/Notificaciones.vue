<template>
   <div class="absolute right-2 flex flex-row justify-end bg-red-400 items-center principal">
      <div class="seguimiento w-5 h-5 rounded-lg flex items-center justify-center bg-zil-500">
         <h1>10</h1>
      </div>
      <div class="alerta w-5 h-5 rounded-lg flex items-center justify-center bg-blue-500">
         <h1>9</h1>
      </div>
      <div class="alarma w-5 h-5 rounded-lg flex items-center justify-center bg-zie-500">
         <h1>6</h1>
      </div>
      <div class="urgencia w-5 h-5 rounded-lg flex items-center justify-center bg-naranja1a-500">
         <h1>8</h1>
      </div>
      <div class="emergencia w-5 h-5 rounded-lg flex items-center justify-center bg-zic-500">
         <h1>4</h1>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style scoped>
.principal:hover {
   width: 42%;
   @apply bg-gris-30;
   z-index: 52;
}

.principal:hover .emergencia {
   position: relative;
}
.principal:hover .urgencia {
   position: relative;
   margin-right: 3px;
}
.principal:hover .alarma {
   position: relative;
   margin-right: 3px;
}
.principal:hover .alerta {
   position: relative;
   margin-right: 3px;
}
.principal:hover .seguimiento {
   position: relative;
   margin-right: 3px;
}

.emergencia {
   position: absolute;
   margin-right: 4px;
}
.urgencia {
   position: absolute;
   margin-right: 8px;
}
.alarma {
   position: absolute;
   margin-right: 12px;
}
.alerta {
   position: absolute;
   margin-right: 16px;
}
.seguimiento {
   position: absolute;
   margin-right: 20px;
}
</style>
