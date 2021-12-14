<template>
  <div v-if="notification.showMessage"
  class=" tw-z-40 tw-fixed sm:tw-bottom-0 sm:tw-inset-x-0 tw-px-4 tw-pb-4
    tw-flex tw-items-center justify-center lg:tw-inset-0 xl:tw-inset-0 md:tw-inset-0">
    <div class="tw-z-50 tw-p-4 sm:tw-p-2 tw-rounded-xl tw-bg-white tw-shadow-xl
    tw-max-w-md tw-w-full tw-transition-all tw-ml-auto tw-mr-auto sm:tw-w-full tw-overflow-hidden" >
        <div v-if="notification.type != undefined"
        class="tw-w-full tw-mb-4 tw-flex tw-items-center tw-justify-center">
           <div  v-if=" notification.type ==='warning'"
           class="tw-rounded-full " >
              <img src="/icons/warning.svg" class="tw-w-16 tw-h-auto tw-h-auto" >
            </div>
            <div  v-if=" notification.type === 'danger'"
            class="tw-rounded-full" >
              <img src="/icons/danger.svg" class="tw-w-16 tw-h-auto tw-h-auto" >
            </div>
            <div  v-if=" notification.type === 'success'"
            class="tw-rounded-full" >
              <img src="/icons/success.svg" class="tw-w-16 tw-h-auto tw-h-auto" >
            </div>
            <div  v-if=" notification.type === 'info'"
            class="tw-rounded-full" >
              <img src="/icons/info.svg" class="tw-w-16 tw-h-auto tw-h-auto" >
            </div>
        </div>
        <div  class="tw-w-full tw-text-center px-4 tw-items-center tw-justify-center ">
            <p class="tw-text-xl">
              <strong>{{ notification.title }}</strong>
            </p>
            <p>{{ notification.message }} </p>
        </div>
        <div class="tw-py-4">
            <button @click="closeNotification()"
            class="tw-w-full tw-bg-main tw-py-1 tw-rounded-xl tw-text-white tw-transition
            tw-duration-500 tw-ease-in-out tw-transform hover:tw-translate-y-1
            hover:tw-scale-105 hover:tw-bg-white tw-border-1 tw-border-main
            hover:tw-text-main tw-transition tw-duration-500">Ok</button>
        </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, PropType } from 'vue';
import { NotificationInterface } from '@/interfaces/Notification.interface';

export default defineComponent({
  name: 'Notification',
  props: {
    notification: Object as PropType<NotificationInterface>,
  },
  data() {
    return {
      notificationApp: this.notification as NotificationInterface,
    };
  },
  setup() {
    const internalInstance = getCurrentInstance();
    const Instance = internalInstance.appContext.config.globalProperties;
    return { Instance };
  },
  methods: {
    closeNotification():void {
      this.$emit('closeNotification', false);
      // this.Instance.$setNotification(this.notification);
      // this.Instance.$Notification.showMessage = false;
      // console.log(this.Instance.$Notification);
    },
  },
});

</script>

<style>

</style>
