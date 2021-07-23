<template>
  <div class="gridpadre md:gridpadre">
    <!-- WIDGETS PARTE SUPERIOR -->
    <div class="widgets scrollx">
      <!-- SELECTOR DE SECCIONES SUPERIOR -->
      <div
        class="
          flex flex-wrap
          md:hidden
          flex-row
          items-center
          md:justify-evenly
          justify-start
          w-full
          flex-none
          snapy
        "
      >
        <transition
          enter-active-class="animate__animated animate__bounceIn"
          v-for="x in arraySeccionUsuario"
          :key="x"
          @click="infoUsuario()"
        >
          <div
            v-if="usuario === false"
            @click="usuario = !usuario"
            role="button"
            class="bg-cover bg-center iconosec"
            :style="{
              'background-image': `url(${x.foto})`,
            }"
          ></div>
        </transition>

        <transition
          enter-active-class="animate__animated animate__bounceIn"
          v-for="x in arraySecciones"
          :key="x"
        >
          <div
            v-if="x.toggle === false"
            @click="x.toggle = !x.toggle"
            role="button"
            class="iconosec"
            :class="x.seccion.toLowerCase()"
          >
            <h1>{{ x.seccion }}</h1>
          </div>
        </transition>
      </div>

      <widgetdestino :array="arrayDestino" />
      <widgetactivos :array="arrayDestino" />
      <widgetcalendario :array="arrayDestino" />
    </div>

    <!-- SELECTOR DE SECCIONES LATERAL -->
    <div class="contenedor-columnas scrollx">
      <div
        class="
          pr-4
          hidden
          md:flex
          flex-wrap flex-col
          items-start
          justify-center
        "
      >
        <!-- BOTON USUARIO -->
        <transition
          enter-active-class="animate__animated animate__bounceIn"
          v-for="x in arraySeccionUsuario"
          :key="x"
          @click="infoUsuario()"
        >
          <div
            v-if="usuario === false"
            @click="usuario = !usuario"
            role="button"
            class="
              w-10
              h-10
              rounded-lg
              bg-cover bg-center
              flex
              items-center
              justify-center
              fw-500
              mb-2
            "
            :style="{
              'background-image': `url(${x.foto})`,
            }"
          ></div>
        </transition>

        <!-- BOTON SECCIONES -->
        <transition
          enter-active-class="animate__animated animate__bounceIn"
          v-for="x in arraySecciones"
          :key="x"
        >
          <div
            v-if="x.toggle === false"
            @click="x.toggle = !x.toggle"
            role="button"
            class="
              w-10
              h-10
              rounded-lg
              flex
              items-center
              justify-center
              fw-500
              mb-2
            "
            :class="x.seccion.toLowerCase()"
          >
            <h1>{{ x.seccion }}</h1>
          </div>
        </transition>
      </div>

      <!-- COLUMNAS  -->

      <!-- COLUMNA USUARIOS -->
      <transition
        enter-active-class="swing-in-bottom-bck"
        leave-active-class=""
      >
        <usuariocol
          @accion="usuario = false"
          v-if="usuario === true"
          :array="arrayUsuario"
        ></usuariocol>
      </transition>

      <!-- COLUMNAS SECCIONES -->
      <transition
        enter-active-class="swing-in-bottom-bck"
        leave-active-class=""
        v-for="x in arraySecciones"
        :key="x"
      >
        <columna v-if="x.toggle === true" :array="x" />
      </transition>
    </div>
    <!-- SELECTOR DE SECCIONES LATERAL -->
  </div>
</template>

<script>
// LIBRERIAS VUE
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

//COMPONENTES
import Columna from "../components/Columna.vue";
import Widgetdestino from "../components/Widgetdestino.vue";
import Widgetactivos from "../components/Widgetactivos.vue";
import Usuariocol from "../components/Usuariocol.vue";
import Widgetcalendario from "../components/Widgetcalendario.vue";

export default {
  name: "Home",
  components: {
    Columna,
    Widgetdestino,
    Widgetactivos,
    Usuariocol,
    Widgetcalendario,
  },
  setup() {
    const store = useStore();
    const usuario = ref(true);

    // INICIA ARRAY DE SECCIONES
    onMounted(() => {
      store.dispatch("getUsuario", {
        idDestino: localStorage.getItem("idDestino"),
        idUsuario: localStorage.getItem("usuario"),
        action: "usuario",
      });

      store.dispatch("getSecciones", {
        idDestino: localStorage.getItem("idDestino"),
        idUsuario: localStorage.getItem("usuario"),
        action: "planner",
      });
    });

    const infoUsuario = () => {
      store.dispatch("getUsuario", {
        idDestino: localStorage.getItem("idDestino"),
        idUsuario: localStorage.getItem("usuario"),
        action: "usuario",
      });
    };

    // ARRAY PARA COLUMNA DE PENDIENTES DE USUARIO
    const arrayUsuario = computed(() => {
      return store.state.arrayUsuario;
    });

    // ARRAY INFORMACIÓN DE DESTINO
    const arrayDestino = computed(() => {
      return store.state.arrayDestino;
    });

    // ARRAY PARA LAS SECCIONES
    const arraySecciones = computed(() => {
      return store.state.arraySecciones;
    });

    // ARRAY PARA LAS SECCIONES
    const arraySeccionUsuario = computed(() => {
      return store.state.arraySeccionUsuario;
    });

    //  RETORNA DATOS
    return {
      usuario,
      arraySecciones,
      arrayDestino,
      arrayUsuario,
      arraySeccionUsuario,
      infoUsuario,
    };
  },
};
</script>

<style scoped>
.gridpadre {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 0.13fr 1fr 0.1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @apply bg-gris-30;
  height: 100vh;
  padding-left: 10px;
  padding-right: 10px;
  overflow-x: auto;
}

.widgets {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  @apply w-full row-start-1 flex flex-row justify-start items-center overflow-x-auto px-2 md:px-8;
}

.contenedor-columnas {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  @apply w-full row-start-2 flex flex-row justify-start items-start overflow-x-auto md:px-4 px-2 pb-1;
}

.scrollx {
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scroll-margin-left: 300px;
}

.scrollx::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
.scrolly {
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scroll-margin-left: 300px;
}

.scrolly::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}

.swing-in-bottom-bck {
  -webkit-animation: swing-in-bottom-bck 0.6s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation: swing-in-bottom-bck 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
}
@-webkit-keyframes swing-in-bottom-bck {
  0% {
    -webkit-transform: rotateX(-70deg);
    transform: rotateX(-70deg);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
    opacity: 1;
  }
}
@keyframes swing-in-bottom-bck {
  0% {
    -webkit-transform: rotateX(-70deg);
    transform: rotateX(-70deg);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
    opacity: 1;
  }
}

.tracking-in-expand {
  -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

.text-pop-up-top {
  -webkit-animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
      0 50px 30px rgba(0, 0, 0, 0.3);
  }
}
@keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
      0 50px 30px rgba(0, 0, 0, 0.3);
  }
}

.snapy {
  scroll-snap-align: center;
  overflow-y: hidden;
  overflow-x: hidden;
}

.iconosec {
  @apply flex-none mr-2 md:mr-0 md:w-10 md:h-10 w-6 h-6 md:text-base md:mb-0 mb-2 rounded-lg flex items-center justify-center font-semibold;
  font-size: 0.55rem;
}
</style>
