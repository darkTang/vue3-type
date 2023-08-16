<template>
  <HelloWorld :zsOtherInfo="zsOtherInfo" />
  <hr>
  <Tree :list="list" />
  <hr>
  <Clappr />
</template>


<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Tree from './components/Tree.vue';
import Clappr from './components/Clappr.vue'
import { TreeType, zsOtherInfoType } from './types/props';

let zsOtherInfo = reactive<zsOtherInfoType>({
  sex: '男',
  hobbies: ['看书', '游泳', '敲代码']
})

let list = reactive<TreeType[]>([]);

onMounted(() => {
  fetch('/list.json')
    .then((res) => res.json())
    .then((data) => {
      Object.assign(list, data);
    });
});
</script>


<style lang="less" scoped></style>