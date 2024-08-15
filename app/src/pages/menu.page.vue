<template>
  <q-page>
    <q-list v-if="dishes.length > 0" class="q-pt-md">
      <q-item class="flex justify-center">
                <q-input v-model="search" standout rounded dense clearable placeholder="Mmmmhhhes Schompf" style="width: 60%; min-width: 300px;">
                    <template v-slot:prepend>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </q-item>

            <q-expansion-item expand-icon-toggle switch-toggle-side
                v-for="dish in dishes" :key="dish.dish.id" :content-inset-level="1">
                    <template v-slot:header>
                        <q-item-section>
                            <q-item-label>{{ dish.dish.title }}</q-item-label>
                            <q-item-label caption>Übliche Menge: {{ dish.dish.standardAmount }}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <div class="text-grey-8 q-gutter-xs flex items-center">
                                <q-btn color="red" :disable="dish.amount == 0" flat round icon="remove"
                                    @click="onClickDecrementDish(dish)" />
                                <span>{{ dish.amount }}</span>
                                <q-btn color="green" flat round icon="add" @click="onClickIncrementDish(dish)" />
                            </div>
                        </q-item-section>
                    </template>
                    <q-card>
                        <q-card-section>
                            <span class="text-bold">Zutaten pro Portion:</span> {{ dish.dish.ingredients.join(', ') }}
                        </q-card-section>
                        <!-- <q-card-section v-if="dish.dish.subdishes.length > 0">
                            <span class="text-bold">Sub-dishes:</span> {{ dish.dish.subdishes.map(subdish => `${dishes.find(dish => dish.dish._id == subdish.dish).dish.title} (Menge: ${subdish.amountFactor})`).join(', ') }}
                        </q-card-section> -->
                        <q-separator inset />
                    </q-card>
                </q-expansion-item>
    </q-list>

    <q-page-sticky position="bottom" :offset="[0, 18]" style="z-index: 6000;">
      <q-btn fab icon="checklist" color="accent" @click="onClickChooseIngredients" :disabled="disableChooseIngredients" />
    </q-page-sticky>

    <ChooseIngredientsDialog
        v-model:model-value="chooseIngredientsDialog.show"
        :dishes="chooseIngredientsDialog.dishes"
        @add="onClickAdd"
    />
  </q-page>
</template>

<script setup>
defineOptions({ name: 'ListPage' });

import { ref, onMounted, computed, inject } from 'vue'
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar'
import dayjs from 'dayjs';
import _ from 'lodash';
import ChooseIngredientsDialog from 'components/menu/chooseIngredients.dialog.component.vue';
import { useStore } from 'src/stores/store';

const $q = useQuasar()
const $notify = inject('notify');
const $router = useRouter();
const showCompletedItems = ref(false);
const disableChooseIngredients = ref(true);
const search = ref('');
const chooseIngredientsDialog = ref({ show: false, dishes: [] });
const store = useStore();

const dishes = ref([]);

const onClickIncrementDish = function (dish) {
    dish.amount = (dish.amount == 0) ? dish.dish.standardAmount : dish.amount + 1;
    disableChooseIngredients.value = false;
}

const onClickDecrementDish = function (dish) {
    dish.amount -= 1;

    disableChooseIngredients.value = _.sum(dishes.value.map(dish => dish.amount)) == 0;
}

const onClickChooseIngredients = () => {
    chooseIngredientsDialog.value.dishes = _.cloneDeep(dishes.value.filter(dish => dish.amount > 0));

    chooseIngredientsDialog.value.dishes.forEach(dish => {
        dish.dish.ingredients.forEach(ingredient => {
            ingredient.amount.value = ingredient.amount.unit != null ? ingredient.amount.value * dish.amount : ingredient.amount.value;
        });

        // dish.dish.subdishes?.forEach(subdish => {
        //     subdish.dish = dishes.value.find(dish => dish.dish._id == subdish.dish).dish;
        //     subdish.dish.ingredients.forEach(ingredient => {
        //         dish.dish.ingredients.push({ name: ingredient.name, amount: { value: ingredient.amount.value * dish.amount * subdish.amountFactor, unit: ingredient.amount.unit }, optional: ingredient.optional || subdish.optional, subdish: subdish.dish.title });
        //     });
        // });
    });

    chooseIngredientsDialog.value.show = true;
};

const onClickAdd = () => {
  if (true) {
        $notify(`Ingredients added to list!`, { actions: [{ label: 'Show', color: 'white', handler: () => { $router.push(`/list`); } }] });
    }

    dishes.value.forEach(dish => dish.amount = 0);
    disableChooseIngredients.value = true;
};

onMounted(async () => {
  await store.fetchMenu();
  dishes.value = store.menu.dishes.map(dish => ({ dish: dish, amount: 0 })).sort((a, b) => a.dish.title.localeCompare(b.dish.title));

})
</script>
