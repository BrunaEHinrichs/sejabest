<template>
<div class="tw-w-full tw-px-14 sm:tw-px-4 tw-py-3 tw-shadow-lg">
  <div class="tw-w-full md:tw-hidden xs:tw-hidden sm:tw-hidden">
    <div class="tw-w-full tw-flex  ">
      <div class="tw-w-2/12 tw-pr-14">
        <img src="/sejabest/logo.svg" class="tw-w-full"/>
      </div>
      <div class="tw-w-10/12 tw-flex tw-text-main tw-justify-end tw-mt-auto tw-mb-auto">
        <div class="tw-px-8 borderMain textMain">
          <a href="https://seja.best/">Início</a>
        </div>
        <div class="tw-px-8 borderMain textMain">
          <a href="https://seja.best/sobre/">Sobre Nós</a>
        </div>
        <div class="tw-px-8 borderMain textMain">
          <a href="https://seja.best/como-funciona/">Como Funciona</a>
        </div>
        <div class="tw-px-8 borderMain textMain">
          <router-link to="/" class="tw-w-full " >Home Equity</router-link>
        </div>
        <div class="tw-px-8 borderMain textMain">
          <a href="https://seja.best/portal/">Portal</a>
        </div>
        <div class="tw-ml-4 tw-px-8 tw-py-1 fundo  tw-text-white tw-rounded-xl
         tw-transition tw-duration-500 tw-ease-in-out tw-transform
         hover:tw-translate-y-1 hover:tw-scale-105">
          <router-link to="/simulator" class="tw-w-full " >
            Simular aqui
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="tw-w-full tw-flex  tw-justify-between">
    <div class=" lg:tw-hidden xl:tw-hidden ">
        <button type="button" @click="showMenu()"
        class="tw-block tw-text-main tw-transition tw-duration-500 tw-ease-in-out tw-transform
         hover:tw-translate-y-1 hover:tw-scale-105">
            <img src="/icons/menu.svg" class="tw-w-6 tw-h-auto"/>
        </button>

    </div>
    <div class="lg:tw-hidden xl:tw-hidden  tw-flex tw-items-center ">
         <img src="/sejabest/logo.svg" class="tw-w-auto tw-h-8 "/>
    </div>
  </div>
    <div class="tw-w-full"></div>
     <div v-if="showMenuCard"
     class="lg:tw-hidden tw-shadow tw-bg-gray-100 tw-px-4 tw-w-64 tw-h-full tw-max-w-sm
     tw-overflow-hidden tw-shadow-2xl tw-absolute tw-left-0 tw-top-0 tw-right-0
     tw-overflow-auto tw-z-30">
        <ul class="tw-text-main" >
            <li class="tw-pt-3">
                <button type="button" @click="showMenu()"
                class="">
                    <img src="/icons/cancel.png" class="tw-w-4 tw-h-auto"/>
                </button>
            </li>
            <li class="tw-pt-3">
                <div class="tw-flex tw-w-full tw-flex-shrink-0 ">
                    <img src="/sejabest/logo.svg"
                     class="tw-mr-auto tw-w-9/12 tw-ml-auto" />
                </div>
            </li>
            <li class="tw-mt-6" @click="showMenu()">
              <div class="tw-px-8 borderMain textMain">
                <a href="https://seja.best/">Início</a>
              </div>
            </li>
            <li class="tw-pt-3" @click="showMenu()">
              <div class="tw-px-8 borderMain textMain">
                <a href="https://seja.best/sobre/">Sobre Nós</a>
              </div>
            </li>
            <li class="tw-pt-3" @click="showMenu()">
              <div class="tw-px-8 borderMain textMain">
                <a href="https://seja.best/como-funciona/">Como Funciona</a>
              </div>
            </li>
            <li class="tw-pt-3" @click="showMenu()">
              <div class="tw-px-8 borderMain textMain">
                <router-link to="/" class="tw-w-full " >Home Equity</router-link>
              </div>
            </li>
            <li class="tw-pt-3" @click="showMenu()">
              <div class="tw-px-8 borderMain textMain">
                <a href="https://seja.best/portal/">Portal</a>
              </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseTopBar',
  data() {
    return {
      showMenuCard: false,
      show: false,
    };
  },
  methods: {
    showMenu() {
      if (this.showMenuCard === false) {
        this.showMenuCard = true;
      } else {
        this.showMenuCard = false;
      }
    },
  },
  components: {
  },
});
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
    }
}
</style>
