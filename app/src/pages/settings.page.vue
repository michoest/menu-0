<template>
  <q-page>
    <q-list class="q-pt-md">
      <q-item-label header>Backend</q-item-label>
      <q-item>
        <q-item-section>
          <q-input v-model="store.api" placeholder="API URL">
            <template v-slot:append>
              <q-btn round dense flat icon="check" @click="checkAPI" />
            </template>
          </q-input>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
defineOptions({ name: 'SettingsPage' });

import dayjs from 'dayjs';
import { buildDate } from 'boot/build-info'
import { useStore } from 'src/stores/store';

const store = useStore();

const checkAPI = () => {
  
};

</script>
