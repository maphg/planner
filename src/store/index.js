import { createStore } from 'vuex'

export default createStore({

  state: {

    // ARRAYS PARA ALMACENAR DATOS FETCH
    arraySecciones: [],
    arrayUsuario: [],
    arrayDestino: [],
    arraySeccionUsuario: [],

  },

  mutations: {

    //MUTACION DE ARRAY DE arraySecciones
    setSecciones(state, payload) {
      state.arraySecciones = payload;
    },

    //MUTACION DE ARRAY DE arrayDestino
    setDestino(state, payload) {
      state.arrayDestino = payload;
    },

    //MUTACION DE ARRAY DE arrayUsuario
    setUsuario(state, payload) {
      state.arrayUsuario = payload;
    },

    //MUTACION DE ARRAY DE arraySeccionUsuario
    setSeccionUsuario(state, payload) {
      state.arraySeccionUsuario = payload;
    },

  },

  actions: {

    // OBTIENE LAS SECCIONES CON SUS PENDIENTES Y USUARIOS ASIGNADOS
    async getSecciones({ commit }, array) {
      try {
        const Swal = require("sweetalert2");

        const res = await fetch(`../apis/planner.php`, {
          method: "POST",
          body: JSON.stringify(array),
        });
        const data = await res.json();
        if (data.secciones) {
          commit("setSecciones", data.secciones);
        } else {
          Swal.fire(
            'AVISO',
            'No Tienes Acceso a las Secciones',
            'question',
          )
        }
      } catch (error) {
        console.log(error);
      }
    },

    // OBTIENE INFORMACIÓN DE USUARIO
    async getUsuario({ commit }, array) {
      try {
        const res = await fetch(`../apis/planner.php`, {
          method: "POST",
          body: JSON.stringify(array),
        });
        const data = await res.json();
        commit("setUsuario", data.usuario);
        commit("setDestino", data.destino);
        commit("setSeccionUsuario", data.seccionUsuario);
      } catch (error) {
        console.log(error);
      }
    },

  },

  modules: {
  }
})
