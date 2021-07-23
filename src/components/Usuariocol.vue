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
          :style="{ 'background-image': `url(${array.foto}` }"
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
          <h1>{{ array.nombreCompleto }}</h1>
          <h1 class="text-xxs leading-tight text-gray-400">
            {{ array.cargo }}
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
          :class="{ 'bg-gris-30 text-bluedemon-400': tabshow === '1' }"
          @click="tabshow = 'ajustes'"
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
            <h1 v-if="array.seguimiento > 0">{{ array.seguimiento }}</h1>
            <h1 v-if="array.alerta > 0">{{ array.alerta }}</h1>
            <h1 v-if="array.alarma > 0">{{ array.alarma }}</h1>
            <h1 v-if="array.urgencia > 0">{{ array.urgencia }}</h1>
            <h1 v-if="array.emergencia > 0">{{ array.emergencia }}</h1>
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
              v-if="array.totalPreventivos > 0"
            >
              {{ array.totalPreventivos }}
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
              v-if="array.totalTareasproyectos > 0"
            >
              {{ array.totalTareasproyectos }}
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
              v-if="array.totalTodos > 0"
            >
              {{ array.totalTodos }}
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
              v-if="array.totalFavoritos > 0"
            >
              {{ array.totalFavoritos }}
            </h1>
          </div>
        </div>
      </div>
    </transition>
    <!-- Subsecciones -->

    <!-- ajustes de usuario -->
    <transition enter-active-class="animate__animated animate__slideInRight">
      <div v-if="tabshow === 'ajustes'" class="pestaña">
        <div class="flex flex-col items-center justify-center w-full pt-1">
          <!-- FILAS INCIDENCIAS -->
          <div
            class="
              italic
              font-bold
              flex
              items-center
              justify-center
              text-sm
              mb-4
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mr-2 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"
              />
              <circle cx="12" cy="10" r="3" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <h1>Ajustes Personales</h1>
          </div>
          <div class="w-full flex flex-col items-center justify-start pb-2">
            <div class="w-full mb-2 flex flex-col justify-center items-center">
              <img
                class="w-32 mx-auto rounded-full"
                :src="array.foto"
                alt="Avatar Usuario"
              />
              <button
                class="
                  w-full
                  mt-2
                  text-xs
                  bg-yellow-200
                  text-yellow-500
                  p-2
                  rounded-lg
                  font-bold
                  relative
                "
                :disabled="editarDatos"
              >
                <input
                  id="file"
                  type="file"
                  @change="subirFotoUsuario()"
                  class="absolute left-0 opacity-0"
                  accept="image/*"
                />
                Subir Imagen!
              </button>
            </div>
            <div class="w-full mb-2">
              <h1 class="text-xs font-bold italic">Nombre</h1>
              <input
                type="text"
                v-model="array.nombre"
                class="
                  bg-gris-30
                  w-full
                  px-2
                  py-1
                  rounded-lg
                  text-sm
                  outline-none
                  focus:ring focus:ring-yellow-200
                "
                :disabled="editarDatos"
              />
            </div>
            <div class="w-full mb-2">
              <h1 class="text-xs font-bold italic">Apellido</h1>
              <input
                type="text"
                v-model="array.apellido"
                class="
                  bg-gris-30
                  w-full
                  px-2
                  py-1
                  rounded-lg
                  text-sm
                  outline-none
                  focus:ring focus:ring-yellow-200
                "
                :disabled="editarDatos"
              />
            </div>
            <div class="w-full mb-2">
              <h1 class="text-xs font-bold italic">Email</h1>
              <input
                type="email"
                v-model="array.correo"
                class="
                  bg-gris-30
                  w-full
                  px-2
                  py-1
                  rounded-lg
                  text-sm
                  outline-none
                  focus:ring focus:ring-yellow-200
                "
                :disabled="editarDatos"
              />
            </div>
            <div class="w-full mb-2">
              <h1 class="text-xs font-bold italic">Telefono</h1>
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                v-model="array.telefono"
                max-length="10"
                class="
                  bg-gris-30
                  w-full
                  px-2
                  py-1
                  rounded-lg
                  text-sm
                  outline-none
                  focus:ring focus:ring-yellow-200
                "
                :disabled="editarDatos"
              />
            </div>
            <div class="w-full mb-2">
              <button
                class="
                  bg-yellow-200
                  text-yellow-500 text-xs
                  rounded-lg
                  w-full
                  p-2
                  mt-2
                  font-bold
                "
                v-if="editarDatos == true"
                @click="editarDatos = !editarDatos"
              >
                Editar Datos
              </button>

              <button
                class="
                  text-green-400
                  bg-green-200
                  text-xs
                  rounded-lg
                  w-full
                  p-2
                  mt-2
                  font-bold
                "
                v-if="editarDatos == false"
                @click="actualizarUsuario(array)"
              >
                Guardar Cambios
              </button>
            </div>
            <Telegram :array="array" />
          </div>
        </div>
      </div>
    </transition>
    <!-- ajustes de usuario -->

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
              <Ficha
                v-for="(x, y) in arrayIncidencias.pendientes"
                :key="y"
                :array="x"
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
              <Ficha
                v-for="(x, y) in arrayIncidencias.sinprogramar"
                :key="y"
                :array="x"
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
              <Ficha
                v-for="(x, y) in arrayIncidencias.solucionadas"
                :key="y"
                :array="x"
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
          </div>

          <transition
            enter-active-class="animate__animated animate__slideInRight"
          >
            <div
              v-if="pestaña2 === 'pendientes'"
              class="flex flex-col items-center justify-center w-full pt-1"
            >
              <Ficha
                v-for="(x, y) in arrayPreventivos.pendientes"
                :key="y"
                :array="x"
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
              <Ficha
                v-for="(x, y) in arrayPreventivos.sinprogramar"
                :key="y"
                :array="x"
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
              <Ficha
                v-for="(x, y) in arrayProyectos.enproceso"
                :key="y"
                :array="x"
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
              <Ficha
                v-for="(x, y) in arrayProyectos.sinprogramar"
                :key="y"
                :array="x"
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
                v-for="(x, y) in array.tareasproyectos"
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
          <div
            class="
              italic
              font-bold
              flex
              items-center
              justify-center
              text-sm
              mb-4
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mr-2 text-green-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h1>TO DO</h1>
          </div>

          <div class="w-full flex items-center justify-between flex-row mb-2">
            <input
              type="text"
              placeholder="Añadir Tarea"
              class="
                px-2
                py-2
                rounded-l
                bg-gris-30
                text-xs
                uppercade
                w-full
                focus:outline-none
              "
              v-model="todo"
            />
            <button
              class="
                px-2
                py-2
                rounded-r
                bg-bluedemon-200
                text-bluedemon-500 text-xs
                focus:outline-none
              "
              @click="agregarTodo()"
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
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>

          <div class="w-full flex flex-col items-center justify-start">
            <h1
              class="text-xs font-bold italic text-left text-gray-500"
              v-if="arrayTodo.PENDIENTE.length"
            >
              Pendiente
            </h1>

            <Todo v-for="(x, y) in arrayTodo.PENDIENTE" :key="y" :array="x" />

            <h1
              class="text-xs font-bold italic text-left text-gray-500"
              v-if="arrayTodo.SOLUCIONADO.length"
            >
              Solucionado
            </h1>

            <Todo v-for="(x, y) in arrayTodo.SOLUCIONADO" :key="y" :array="x" />
          </div>
        </div>
      </div>
    </transition>
    <!-- TO DO -->

    <!-- FAVORITOS -->
    <transition enter-active-class="animate__animated animate__slideInRight">
      <div v-if="tabshow === 'favoritos'" class="pestaña relative">
        <div
          class="
            italic
            font-bold
            flex
            items-center
            justify-center
            text-sm
            pb-4
            bg-white
            w-80
            fixed
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 mr-2 text-yellow-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            ></polygon>
          </svg>
          <h1>Favoritos</h1>
        </div>
        <div class="flex flex-col items-center justify-center w-full pt-12">
          <Ficha v-for="(x, y) in arrayFavoritos" :key="y" :array="x" />
        </div>
      </div>
    </transition>
    <!-- FAVORITOS -->
  </div>
