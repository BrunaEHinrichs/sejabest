<template>
  <div class="tw-w-full tw-h-screen ">
    <BaseTopbar />
    <router-view/>
    <BaseFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseTopbar from '@/components/base/BaseTopbar.component.vue';
import BaseFooter from '@/components/base/BaseFooter.component.vue';

export default defineComponent({
  name: 'LayoutBase',
  components: {
    BaseTopbar,
    BaseFooter,
  },
  data() {
    return {
      openSidebar: false,
    };
  },
  methods: {
    OCSidebar() {
      this.openSidebar = !this.openSidebar;
    },
  },
});
</script>
