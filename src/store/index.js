import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // put variables and collections here
        adresse: '',
        matiere: '',
        error: true,
        message: ''
    },
    mutations: {
        // put sychronous functions for changing state e.g. add, edit, delete
        // setAdresse: (state, value) => (
        //     state.adresse = value
        // ),
        //
        // setMatiere: (state, value) => (
        //     state.matiere = value
        // ),
        //
        // setStatutMessage: (state, value) => (
        //     state.error = value
        // ),
        //
        // setMessage: (state, value) => (
        //     state.message = value
        // ),
    },
    actions: {
        // put asynchronous functions that can call one or more mutation functions
    }
})