</template>

<script>
import { ref, computed } from "@vue/reactivity";
import { useStore } from "vuex";

import Notificaciones from "./Notificaciones.vue";
import Iconocol from "./Iconocol.vue";
import Incidenciafila from "./Incidenciafila.vue";
import Todo from "./Todo.vue";
import Telegram from "./Telegram.vue";
import Ficha from "./Ficha.vue";
export default {
  components: {
    Notificaciones,
    Iconocol,
    Incidenciafila,
    Todo,
    Telegram,
    Ficha,
  },
  props: {
    array: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const Swal = require("sweetalert2");

    const tabshow = ref("1");
    const pestaña2 = ref("pendientes");
    const editarDatos = ref(true);
    const todo = ref("");

    // ARRAY PARA TODO DE USUARIO
    const arrayTodo = computed(() => {
      return store.state.arrayTodo;
    });

    // ARRAY PARA TODO DE USUARIO
    const arrayIncidencias = computed(() => {
      return store.state.arrayIncidencias;
    });

    // ARRAY PARA TODO DE USUARIO
    const arrayPreventivos = computed(() => {
      return store.state.arrayPreventivos;
    });

    // ARRAY PARA TODO DE USUARIO
    const arrayProyectos = computed(() => {
      return store.state.arrayProyectos;
    });

    // ARRAY PARA TODO DE USUARIO
    const arrayFavoritos = computed(() => {
      return store.state.arrayFavoritos;
    });

    // AGREGA TAREA (TO DO)
    const agregarTodo = () => {
      if (todo.value.length) {
        store.dispatch("getTodo", {
          idDestino: localStorage.getItem("idDestino"),
          idUsuario: localStorage.getItem("usuario"),
          todo: todo.value,
          action: "agregarTodo",
        });
        todo.value = "";
      }
    };

    // ACTUALIZA DATOS DE USUARIO
    const actualizarUsuario = (array) => {
      store.dispatch("actualizarUsuario", {
        idDestino: localStorage.getItem("idDestino"),
        idUsuario: localStorage.getItem("usuario"),
        idUsuario: array.idUsuario,
        nombre: array.nombre,
        apellido: array.apellido,
        correo: array.correo,
        telefono: array.telefono,
        telegram: array.telegram,
        action: "actualizarUsuario",
      });
    };

    // SUBE FOTO DE USUARIO
    const subirFotoUsuario = (x) => {
      console.log(document.getElementById("file").files[0]);
      const formData = new FormData();
      const file = event.target.files[0];

      formData.append("username", "abc123");
      formData.append("avatar", event.target.files[0]);

      if (
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/gif" ||
        file.type === "image/jpg"
      ) {
        store.dispatch("subirFotoUsuario", { formData });
      } else {
        Swal.fire("AVISO", "Adjunto No Permitido", "question");
      }
    };

    return {
      tabshow,
      pestaña2,
      arrayTodo,
      editarDatos,
      agregarTodo,
      actualizarUsuario,
      todo,
      subirFotoUsuario,
      arrayIncidencias,
      arrayPreventivos,
      arrayProyectos,
      arrayFavoritos,
    };
  },
};
</script>

<style scoped>
div {
  scroll-behavior: smooth;
  transition: transform;
}

.columnaplanner {
  @apply bg-white mr-4 md:mr-4 w-full md:w-80 rounded-xl self-start pb-3 text-left relative shadow-md;
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
