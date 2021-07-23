import { createStore } from 'vuex'

export default createStore({

  state: {

    // ARRAYS PARA ALMACENAR DATOS FETCH
    arraySecciones: [],
    arrayUsuario: [],
    arrayDestino: [],
    arraySeccionUsuario: [],
    arrayTodo: [],
    arrayIncidencias: [],
    arrayPreventivos: [],
    arrayProyectos: [],
    arrayFavoritos: [],

  },

  mutations: {

    //MUTACIÓN DE ARRAY DE arraySecciones
    setSecciones(state, payload) {
      state.arraySecciones = payload;
    },

    //MUTACIÓN DE ARRAY DE arrayDestino
    setDestino(state, payload) {
      state.arrayDestino = payload;
    },

    //MUTACIÓN DE ARRAY DE arrayUsuario
    setUsuario(state, payload) {
      state.arrayUsuario = payload;
    },

    //MUTACIÓN DE ARRAY DE arraySeccionUsuario
    setSeccionUsuario(state, payload) {
      state.arraySeccionUsuario = payload;
    },

    //MUTACIÓN DE ARRAY DE arraySeccionUsuario
    setTodo(state, payload) {
      state.arrayTodo = payload;
    },

    //MUTACIÓN DE ARRAY DE arrayIncidencias
    setIncidencias(state, payload) {
      state.arrayIncidencias = payload;
    },

    //MUTACIÓN DE ARRAY DE arrayPreventivos
    setPreventivos(state, payload) {
      state.arrayPreventivos = payload;
    },

    //MUTACIÓN DE ARRAY DE arrayProyectos
    setProyectos(state, payload) {
      state.arrayProyectos = payload;
    },

    //MUTACIÓN DE ARRAY DE arrayProyectos
    setFavoritos(state, payload) {
      state.arrayFavoritos = payload;
    },

  },

  actions: {

    // OBTIENE LAS SECCIONES CON SUS PENDIENTES Y USUARIOS ASIGNADOS
    async getSecciones({ commit }, array) {
      try {
        const res = await fetch(`../apis/planner.php`, {
          method: "POST",
          body: JSON.stringify(array),
        });
        const data = await res.json();

        if (data.secciones) {
          console.log(data.secciones);
          commit("setSecciones", data.secciones);
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
        commit("setTodo", data.todo);
        commit("setIncidencias", data.incidencias);
        commit("setPreventivos", data.preventivos);
        commit("setProyectos", data.tareasproyectos);
        commit("setFavoritos", data.favoritos);
      } catch (error) {
        console.log(error);
      }
    },

    // OBTIENE INFORMACIÓN DE USUARIO
    async getTodo({ commit }, array) {
      try {
        const res = await fetch(`../apis/planner.php`, {
          method: "POST",
          body: JSON.stringify(array),
        });
        const data = await res.json();
        if (data.resp == "SUCCESS") {
          commit("setTodo", data.todo);
        }
      } catch (error) {
        console.log(error);
      }
    },

    // OBTIENE INFORMACIÓN DE USUARIO
    async actualizarUsuario({ commit }, array) {
      try {
        const res = await fetch(`../apis/planner.php`, {
          method: "POST",
          body: JSON.stringify(array),
        });
        const data = await res.json();
      } catch (error) {
        console.log(error);
      }
    },

    // SUBE FOTO DE USUARIO
    async subirFotoUsuario({ commit }, array) {
      try {
        const res = await fetch(`../apis/adjuntos.php`, {
          method: 'POST',
          body: array,
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    // APLICA ACCIÓN Y OBTIENE NUEVOS RESULTADO DE FAVORITOS
    async getFavoritos({ commit }, array) {
      try {
        const res = await fetch(`../apis/planner.php`, {
          method: "POST",
          body: JSON.stringify(array),
        });
        const data = await res.json();
        if (data.resp == "SUCCESS") {
          commit("setFavoritos", data.favoritos);
        }
      } catch (error) {
        console.log(error);
      }
    },

  },

  modules: {
  }
})
