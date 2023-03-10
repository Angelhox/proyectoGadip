<template>
  <q-page class="flex">
    <div><span class="text-h1">Nuevo Usuario</span></div>

    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 300px">
        <q-toggle v-model="dense" label="Dense QInput" />

        <q-input
          filled
          v-model="ph"
          label="Nombres del Usuario"
          hint="Este campo es obligatorio"
          :dense="dense"
        />

        <q-input
          filled
          v-model="ph"
          label="Apellidos del Usuario"
          hint="Este campo es obligatorio"
          :dense="dense"
        />

        <q-input
          filled
          v-model="ph"
          label="Cedula de Identificacion"
          type="number"
          hint="Este campo es obligatorio"
          :dense="dense"
        />

        <q-input
          filled
          v-model="ph"
          type="email"
          label="Correo electrónico"
          hint="Este campo es obligatorio"
          :dense="dense"
        />
        <div class="q-pa-md bg-grey-10 text-white">
          <div class="q-gutter-md">
            <q-date
              v-model="date"
              color="orange"
              text-color="black"
              dark
              bordered
            />
          </div>
        </div>

        <q-input
          filled
          v-model="date"
          type="email"
          label="Fecha de Registro"
          hint="Este campo es obligatorio"
          :dense="dense"
        />

        <q-input
          filled
          square
          v-model="text"
          hint="With perfect square borders"
          :dense="dense"
        />

        <q-input filled v-model="text" :dense="dense">
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>

        <q-input filled v-model="text" :dense="dense">
          <template v-slot:append>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
            </q-avatar>
          </template>
        </q-input>

        <q-input
          filled
          bottom-slots
          v-model="text"
          label="Label"
          counter
          :dense="dense"
        >
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>

          <template v-slot:hint> Field hint </template>
        </q-input>

        <q-input
          filled
          bottom-slots
          v-model="text"
          label="Label"
          counter
          maxlength="12"
          :dense="dense"
        >
          <template v-slot:before>
            <q-icon name="flight_takeoff" />
          </template>

          <template v-slot:append>
            <q-icon
              v-if="text !== ''"
              name="close"
              @click="text = ''"
              class="cursor-pointer"
            />
            <q-icon name="search" />
          </template>

          <template v-slot:hint> Field hint </template>
        </q-input>

        <q-input
          filled
          bottom-slots
          v-model="text"
          label="Label"
          counter
          maxlength="12"
          :dense="dense"
        >
          <template v-slot:before>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </template>

          <template v-slot:append>
            <q-icon
              v-if="text !== ''"
              name="close"
              @click="text = ''"
              class="cursor-pointer"
            />
            <q-icon name="schedule" />
          </template>

          <template v-slot:hint> Field hint </template>

          <template v-slot:after>
            <q-btn round dense flat icon="send" />
          </template>
        </q-input>

        <q-input
          filled
          bottom-slots
          v-model="text"
          label="Label"
          counter
          maxlength="12"
          :dense="dense"
        >
          <template v-slot:before>
            <q-icon name="event" />
          </template>

          <template v-slot:hint> Field hint </template>

          <template v-slot:append>
            <q-btn round dense flat icon="add" />
          </template>
        </q-input>

        <q-input filled v-model="text" hint="Disable" :dense="dense" disable />

        <q-input
          filled
          v-model="text"
          hint="Readonly"
          :dense="dense"
          readonly
        />

        <q-input
          filled
          v-model="text"
          hint="Disable and readonly"
          :dense="dense"
          disable
          readonly
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NuevoUsuario',
  setup() {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(false),
      date: ref('2019/02/01'),
    };
  },
});
</script>
