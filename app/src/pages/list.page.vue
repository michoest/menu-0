<template>
  <q-header class="q-my-sm bg-white text-primary">
    <q-toolbar>
      <q-toolbar-title class="text-center text-weight-bold">
        Shopping List
      </q-toolbar-title>
    </q-toolbar>
    <q-separator />
  </q-header>

  <q-page v-if="store.status == 'loading'" class="flex flex-center">
    <q-spinner-dots color="primary" size="xl" />
  </q-page>

  <q-page v-else :class="{ flex: categories.length == 0, 'flex-center': categories.length == 0 }">
    <q-list v-if="categories.length > 0" class="q-pt-md">
      <template v-for="category, index in categories" :key="index">
        <q-separator v-if="index > 0" inset />
        <q-item-label header>{{ category.title || '(Keine Kategorie)' }}</q-item-label>
        <draggable :data-category="category.title" :list="category.items" item-key="id" group="items" :sort="false"
          @end="onDragEnd" handle=".q-icon">
          <template #item="{ element: item }">
            <q-item :data-id="item.id">
              <q-item-section side top>
                <q-btn v-if="item.status == 'open'" size="12px" flat dense round icon="radio_button_unchecked"
                  @click="onClickCompleteItem(item)" />
                <q-btn v-else-if="['almost-completed', 'completed'].includes(item.status)" size="12px" flat dense round
                  icon="done" @click="onClickOpenItem(item)" />
              </q-item-section>

              <q-item-section @click="onClickEditItem(item)">
                <q-item-label>
                  {{ item.name }}
                  <q-badge v-if="item.due" class="q-mx-sm" color="accent">{{ dayjs(item.due).fromNow() }}</q-badge>
                </q-item-label>
                <q-item-label caption>{{ item.notes }}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="drag_handle" color="grey" />
              </q-item-section>
            </q-item>

          </template>
        </draggable>
      </template>
      <q-item></q-item>
    </q-list>
    <div v-else class="flex justify-center">
      <q-icon color="positive" name="done" size="104px" class="q-pa-xl" />
    </div>

    <q-page-sticky position="bottom" :offset="[0, -28]" style="z-index: 6000;">
      <q-btn fab icon="add" color="accent" @click="onClickAddItem" />
    </q-page-sticky>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab color="primary" icon="more_vert" direction="up" padding="sm">
        <q-fab-action @click="onClickDeleteCompletedItems" icon="remove_done" external-label label-position="left"
          label="Delete completed items" />
        <q-fab-action @click="onClickClearList" :disable="items.length == 0" icon="delete_sweep" external-label
          label-position="left" label="Clear all" />
        <q-fab-action @click="onClickToggleShowCompletedItems"
          :icon="store.list.showCompletedItems ? 'visibility_off' : 'visibility'" external-label label-position="left"
          :label="store.list.showCompletedItems ? 'Hide completed items' : 'Show completed items'" />
      </q-fab>
    </q-page-sticky>

    <AddItemDialog v-model="addItemDialog.show" @add="onClickAddItemDialogAdd" />
    <EditItemDialog v-model="editItemDialog.show" :item="editItemDialog.item" @save="onClickSaveItem" @delete="onClickDeleteItem" />
  </q-page>
</template>

<script setup>
defineOptions({ name: 'ListPage' });

import { ref, onMounted, computed, inject } from 'vue'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import _ from 'lodash';
import draggable from 'vuedraggable'
import { useStore } from 'src/stores/store';
import AddItemDialog from 'src/components/list/addItem.dialog.component.vue';
import EditItemDialog from 'src/components/list/editItem.dialog.component.vue';

const $notify = inject('notify');
const store = useStore();
const addItemDialog = ref({ show: false });
const editItemDialog = ref({ show: false, item: null });

const awaitTimeout = delay => new Promise(resolve => setTimeout(resolve, delay));

const items = computed(() => {
  return store.list.items || [];
})

const categories = computed(() => {
  if (items.value.length == 0) {
    return [];
  }
  else {
    const categoryTitles = _.uniq(items.value.map(item => item.category)).sort();
    return categoryTitles.map(category => ({ fixed: true, title: category, items: items.value.filter(item => (item.category == category) && (['open', 'almost-completed'].includes(item.status) || store.list.showCompletedItems)) }))
      .filter(category => category.items.length > 0);
  }
});

const onClickAddItem = () => {
  addItemDialog.value.show = true;
};

const onClickDeleteCompletedItems = async () => {
  if (await store.deleteCompletedItems()) {
    $notify('Completed items deleted!');
  }
};

const onClickClearList = async () => {
  if (await store.clearList()) {
    $notify('List cleared!');
  }
};

const onClickToggleShowCompletedItems = async (show) => {
  await store.showCompletedItems(!store.list.showCompletedItems);
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
  editItemDialog.value.item = _.cloneDeep(item);
  editItemDialog.value.show = true;
};

const onClickSaveItem = async (item) => {
  await store.saveItem(item);

  $notify(`${item.name} edited!`);
};

const onClickDeleteItem = async (item) => {
  await store.deleteItem(item.id);

  $notify(`${item.name} deleted!`, { actions: [{ label: 'Undo', color: 'white', handler: () => { store.addItem(item); } }] });
};

const onClickAddItemDialogAdd = async (item) => {
  const id = await store.addItem(item);

  $notify(`${item.name} added!`, {
    actions: [
      { label: 'Undo', color: 'white', handler: () => { store.removeItem(id); } }
    ]
  });
};

onMounted(async () => {
  await store.fetchList();
});

const onDragEnd = async (evt) => {
  const item = items.value.find(item => item.id == evt.item.dataset.id);

  if (item.category != evt.to.dataset.category) {
    item.category = evt.to.dataset.category;

    await store.saveItem(item);
    $notify(`${item.name} moved to ${item.category}!`);
  }
}

const onClickTab = () => {
  
};

defineExpose({ onClickTab });
</script>
