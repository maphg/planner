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
      <div class="flex flex-row items-center">
        <div
          class="
            w-10
            h-10
            rounded-tl-xl rounded-br-xl
            flex
            items-center
            justify-center
            leading-none
            bg-cover bg-center
          "
          :style="{ 'background-image': `url(${info.foto}` }"
        ></div>
        <div
          class="
            fw-500
            self-center
            flex flex-col flex-wrap
            text-sm
            px-2
            leading-tight
            justify-center
            items-start
          "
        >
          <h1>{{ info.nombre }}</h1>
          <h1 class="text-xxs leading-tight text-gray-400">
            {{ info.cargo }}
          </h1>
        </div>
      </div>
      <!-- icono -->

      <!-- Botones -->
      <div class="flex-row justify-end items-center flex">
        <div
          v-if="tabshow !== '1'"
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
            <path d="M19 12H6M12 5l-7 7 7 7" />
          </svg>
        </div>

        <div
          v-if="tabshow === '1'"
          class="boton"
          :class="{ 'bg-gris-30 text-bluedemon-400': tabshow === 'ajustes' }"
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
            <circle cx="12" cy="12" r="3"></circle>
            <path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
            ></path>
          </svg>
        </div>

        <div class="boton" @click="$emit('accion')">
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
        <div class="subseccion" @click="tabshow = '2'">
          <div class="flex flex-row justify-start items-center">
            <div class="dot"></div>
            <h1 class="fw-400">Incidencias</h1>
          </div>
          <div class="principal">
            <h1 v-if="info.seguimiento > 0">{{ info.seguimiento }}</h1>
            <h1 v-if="info.alerta > 0">{{ info.alerta }}</h1>
            <h1 v-if="info.alarma > 0">{{ info.alarma }}</h1>
            <h1 v-if="info.urgencia > 0">{{ info.urgencia }}</h1>
            <h1 v-if="info.emergencia > 0">{{ info.emergencia }}</h1>
          </div>
        </div>

        <div class="subseccion" @click="tabshow = '3'">
          <div class="flex flex-row justify-start items-center">
            <div class="dot"></div>
            <h1 class="fw-400">Preventivos</h1>
          </div>
          <div class="flex justify-end">
            <h1
              class="
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
                bg-indigo-200
                text-indigo-500
              "
              v-if="info.totalPreventivos > 0"
            >
              {{ info.totalPreventivos }}
            </h1>
          </div>
        </div>

        <div class="subseccion" @click="tabshow = '4'">
          <div class="flex flex-row justify-start items-center">
            <div class="dot"></div>
            <h1 class="fw-400">Tareas de proyectos</h1>
          </div>
          <div class="flex justify-end">
            <h1
              class="
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
                bg-indigo-200
                text-indigo-500
              "
              v-if="info.totalTareasproyectos > 0"
            >
              {{ info.totalTareasproyectos }}
            </h1>
          </div>
        </div>

        <div class="subseccion" @click="tabshow = 'todo'">
          <div class="flex flex-row justify-start items-center">
            <div class="dot"></div>
            <h1 class="fw-400">
              To do <span class="font-bold text-xxs">(Personal)</span>
            </h1>
          </div>
          <div class="flex justify-end">
            <h1
              class="
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
                bg-indigo-200
                text-indigo-500
              "
              v-if="info.totalTodos > 0"
            >
              {{ info.totalTodos }}
            </h1>
          </div>
        </div>

        <div class="subseccion" @click="tabshow = 'favoritos'">
          <div class="flex flex-row justify-start items-center">
            <div class="dot"></div>
            <h1 class="fw-400">Favoritos</h1>
          </div>
          <div class="flex justify-end">
            <h1
              class="
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
                bg-indigo-200
                text-indigo-500
              "
              v-if="info.totalFavoritos > 0"
            >
              {{ info.totalFavoritos }}
            </h1>
          </div>
        </div>
      </div>
    </transition>
    <!-- Subsecciones -->

    <!-- Incidencias -->
    <transition enter-active-class="animate__animated animate__slideInRight">
      <div v-if="tabshow === '2'" class="pestaña">
        <div class="flex flex-col items-center justify-center w-full pt-1">
          <!-- FILAS INCIDENCIAS -->
          <div>
            <h1>Mis Incidencias</h1>
          </div>
          <div
            class="
              w-full
              flex flex-row
              items-center
              justify-start
              text-xxs
              pt-2
              border-b-2 border-gris-30
            "
          >
            <div
              class="pestaña2"
              :class="{ pestaña2activa: pestaña2 === 'pendientes' }"
              @click="pestaña2 = 'pendientes'"
            >
              <h1>Pendientes</h1>
            </div>
            <div
              class="pestaña2"
              :class="{ pestaña2activa: pestaña2 === 'sinprogramar' }"
              @click="pestaña2 = 'sinprogramar'"
            >
              <h1>Sin programar</h1>
            </div>
            <div
              class="pestaña2"
              :class="{ pestaña2activa: pestaña2 === 'solucionadas' }"
              @click="pestaña2 = 'solucionadas'"
            >
              <h1>Solucionadas</h1>
            </div>
          </div>

          <transition
            enter-active-class="animate__animated animate__slideInRight"
          >
            <div
              v-if="pestaña2 === 'pendientes'"
              class="flex flex-col items-center justify-center w-full pt-1"
            >
              <Incidenciafila
                v-for="(x, y) in info.incidencias"
                :key="y"
                :array="x.pendientes"
              />
            </div>
          </transition>

          <transition
            enter-active-class="animate__animated animate__slideInRight"
          >
            <div
              v-if="pestaña2 === 'sinprogramar'"
              class="flex flex-col items-center justify-center w-full pt-1"
            >
              <Incidenciafila
                v-for="(x, y) in info.incidencias"
                :key="y"
                :array="x.sinprogramar"
              />
            </div>
          </transition>

          <transition
            enter-active-class="animate__animated animate__slideInRight"
          >
            <div
              v-if="pestaña2 === 'solucionadas'"
              class="flex flex-col items-center justify-center w-full pt-1"
            >
              <Incidenciafila
                v-for="(x, y) in info.incidencias"
                :key="y"
                :array="x.solucionadas"
              />
            </div>
          </transition>
        </div>
      </div>
    </transition>
    <!-- Incidencias -->

    <!-- Preventivos -->
    <transition enter-active-class="animate__animated animate__slideInRight">
      <div v-if="tabshow === '3'" class="pestaña">
        <div class="flex flex-col items-center justify-center w-full pt-1">
          <!-- FILAS INCIDENCIAS -->
          <div>
            <h1>OT Preventivas</h1>
          </div>
          <div
            class="
              w-full
              flex flex-row
              items-center
              justify-start
              text-xxs
              pt-2
              border-b-2 border-gris-30
            "
          >
            <div
              class="pestaña2"
              :class="{ pestaña2activa: pestaña2 === 'pendientes' }"
              @click="pestaña2 = 'pendientes'"
            >
              <h1>En proceso</h1>
            </div>

            <div
              class="pestaña2"
              :class="{ pestaña2activa: pestaña2 === 'sinprogramar' }"
              @click="pestaña2 = 'sinprogramar'"
            >
              <h1>Sin programar</h1>
            </div>

            <!-- <div
              class="pestaña2"
              :class="{ pestaña2activa: pestaña2 === 'estasemana' }"
              @click="pestaña2 = 'estasemana'"
            >
              <h1>Esta semana</h1>
            </div>
            <div
              class="pestaña2"
              :class="{ pestaña2activa: pestaña2 === 'proximos' }"
              @click="pestaña2 = 'proximos'"
            >
              <h1>Proximos</h1>
            </div> -->
          </div>

          <transition
            enter-active-class="animate__animated animate__slideInRight"
          >
            <div
              v-if="pestaña2 === 'pendientes'"
              class="flex flex-col items-center justify-center w-full pt-1"
            >
              <Incidenciafila
                v-for="(x, y) in info.preventivos"
                :key="y"
                :array="x.pendientes"
              />
            </div>
          </transition>

          <transition
            enter-active-class="animate__animated animate__slideInRight"
          >
            <div
              v-if="pestaña2 === 'sinprogramar'"
              class="flex flex-col items-center justify-center w-full pt-1"
            >
              <Incidenciafila
                v-for="(x, y) in info.preventivos"
                :key="y"
                :array="x.sinprogramar"
              />
            </div>
          </transition>

          <transition
            enter-active-class="animate__animated animate__slideInRight"
          >
            <div
              v-if="pestaña2 === 'estasemana'"
              class="flex flex-col items-center justify-center w-full pt-1"
            >
              <Incidenciafila
                v-for="(x, y) in info.preventivos"
                :key="y"
                :array="x.estasemana"
              />
            </div>
          </transition>

          <transition
            enter-active-class="animate__animated animate__slideInRight"
          >
            <div
              v-if="pestaña2 === 'proximos'"
              class="flex flex-col items-center justify-center w-full pt-1"
            >
              <Incidenciafila
                v-for="(x, y) in info.preventivos"
                :key="y"
                :array="x.proximos"
              />
            </div>
          </transition>
        </div>
      </div>
    </transition>
    <!-- Preventivos -->

    <!-- TAREAS DE PROYECTOS -->
    <transition enter-active-class="animate__animated animate__slideInRight">
      <div v-if="tabshow === '4'" class="pestaña">
        <div class="flex flex-col items-center justify-center w-full pt-1">
          <!-- FILAS INCIDENCIAS -->
          <div>
            <h1>Tareas de proyectos</h1>
          </div>
          <div
            class="
              w-full
              flex flex-row
              items-center
              justify-start
              text-xxs
              pt-2
              border-b-2 border-gris-30
            "
          >
            <div
              class="pestaña2"
              :class="{ pestaña2activa: pestaña2 === 'pendientes' }"
              @click="pestaña2 = 'pendientes'"
            >
              <h1>En proceso</h1>
            </div>

            <div
              class="pestaña2"
              :class="{ pestaña2activa: pestaña2 === 'sinprogramar' }"
              @click="pestaña2 = 'sinprogramar'"
            >
              <h1>Sin programar</h1>
            </div>

            <div
              class="pestaña2"
              :class="{ pestaña2activa: pestaña2 === 'solucionadas' }"
              @click="pestaña2 = 'solucionadas'"
            >
              <h1>Solucionadas</h1>
            </div>
          </div>

          <transition
            enter-active-class="animate__animated animate__slideInRight"
          >
            <div
              v-if="pestaña2 === 'pendientes'"
              class="flex flex-col items-center justify-center w-full pt-1"
            >
              <Incidenciafila
                v-for="(x, y) in info.tareasproyectos"
                :key="y"
                :array="x.enproceso"
              />
            </div>
          </transition>

          <transition
            enter-active-class="animate__animated animate__slideInRight"
          >
            <div
              v-if="pestaña2 === 'sinprogramar'"
              class="flex flex-col items-center justify-center w-full pt-1"
            >
              <Incidenciafila
                v-for="(x, y) in info.tareasproyectos"
                :key="y"
                :array="x.sinprogramar"
              />
            </div>
          </transition>

          <transition
            enter-active-class="animate__animated animate__slideInRight"
          >
            <div
              v-if="pestaña2 === 'solucionadas'"
              class="flex flex-col items-center justify-center w-full pt-1"
            >
              <Incidenciafila
                v-for="(x, y) in info.tareasproyectos"
                :key="y"
                :array="x.solucionadas"
              />
            </div>
          </transition>
        </div>
      </div>
    </transition>
    <!-- TAREAS DE PROYECTOS -->

    <!-- TO DO -->
    <transition enter-active-class="animate__animated animate__slideInRight">
      <div v-if="tabshow === 'todo'" class="pestaña">
        <div class="flex flex-col items-center justify-center w-full pt-1">
          <!-- FILAS INCIDENCIAS -->
          <div>
            <h1>TO DO</h1>
          </div>
        </div>
      </div>
    </transition>
    <!-- TO DO -->

    <!-- FAVORITOS -->
    <transition enter-active-class="animate__animated animate__slideInRight">
      <div v-if="tabshow === 'favoritos'" class="pestaña">
        <div class="flex flex-col items-center justify-center w-full pt-1">
          <!-- FILAS INCIDENCIAS -->
          <div>
            <h1>Favoritos</h1>
          </div>
        </div>
      </div>
    </transition>
    <!-- FAVORITOS -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Notificaciones from "./Notificaciones.vue";
import Iconocol from "./Iconocol.vue";
import Incidenciafila from "./Incidenciafila.vue";
export default {
  components: { Notificaciones, Iconocol, Incidenciafila },
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const tabshow = ref("1");
    const pestaña2 = ref("pendientes");
    return { tabshow, pestaña2 };
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

.pestaña2 {
  @apply font-semibold px-2 py-1 rounded-t-lg cursor-pointer;
}
.pestaña2activa {
  @apply font-semibold px-2 py-1 rounded-t-lg bg-gris-30 text-bluedemon-400;
}
</style>
