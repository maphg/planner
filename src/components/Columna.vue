<template>
  <div class="columnaplanner">
    <div
      class="
        flex flex-row
        justify-between
        items-start
        sticky
        top-0
        bg-white
        pb-1
        z-50
      "
    >
      <!-- icono -->
      <iconocol :seccion="array.seccion" :nombreseccion="array.tituloSeccion" />
      <!-- icono -->

      <!-- Botones -->
      <div class="flex-row justify-end items-center flex">
        <div
          @click="tabshow = '2'"
          class="boton"
          :class="{ 'bg-gris-30 text-bluedemon-400': tabshow === '2' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div
          @click="tabshow = '1'"
          class="boton"
          :class="{ 'bg-gris-30 text-bluedemon-400': tabshow === '1' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 9.5H7M21 4.5H3M21 14.5H3M21 19.5H7" />
          </svg>
        </div>
        <div class="boton" @click="array.toggle = !array.toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
      <!-- Botones -->
    </div>

    <!-- Subsecciones -->
    <transition enter-active-class="animate__animated animate__slideInRight">
      <div v-if="tabshow === '1'" class="pestaña">
        <div v-for="(sub, s) in array.subsecciones" :key="s" class="subseccion">
          <div class="flex flex-row justify-start items-center">
            <div class="dot"></div>
            <h1 class="fw-400">{{ sub.subseccion }}</h1>
          </div>
          <div class="principal">
            <h1 v-if="sub.seguimiento > 0">{{ sub.seguimiento }}</h1>
            <h1 v-if="sub.alerta > 0">{{ sub.alerta }}</h1>
            <h1 v-if="sub.alarma > 0">{{ sub.alarma }}</h1>
            <h1 v-if="sub.urgencia > 0">{{ sub.urgencia }}</h1>
            <h1 v-if="sub.emergencia > 0">{{ sub.emergencia }}</h1>
          </div>
        </div>
        <div class="subseccion">
          <div class="flex flex-row justify-start items-center">
            <div class="dot"></div>
            <h1 class="fw-400">PROYECTOS</h1>
          </div>
          <div class="principal">
            <h1 v-if="array.proyectos !== '0'">{{ array.proyectos }}</h1>
          </div>
        </div>
      </div>
    </transition>
    <!-- Subsecciones -->

    <!-- Team -->
    <transition enter-active-class="animate__animated animate__slideInRight">
      <div v-if="tabshow === '2'" class="pestaña">
        <div
          v-for="(team, z) in array.usuariosSeccion"
          :key="z"
          class="subseccion"
        >
          <div class="flex flex-row justify-start items-center">
            <div
              class="w-6 h-6 rounded-full bg-gris-600 mr-1 foto"
              :style="{ 'background-image': `url(${team.avatar})` }"
            ></div>
            <h1>{{ team.usuario }}</h1>
          </div>
          <div class="principal">
            <h1 v-if="team.seguimiento > 0">{{ team.seguimiento }}</h1>
            <h1 v-if="team.alerta > 0">{{ team.alerta }}</h1>
            <h1 v-if="team.alarma > 0">{{ team.alarma }}</h1>
            <h1 v-if="team.urgencia > 0">{{ team.urgencia }}</h1>
            <h1 v-if="team.emergencia > 0">{{ team.emergencia }}</h1>
          </div>
        </div>
      </div>
    </transition>
    <!-- Team -->
  </div>
</template>

<script>
import { ref, computed } from "@vue/reactivity";

import Notificaciones from "./Notificaciones.vue";
import Iconocol from "./Iconocol.vue";
export default {
  components: { Notificaciones, Iconocol },
  props: { array: { type: Object } },

  setup(props) {
    const tabshow = ref("1");

    return { tabshow };
  },
};
</script>

<style scoped>
div {
  scroll-behavior: smooth;
  transition: transform;
}

.columnaplanner {
   @apply bg-white mr-4 md:mr-4 w-72 md:w-80 rounded-xl self-start pb-3 text-left relative shadow-md;
   scroll-snap-align: center;
   flex: none;
   max-height: 100%;
   overflow-y: scroll;
   overflow-x: hidden;
}
.columnaplanner::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}

.foto {
  @apply bg-cover bg-center  border-gris-30 shadow;
}

.pestaña {
  @apply flex flex-col justify-start items-center px-3;
}
.subseccion {
  @apply hover:bg-gris-30 w-full p-2 cursor-pointer rounded-lg truncate uppercase text-xs font-normal flex flex-row items-center justify-between;
}
.subseccion:hover {
  @apply text-bluedemon-300 font-semibold;
}

.boton {
  @apply cursor-pointer p-2 rounded-b-xl;
}
.boton:hover {
  @apply bg-gris-30 text-bluedemon-400;
}

.dot {
  @apply w-2 h-2 rounded-full bg-gris-300 flex-none mr-1;
}

.subseccion:hover div .dot {
  @apply bg-bluedemon-300 w-1 h-1;
}

/* self-stretch  */
.principal {
  position: absolute;
  right: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.principal :nth-of-type(n) {
  position: absolute;
  @apply w-5 h-5 rounded-full flex items-center justify-center;
}
.subseccion:hover .principal h1 {
  position: relative;
  @apply mr-1 flex-none;
}
.principal :nth-of-type(1) {
  @apply bg-green-300 text-green-500 mr-4;
}
.principal :nth-of-type(2) {
  @apply bg-blue-300 text-blue-500 mr-3;
}
.principal :nth-of-type(3) {
  @apply bg-yellow-200 text-yellow-400 mr-2;
}
.principal :nth-of-type(4) {
  @apply bg-yellow-300 text-yellow-500 mr-1;
}
.principal :nth-of-type(5) {
  @apply bg-red-300 text-red-500;
}

.subseccion:hover .principal {
  width: 33%;
}

h1::last-word {
  @apply font-bold;
}
</style>
