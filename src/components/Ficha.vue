<template>
  <div
    @click="truncado = !truncado"
    class="
      w-full
      flex flex-col
      text-xs
      p-2
      rounded-lg
      shadow
      cursor-pointer
      mb-2
      border-gray-300
    "
    :class="{ 'border-2': truncado === false }"
  >
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row items-center justify-start text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-3 h-3 mr-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          :class="[
            array.status == 'PENDIENTE'
              ? 'text-red-500'
              : array.status == 'PROCESO'
              ? 'text-red-500'
              : 'text-green-500',
          ]"
        >
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-3 h-3 mr-1"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          v-if="array.totalComentarios >= 1"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          ></path>
        </svg>
        <h1 class="font-semibold mr-2" v-if="array.totalComentarios >= 1">
          {{ array.totalComentarios }}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-3 h-3 mr-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          v-if="array.totalAdjuntos >= 1"
        >
          <path
            d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
          ></path>
        </svg>
        <h1 class="font-semibold" v-if="array.totalAdjuntos >= 1">
          {{ array.totalAdjuntos }}
        </h1>
      </div>
      <div
        class="px-2 rounded-full font-semibold text-xxs"
        :class="array.tipo.toLowerCase()"
      >
        <h1>{{ array.tipo }}</h1>
      </div>
    </div>
    <div class="text-xxs text-gray-500">
      <h1>{{ array.creadoPor }} {{ array.fechaCreado }}</h1>
    </div>
    <div class="text-justify">
      <p :class="{ truncate: truncado }">
        {{ array.titulo }}
      </p>
    </div>
    <div
      class="text-justify p-2 bg-gris-30 rounded-lg mt-2 mx-2 shadow"
      :class="{ hidden: truncado }"
    >
      <h1 class="font-bold text-center">Último comentario</h1>
      <p>{{ array.comentario }}</p>
      <h1 class="text-xxs text-gray-500 text-right">
        {{ array.comentarioDe }}
      </h1>
    </div>
    <div class="px-2 mt-2" :class="{ hidden: truncado }">
      <button
        class="bg-indigo-200 text-indigo-500 font-semibold py-1 text-xxs"
        :class="[
          array.tipoRegistro == 'FAVORITO'
            ? 'w-1/2 rounded-l'
            : 'w-full rounded',
        ]"
      >
        Ver más
      </button>
      <button
        v-if="array.tipoRegistro === 'FAVORITO'"
        class="bg-yellow-100 text-yellow-600 font-semibold py-1 text-xxs"
        :class="[
          array.tipoRegistro == 'FAVORITO'
            ? 'w-1/2 rounded-r'
            : 'w-full rounded',
        ]"
        @click="elimiarFavorito(array)"
      >
        Quitar de favoritos
      </button>
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
    const truncado = ref(true);
    const store = useStore();

    const elimiarFavorito = (array) => {
      store.dispatch("getFavoritos", {
        idDestino: localStorage.getItem("idDestino"),
        idUsuario: localStorage.getItem("usuario"),
        tipo: array.clasificado,
        idTipo: array.idRegistro,
        action: "elimiarFavorito",
      });
    };

    return { truncado, elimiarFavorito };
  },
};
</script>

<style scoped>
.fila {
  @apply w-full flex flex-row items-center justify-start px-2 py-1 hover:bg-gris-30 rounded-lg text-sm cursor-pointer hover:text-bluedemon-300;
}

.seguimiento {
  @apply bg-green-300 text-green-500;
}
.alarma {
  @apply bg-blue-300 text-blue-500;
}
.alerta {
  @apply bg-yellow-200 text-yellow-400;
}
.emergencia {
  @apply bg-yellow-300 text-yellow-500;
}
.urgencia {
  @apply bg-red-300 text-red-500;
}
.mp {
  @apply bg-gray-700 text-white;
}
.pda {
  @apply bg-indigo-300 text-indigo-500;
}
</style>

