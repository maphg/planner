<template>
  <div v-if="array.telegram === 'SI'" class="w-full mb-2">
    <h1 class="text-xs font-bold italic">Vinculación con Telegram</h1>
    <img
      src="https://cdn.dribbble.com/users/14038/screenshots/3292894/loading2done.gif"
      class="w-52 mx-auto"
      alt=""
    />
    <h1 class="text-xl font-bold text-blue-500 mx-auto text-center">
      ¡Vinculado!
    </h1>
  </div>
  <div v-else class="w-full mb-2">
    <h1 class="text-xs font-bold italic">Vinculación con Telegram</h1>
    <img
      src="https://www.maphg.com/america/svg/qr.svg"
      class="w-40 mx-auto"
      alt=""
    />
    <h1 class="instrucciones">
      1) Escanea el codigo QR con la cámara de tu movil
    </h1>
    <h1 class="instrucciones">2) Preciona iniciar en el BOT</h1>
    <h1 class="instrucciones">3) Ingresa a continuacion tu código</h1>
    <input
      type="number"
      name=""
      class="bg-gris-30 w-full px-2 py-1 rounded-lg text-sm"
      placeholder="Ingrese CODIGO"
      v-model="array.telegram"
    />
    <button
      class="
        text-blue-400
        bg-blue-200
        text-xs
        rounded-lg
        w-full
        p-2
        mt-2
        font-bold
      "
      @click="actualizarUsuario(array)"
    >
      VINCULAR
    </button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  props: {
    array: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

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

    return { actualizarUsuario };
  },
};
</script>

<style scoped>
.instrucciones {
  @apply font-bold text-xxs mb-1;
}
</style>
