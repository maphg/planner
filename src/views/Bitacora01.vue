<template>
   <div class="p-2">
      <div class="p-2">
         <h1>Bitacora 0.3</h1>
      </div>
      <div>
         <h1><span class="font-bold mr-2">MBJ</span>VIERNES 25 DE JUNIO, 03:45 PM</h1>
      </div>
      <!-- CONTENEDOR PRINCIPAL -->
      <div class="flex flex-col justify-start items-center relative py-4">
         <!-- botones cabecera -->
         <div class=" w-full flex flex-row justify-center items-center">
            <div class="botones" @click="tabshow = '1'" :class="{ 'bg-gris-30 text-bluedemon-500': tabshow === '1' }">Registro</div>
            <div class="botones" @click="tabshow = '2'" :class="{ 'bg-gris-30 text-bluedemon-500': tabshow === '2' }">Gráficos</div>
         </div>
         <!-- botones cabecera -->

         <!-- <- REGISTRO -> -->
         <transition enter-active-class="animate__animated animate__fadeInRight">
            <div v-if="tabshow === '1'" class="tab">
               <div class="flex flex-row justify-start items-center w-full mb-4">
                  <div class="w-10 h-10 mr-4 rounded-lg font-semibold bg-zic-500 text-zic-300 flex items-center justify-center">
                     <h1>ZIC</h1>
                  </div>
                  <h1 class="font-semibold uppercase">Chillers</h1>
               </div>
               <!-- se oculta en movil -->
               <div class="hidden md:flex flex-row items-center justify-start w-full uppercase font-bold text-xs leading-none bg-gris-30 rounded-tl-lg rounded-tr-lg py-1">
                  <div class="w-2/12">
                     <h1>Activo</h1>
                  </div>
                  <div class="flex flex-row items-center justify-start w-full md:w-10/12">
                     <div class="w-4/12">
                        <h1>Parámetro</h1>
                     </div>
                     <div class="w-4/12">
                        <h1>1er. Turno</h1>
                        <h1 class="text-xxs font-bold">8:00 a 9:00 a.m.</h1>
                     </div>
                     <div class="w-4/12">
                        <h1>2do. Turno</h1>
                        <h1 class="text-xxs font-bold">5:00 a 6:00 p.m.</h1>
                     </div>
                  </div>
               </div>
               <!-- se oculta en movil -->
               <!-- *************** EQUIPO *************** -->
               <div class="flex flex-col md:flex-row items-center justify-start w-full text-xs md:text-base border-b-2 border-gris-300 py-2">
                  <div class="w-full md:w-2/12 flex flex-row items-center justify-center">
                     <div class="w-4/12 md:w-full uppercase font-bold text-lg">
                        <h1 class="truncate">Chiller 01</h1>
                     </div>
                     <div class="w-4/12 md:hidden">
                        <h1 class="text-xxs font-bold">8:00 a 9:00 a.m.</h1>
                     </div>
                     <div class="w-4/12 md:hidden">
                        <h1 class="text-xxs font-bold">5:00 a 6:00 p.m.</h1>
                     </div>
                  </div>
                  <!-- Parametros -->
                  <div class="w-full md:w-10/12">
                     <filaregistros parametro="Temperatura Impulsión AH" medida="°C"></filaregistros>
                     <filaregistros parametro="Temperatura Retorno AH" medida="°C"></filaregistros>
                     <filaregistros parametro="T Set Point Impulsión Chillers" medida="°C"></filaregistros>
                  </div>
                  <!-- Parametros -->
               </div>
               <!-- *************** EQUIPO *************** -->
               <!-- *************** EQUIPO *************** -->
               <div class="flex flex-col md:flex-row items-center justify-start w-full text-xs md:text-base border-b-2 border-gris-300 py-2">
                  <div class="w-full md:w-2/12 flex flex-row items-center justify-center">
                     <div class="w-4/12 md:w-full uppercase font-bold text-lg">
                        <h1 class="truncate">Chiller 02</h1>
                     </div>
                     <div class="w-4/12 md:hidden">
                        <h1 class="text-xxs font-bold">8:00 a 9:00 a.m.</h1>
                     </div>
                     <div class="w-4/12 md:hidden">
                        <h1 class="text-xxs font-bold">5:00 a 6:00 p.m.</h1>
                     </div>
                  </div>
                  <!-- Parametros -->
                  <div class="w-full md:w-10/12">
                     <filaregistros parametro="Temperatura Impulsión AH" medida="°C"></filaregistros>
                     <filaregistros parametro="Temperatura Retorno AH" medida="°C"></filaregistros>
                     <filaregistros parametro="T Set Point Impulsión Chillers" medida="°C"></filaregistros>
                  </div>
                  <!-- Parametros -->
               </div>
               <!-- *************** EQUIPO *************** -->
            </div>
         </transition>
         <!-- <- REGISTRO -> -->
         <!-- ****************************** -->
         <!-- <- GRÁFICOS -> -->
         <transition enter-active-class="animate__animated animate__fadeInRight">
            <div v-if="tabshow === '2'" class="tab">
               <div class="flex flex-row justify-start items-center w-full mb-4">
                  <div class="w-10 h-10 mr-4 rounded-lg font-semibold bg-zic-500 text-zic-300 flex items-center justify-center">
                     <h1>ZIC</h1>
                  </div>
                  <h1 class="font-semibold uppercase">Chillers</h1>
               </div>
               <!-- *************** EQUIPO *************** -->
               <div class="flex flex-col md:flex-row items-center justify-start w-full text-xs md:text-base border-b-2 border-gris-600 py-2">
                  <div class="w-full md:w-2/12 flex flex-row items-center justify-center">
                     <div class="w-4/12 md:w-full uppercase font-bold text-lg">
                        <h1 class="truncate">Chiller 01</h1>
                     </div>
                  </div>
                  <!-- Parametros -->
                  <div class="w-full md:w-10/12 flex flex-wrap flex-row justify-center md:justify-start items-center">
                     <div class="w-full md:w-1/3 h-56 font-semibold">
                        <h1>Temperatura Impulsión AH</h1>
                        <grafico-01 class="medida"></grafico-01>
                     </div>
                     <div class="w-full md:w-1/3 h-56 font-semibold">
                        <h1>Temperatura Retorno AH</h1>
                        <grafico-01 class="medida"></grafico-01>
                     </div>
                     <div class="w-full md:w-1/3 h-56 font-semibold">
                        <h1>T Set Point Impulsión Chillers</h1>
                        <grafico-01 class="medida"></grafico-01>
                     </div>
                  </div>
                  <!-- Parametros -->
               </div>
               <!-- *************** EQUIPO *************** -->
               <!-- *************** EQUIPO *************** -->
               <div class="flex flex-col md:flex-row items-center justify-start w-full text-xs md:text-base border-b-2 border-gris-600 py-2">
                  <div class="w-full md:w-2/12 flex flex-row items-center justify-center">
                     <div class="w-4/12 md:w-full uppercase font-bold text-lg">
                        <h1 class="truncate">Chiller 02</h1>
                     </div>
                  </div>
                  <!-- Parametros -->
                  <div class="w-full md:w-10/12 flex flex-wrap flex-row justify-center md:justify-start items-center">
                     <div class="w-full md:w-1/3 h-56 font-semibold">
                        <h1>Temperatura Impulsión AH</h1>
                        <grafico-01 class="medida"></grafico-01>
                     </div>
                     <div class="w-full md:w-1/3 h-56 font-semibold">
                        <h1>Temperatura Retorno AH</h1>
                        <grafico-01 class="medida"></grafico-01>
                     </div>
                     <div class="w-full md:w-1/3 h-56 font-semibold">
                        <h1>T Set Point Impulsión Chillers</h1>
                        <grafico-01 class="medida"></grafico-01>
                     </div>
                  </div>
                  <!-- Parametros -->
               </div>
               <!-- *************** EQUIPO *************** -->
            </div>
         </transition>
         <!-- <- GRÁFICOS -> -->
      </div>
      <!-- CONTENEDOR PRINCIPAL -->
   </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Filaregistros from "../components/Filaregistros.vue";
import Grafico01 from "./Grafico01.vue";
export default {
   components: { Filaregistros, Grafico01 },
   setup() {
      const tabshow = ref("1");
      return { tabshow };
   },
};
</script>

<style scoped>
.botones {
   @apply py-2 px-3 mx-2 rounded-xl cursor-pointer;
}
.botones:hover {
   @apply bg-gris-30 text-bluedemon-500;
}

.tab {
   @apply w-full flex flex-col justify-start items-start py-4;
}

.medida {
   width: 100%;
   height: 90%;
}
</style>
