<template>
    <div class="tw-z-50 tw-fixed sm:tw-bottom-0 sm:tw-inset-x-0
        tw-px-4 tw-pb-4 tw-flex tw-items-center justify-center
        lg:tw-inset-0 xl:tw-inset-0 md:tw-inset-0">

        <div class="tw-bg-white tw-rounded-xl
            tw-shadow-xl tw-transform tw-transition-all
            tw-ml-auto tw-mr-auto tw-w-7/12 tw-overflow-hidden tw-p-4" >
            <!-- <div class="tw-w-full tw-min-w-sm tw-text-xl" >
                {{title}}
            </div> -->
            <div class="tw-bg-white tw-w-full tw-flex tw-flex-wrap">
                <div class="tw-w-full tw-flex sm:tw-text-center
                    tw-items-center tw-justify-center">
                    <div class="tw-text-xl">
                        <strong>{{subtitle}}</strong>
                    </div>
                    <div class="tw-text-right tw-ml-auto">
                        <button class="" @click="close()">
                            <div class="tw-text-xl tw-text-gray-600 tw-pt-1 sm:tw-pt-1">
                                <i class="fas fa-times"></i>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="tw-w-full tw-bg-white">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasePopUpComponent',
  props: {
    title: String,
    subtitle: String,
  },
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    close() {
      this.$emit('closePopUp', false);
    },
  },
});
</script>
