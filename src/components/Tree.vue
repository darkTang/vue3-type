<template></template>


<script lang="ts" setup>
import { PropType } from 'vue';
import { TreeType } from '../types/props';


defineProps({
  list: {
    type: Object as PropType<TreeType[]>,
    default: () => { [] }
  }
})


</script>

<style lang="less" scoped>
li {
  list-style-type: none;
  width: 200px;
}
</style>
