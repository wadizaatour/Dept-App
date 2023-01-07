import { defineStore } from 'pinia'
import {  fetchClient } from '../services/fetchers';
import {Client}  from '../models/client';
import { ref } from "vue";

export const useClientStore = defineStore('clients', {
  state: () => {
    return { clients: [] }
  },
  getters: {
    getClients(state){
        return state.clients
      }
  },
  actions: {
    async loadClients() {
        const response = await fetchClient()
        this.clients = response 
        console.log(this.clients, 'clients')
    }
     
  },
})
 