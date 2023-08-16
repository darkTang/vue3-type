<template>
  <video autoplay muted
    src="https://sf16-sg-default.akamaized.net/obj/tos-alisg-v-0000/o04GGbRywAvbnEdoluZDAVCgLDeeQLe6GXTFmT" ref="video"
    controls></video>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const video = ref<HTMLVideoElement>()

onMounted(() => {

  video.value!.onloadedmetadata = function () {
    console.log(video.value!.duration);
    console.log(video.value!.buffered.start(0));
    console.log(video.value!.buffered.end(0));
  }

})


</script>