<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <input type="checkbox">
      {{ item.label }}
    </li>
  </ul>
  <button @click="add">+2</button>
  <el-button type="primary">点击</el-button>
</template>


<script lang="ts" setup>
import { getCurrentInstance, inject, onMounted } from 'vue';
import { TreeType } from '../types/props.ts';


// list还是响应式数据
const list = inject<TreeType[]>('list')!
const addCount = inject<() => void>('addCount')!
// 无类型提示写法
// const emit = defineEmits(['change', 'update'])

// 基于类型
const emit = defineEmits<{
  (e: 'addCount2', num: number): void
  (e: 'addCount3'): void
}>()



const add = () => {
  emit('addCount2', 2)
}

onMounted(() => {
  const a = getCurrentInstance()
  console.log(a);
  addCount()
})



</script>

<style lang="less" scoped>
li {
  list-style-type: none;
}
</style>