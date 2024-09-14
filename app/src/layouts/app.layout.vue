<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view v-slot="{ Component }">
        <component ref="view" :is="Component" />
      </router-view>
    </q-page-container>

    <q-footer class="bg-grey-2 text-primary">
      <q-separator />
      <q-tabs v-model="tab" align="justify">
        <q-route-tab v-if="$store.user" name="menu" icon="restaurant_menu" to="/menu" @click="onClickTab('menu')" />
        <q-route-tab v-if="$store.user" name="list" icon="list" to="/list" @click="onClickTab('list')" />
        <q-route-tab name="vendors" icon="storefront" to="/vendors" @click="onClickTab('vendors')" />
        <q-route-tab name="settings" icon="account_circle" to="/settings" @click="onClickTab('settings')" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
defineOptions({ name: 'AppLayout' });

import { ref } from 'vue'
import { useStore } from 'stores/store'
import { route } from 'quasar/wrappers';

const tab = ref('menu');
const $store = useStore();
const view = ref(null);

const onClickTab = (name) => {
  if (tab.value == name) {
    view.value.onClickTab();
  }
};
</script>
