<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Gadip Mercantiles 3 </q-toolbar-title>

        <div>
          <q-btn
            outline
            style="color: black"
            label="Regresar"
            @click="myFunction"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

export default defineComponent({
  name: 'SecondLayout',
  methods: {
    myFunction() {
      //Agrega la funcion que deseas ejecutar
      console.log('¡Haz echo click en el boton ');
      this.$router.go(-1);
      to: 'Login';
    },
  },
});
</script>
