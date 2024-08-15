<template>
  <q-page>
    <q-list v-if="categories.length > 0" class="q-pt-md">
        <template v-for="category, index in categories" :key="index">
            <q-separator v-if="index > 0" inset />
            <q-item-label header>{{ category.title || '(Keine Kategorie)' }}</q-item-label>
            <q-item v-for="item in category.items" :key="item.id">
              <q-item-section side top>
                <q-btn v-if="item.status == 'open'" size="12px" flat dense round icon="radio_button_unchecked"
                    @click="onClickCompleteItem(item)" />
                <q-btn v-else-if="['almost-completed', 'completed'].includes(item.status)" size="12px" flat dense
                    round icon="done" @click="onClickOpenItem(item)" />
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  {{ item.name }}
                  <q-badge v-if="item.due?.date" class="q-mx-sm" color="accent">{{ dayjs(item.due.date).format('YYYY-MM-DD') }}</q-badge>
                </q-item-label>
                <q-item-label caption>{{ item.notes }}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <div class="q-gutter-md">
                    <q-btn size="12px" flat dense round icon="more_horiz" @click.stop="onClickItemActions(item)" />
                </div>
            </q-item-section>
            </q-item>
        </template>
    </q-list>
    <div v-else class="flex justify-center">
        <q-icon color="positive" name="done" size="104px" class="q-pa-xl" />
    </div>

    <q-page-sticky position="bottom" :offset="[0, 18]" style="z-index: 6000;">
      <q-btn fab icon="add" color="accent" @click="onClickAddItem" />
    </q-page-sticky>

    <q-page-sticky position="bottom-right" :offset="[26, 26]">
        <q-fab color="primary" icon="more_vert" direction="up" padding="sm">
            <q-fab-action @click="onClickDeleteCompletedItems" icon="remove_done" external-label label-position="left" label="Delete completed items" />
            <q-fab-action @click="onClickClearList" :disable="store.list.length == 0" icon="delete_sweep" external-label label-position="left" label="Clear all" />
            <q-fab-action @click="onClickToggleShowCompletedItems" :icon="showCompletedItems ? 'visibility_off' : 'visibility'" external-label label-position="left" :label="showCompletedItems ? 'Hide completed items' : 'Show completed items'"/>
        </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script setup>
defineOptions({ name: 'ListPage' });

import { ref, onMounted, computed, inject } from 'vue'
import { useQuasar } from 'quasar'
import dayjs from 'dayjs';
import _ from 'lodash';
import { useStore } from 'src/stores/store';

const $q = useQuasar()
const $notify = inject('notify');
const showCompletedItems = ref(true);
const store = useStore();

const awaitTimeout = delay => new Promise(resolve => setTimeout(resolve, delay));

const categories = computed(() => {
    if (store.list.length == 0) {
        return [];
    }
    else {
      const categoryTitles = _.uniq(store.list.map(item => item.category)).sort();
      return categoryTitles.map(category => ({ title: category, items: store.list.filter(item => (item.category == category) && (['open', 'almost-completed'].includes(item.status) || showCompletedItems.value)) }))
          .filter(category => category.items.length > 0);
    }
});

const onClickAddItem = () => {

};

const onClickDeleteCompletedItems = async () => {

};

const onClickClearList = async () => {

};

const onClickToggleShowCompletedItems = async (show) => {
    showCompletedItems.value = !showCompletedItems.value;
};

const onClickCompleteItem = async (item) => {
    item.status = 'almost-completed';
    await awaitTimeout(500);

    await store.completeItem(item.id);

    $notify(`${item.name} completed!`, { actions: [{ label: 'Undo', color: 'white', handler: () => { store.openItem(item.id); } }] });
};

const onClickOpenItem = async (item) => {
  await store.openItem(item.id);

  $notify(`${item.name} re-opened!`, { actions: [{ label: 'Undo', color: 'white', handler: () => { store.completeItem(item.id); } }] });
};

const onClickEditItem = async (item) => {

};

const onClickItemActions = async (item) => {

};


onMounted(async () => {
  await store.fetchList()
})
</script>
