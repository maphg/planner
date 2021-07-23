<template>
   <div class="snapy flex flex-row justify-center items-center w-full md:w-auto flex-none mr-0 md:mr-24 py-1">
      <div class="flex flex-col justify-center items-center leading-none p-2 rounded self-stretch mr-1">
         <h3 class="font-semibold text-xl leading-none">{{ result[1] }}</h3>
         <h1 class="font-semibold text-xxs">Semana</h1>
         <h3 class="font-semibold text-xxs leading-none">{{ result[0] }}</h3>
      </div>
      <div class="flex flex-col justify-center items-center leading-none p-2 rounded self-stretch mr-1" :class="{ activo2: dia === 1 }">
         <h3 class="font-semibold text-xxs leading-none">ZIA</h3>
         <h3 class="font-semibold text-xxs leading-none">ZHP</h3>
         <h1 class="font-semibold text-sm">L</h1>
      </div>
      <div class="flex flex-col justify-center items-center leading-none p-2 rounded self-stretch mr-1" :class="{ activo2: dia === 2 }">
         <h3 class="font-semibold text-xxs leading-none">ZIC</h3>
         <h3 class="font-semibold text-xxs leading-none text-transparent">Z</h3>
         <h1 class="font-semibold text-sm">M</h1>
      </div>
      <div class="flex flex-col justify-center items-center leading-none p-2 rounded self-stretch mr-1" :class="{ activo2: dia === 3 }">
         <h3 class="font-semibold text-xxs leading-none">DEC</h3>
         <h3 class="font-semibold text-xxs leading-none">ZIE</h3>
         <h1 class="font-semibold text-sm">M</h1>
      </div>
      <div class="flex flex-col justify-center items-center leading-none p-2 rounded self-stretch mr-1" :class="{ activo2: dia === 4 }">
         <h3 class="font-semibold text-xxs leading-none">ZHC</h3>
         <h3 class="font-semibold text-xxs leading-none">ZHA</h3>
         <h1 class="font-semibold text-sm">J</h1>
      </div>
      <div class="flex flex-col justify-center items-center leading-none p-2 rounded self-stretch mr-1" :class="{ activo2: dia === 5 }">
         <h3 class="font-semibold text-xxs leading-none">ZIL</h3>
         <h3 class="font-semibold text-xxs leading-none">AUT</h3>
         <h1 class="font-semibold text-sm">V</h1>
      </div>
   </div>
</template>

<script>
export default {
   setup() {
      const dia = new Date().getDay();
      function getWeekNumber(d) {
         // Copy date so don't modify original
         d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
         // Set to nearest Thursday: current date + 4 - current day number
         // Make Sunday's day number 7
         d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
         // Get first day of year
         var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
         // Calculate full weeks to nearest Thursday
         var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
         // Return array of year and week number
         return [d.getUTCFullYear(), weekNo];
      }

      var result = getWeekNumber(new Date());
      return { dia, result };
   },
};
</script>

<style scoped>
.activo2 {
   @apply bg-white shadow;
}

.activo2 h1 {
   @apply text-bluedemon-400;
}
</style>
