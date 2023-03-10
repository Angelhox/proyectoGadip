<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Gadip Mercantiles </q-toolbar-title>

        <div>
          <q-btn
            outline
            style="color: black"
            label="Iniciar Sesion"
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
      this.$router.push('Login');
      console.log('¡Haz echo clickThirdLayout en el boton ');
    },
  },
});
</script>
