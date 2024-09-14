<template>
  <q-header class="q-my-sm bg-white text-primary">
    <q-toolbar>
      <q-toolbar-title class="text-center text-weight-bold">
        Settings
      </q-toolbar-title>
    </q-toolbar>
    <q-separator />
  </q-header>

  <q-page>
    <q-list class="q-pt-md">
      <q-item-label header>Backend</q-item-label>
      <q-item>
        <q-item-section>
          <q-input v-model="store.api" placeholder="API URL">
            <template v-slot:append>
              <!-- <q-icon v-if="loading" name="loading" /> -->
              <q-spinner-dots v-if="loading" color="primary" size="sm" />
              <q-btn v-else round dense flat icon="network_check" :color="apiStatus ? 'positive' : 'negative'" @click="checkAPI" />
            </template>
          </q-input>
        </q-item-section>
      </q-item>

      <!-- <q-separator inset spaced="xl" />

      <q-item class="q-pb-lg">
          <q-item-section avatar>
              <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg">
              </q-avatar>
          </q-item-section>

          <q-item-section>
              <q-item-label>{{ user.name.first }} {{ user.name.last }}</q-item-label>
              <q-item-label caption lines="1">{{ user.email }}</q-item-label>
          </q-item-section>

          <q-item-section side>
              <q-btn flat round icon="more_horiz" color="grey" @click="onClickAccountActions" />
          </q-item-section>
      </q-item>
      <q-item>
          <q-item-section>
              <q-btn color="negative" outline @click="onClickSignout">Sign out</q-btn>
          </q-item-section>
      </q-item> -->
      <q-item-label header>Date of last build</q-item-label>
      <q-item>
        <q-item-label>{{ dayjs(buildDate) }}</q-item-label>
      </q-item>

      <q-separator inset spaced="xl" />

      <q-expansion-item label="Advanced" switch-toggle-side>
          <q-btn @click="onClickSendNotification">Send notification</q-btn>
          <q-btn @click="onClickGetLocation">Get location</q-btn>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script setup>
defineOptions({ name: 'SettingsPage' });

import { onMounted, ref } from 'vue';
import dayjs from 'dayjs';
import { buildDate } from 'boot/build-info'
import { useStore } from 'src/stores/store';

const store = useStore();

const loading = ref(true);
const apiStatus = ref(false);

const checkAPI = async () => {
  loading.value = true;
  apiStatus.value = await store.checkAPI();
  loading.value = false;
};

const user = {
  name: {
    first: 'Michael',
    last: 'Oesterle'
  },
  email: 'mail@michoest.com'
}

const onClickAccountActions = async () => {

};

const onClickSignout = async () => {

};

onMounted(async () => {
  await checkAPI();
  loading.value = false;
});

const onClickSendNotification = async () => {
  alert(1);
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }
  else {
    alert(Notification.permission);
  }
};

const onClickGetLocation = () => {
  if ("geolocation" in navigator) {
    alert(1);
    navigator.geolocation.getCurrentPosition.then((position) => {
      alert(2);
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }
};

const onClickTab = () => {

};

defineExpose({ onClickTab });
</script>
