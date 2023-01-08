import { defineStore } from 'pinia'
import { fetchClient } from '../services/fetchers';
import {Client}  from '../models/client';

export const useClientStore = defineStore('clients', {
  state: () => {
    return { clients: [] as Client[] }
  },
  getters: {
    getClients(state){
        return state.clients
    },
  },
  actions: {
    async loadClients() {
        const response = await fetchClient()
        this.clients = response 
    },
  },
})
 