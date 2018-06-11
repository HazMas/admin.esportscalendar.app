import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'

import { AUTH, LOGOUT } from '../types/actions'
import { SET_USER } from '../types/mutations'

const state = {

}

const actions = {
  [AUTH] ({commit}, {email, password}) {
    return firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(({user: {uid, displayName, email, photoURL}}) => {
        const user = {
          id: uid,
          name: displayName,
          email: email,
          photoUrl: photoURL
        }

        commit(SET_USER, {user})

        return Promise.resolve({user})
      })
  },
  [LOGOUT] ({commit}) {
    return firebase.auth().signOut().then(() => {
      commit(SET_USER, {user: null})

      return Promise.resolve({user: null})
    })
  }
}

const mutations = {
  [SET_USER] (state, {user}) {
    Vue.set(state, 'currentUser', user)
  }
}

const getters = {
  isUserLogged (state) {
    return !!state.currentUser
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
