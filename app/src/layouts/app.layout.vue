<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white text-primary">
      <q-tabs v-model="tab" align="justify">
        <q-route-tab v-if="store.user" name="menu" icon="restaurant_menu" label="Menu" to="/menu" />
        <q-route-tab v-if="store.user" name="list" icon="list" label="List" to="/list" />
        <q-route-tab name="settings" icon="settings" label="Settings" to="/settings" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
defineOptions({ name: 'AppLayout' });

import { ref } from 'vue'
import { useStore } from 'stores/store'

const tab = ref('menu')
const store = useStore()
</script>
