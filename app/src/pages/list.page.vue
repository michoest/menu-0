<template>
  <q-page>
    <h1>List</h1>
    <div>
      <q-list v-if="list.length" separator>
        <q-item v-for="item in list" :key="item.id" clickable v-ripple>
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label caption>{{ item.notes }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-spinner v-else color="primary" size="3em" />
    </div>
  </q-page>
</template>

<script setup>
defineOptions({ name: 'ListPage' });

import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const list = ref([])

const fetchList = async () => {
  try {
    const response = await fetch('https://server.michoest.com/list')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    list.value = await response.json()
  } catch (error) {
    console.error('Error fetching list:', error)
    $q.notify({
      color: 'negative',
      message: 'Failed to load list. Please try again later.',
      icon: 'error'
    })
  }
}

onMounted(() => {
  fetchList()
})
</script>
