<template>
   <div class="flex flex-row items-center justify-start w-full py-2 px-1">
      <div class="w-4/12 text-justify">
         <h1>{{ parametro }}</h1>
      </div>
      <div class="w-4/12 flex items-center justify-center">
         <input class="inputt" type="number" name="" id="" :placeholder="medida" />
         <button class="boton">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
         </button>
      </div>
      <div class="w-4/12 flex items-center justify-center">
         <input class="inputt" type="number" name="" id="" :placeholder="medida" />
         <button class="boton">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
         </button>
      </div>
   </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
   props: {
      parametro: {
         type: String,
      },
      medida: {
         type: String,
      },
   },
   setup() {
      const valor = ref("si");
      return { valor };
   },
};
</script>

<style scoped>
.inputt {
   @apply w-2/3 rounded-sm bg-gris-30 font-bold text-gray-700 p-1 md:w-1/5 focus:outline-none;
}

.boton {
   @apply flex items-center justify-center rounded-full bg-yellow-400 w-6 h-6 ml-1 text-yellow-700 focus:outline-none;
}
</style>
