<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white text-primary">
      <q-separator />
      <q-tabs v-model="tab" align="justify">
        <q-route-tab v-if="store.user" name="menu" icon="restaurant_menu" to="/menu" />
        <q-route-tab v-if="store.user" name="list" icon="list" to="/list" />
        <q-route-tab name="settings" icon="settings" to="/settings" />
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
