<template>
  <div
    class="
      w-full
      mb-2
      flex
      items-center
      justify-start
      pr-1
      py-1
      rounded-lg
      overflow-hidden
      text-xs
    "
    :class="{
      'line-through italic text-green-500': array.status === 'SOLUCIONADO',
    }"
  >
    <div class="p-1 cursor-pointer">
      <transition enter-active-class="rotate-in-center">
        <svg
          @click="actualizarTodo(array, 'SOLUCIONADO')"
          v-if="array.status === 'PENDIENTE'"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        </svg>
      </transition>

      <transition enter-active-class="rotate-in-center">
        <svg
          @click="actualizarTodo(array, 'PENDIENTE')"
          v-if="array.status === 'SOLUCIONADO'"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 11 12 14 22 4"></polyline>
          <path
            d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
          ></path>
        </svg>
      </transition>
    </div>
    <div
      @click="truncado = !truncado"
      class="w-per flex-none mr-1 h-auto cursor-pointer py-1"
    >
      <h1 :class="{ 'truncate text-justify': truncado }">{{ array.todo }}</h1>
    </div>
    <div class="-ml-1 cursor-pointer" @click="eliminarTodo(array)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  props: {
    array: { type: Object },
  },

  setup(props) {
    const store = useStore();
    const truncado = ref(true);

    const actualizarTodo = (array) => {
      store.dispatch("getTodo", {
        idDestino: localStorage.getItem("idDestino"),
        idUsuario: localStorage.getItem("usuario"),
        action: "actualizarTodo",
        idTodo: array.idTodo,
        todo: array.todo,
        status: array.status,
      });
    };

    const eliminarTodo = (array) => {
      store.dispatch("getTodo", {
        idDestino: localStorage.getItem("idDestino"),
        idUsuario: localStorage.getItem("usuario"),
        action: "eliminarTodo",
        idTodo: array.idTodo,
      });
    };

    return { truncado, actualizarTodo, eliminarTodo };
  },
};
</script>

<style scoped>
.w-per {
  width: 16rem;
}
.rotate-in-center {
  -webkit-animation: rotate-in-center 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: rotate-in-center 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-out-bck-center {
  -webkit-animation: slide-out-bck-center 0.5s
    cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: slide-out-bck-center 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
}

@-webkit-keyframes slide-out-bck-center {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(-1100px);
    transform: translateZ(-1100px);
    opacity: 0;
  }
}
@keyframes slide-out-bck-center {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(-1100px);
    transform: translateZ(-1100px);
    opacity: 0;
  }
}

@-webkit-keyframes rotate-in-center {
  0% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}
@keyframes rotate-in-center {
  0% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}
</style>
