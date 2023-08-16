<template>
  <h3>{{ title }}</h3>
  <p>{{ userInfo.name }}</p>
  <p>{{ userInfo.age }}</p>
  <p ref="pTag">{{ fullName }}</p>
  <List @addCount2="addCount2" />
  <h3>{{ count }}</h3>
  <button @click="addCount">+1</button>
  <hr>
  <h3>{{ zsOtherInfo.sex }}-{{ zsOtherInfo.hobbies }}</h3>
</template>


<script lang="ts" setup>
import { PropType, computed, onMounted, provide, reactive, ref, watch } from 'vue';
import { TreeType, zsOtherInfoType } from '../types/props';
import List from './List.vue';



let title = ref<string>('测试');
const userInfo = reactive({
  name: 'zs',
  age: 12,
});
let list = reactive<TreeType[]>([]);
// 计算属性返回值为string类型
let fullName = computed<string>(() => {
  return userInfo.name + '-' + userInfo.age;
});
let count = ref<number>(0);

const pTag = ref(null)

defineProps({
  zsOtherInfo: {
    type: Object as PropType<zsOtherInfoType>,
    default: () => ({})
  }
})

provide('list', list)


onMounted(() => {
  fetch('/list.json')
    .then((res) => res.json())
    .then((data) => {
      Object.assign(list, data);
    });
});

watch(count, () => {
  console.log("count变化了");
})

const addCount = () => {
  count.value++
}
provide('addCount', addCount)

const addCount2 = (num: number) => {
  count.value += num
}

defineExpose({
  addCount
})
</script>


<style lang="less" scoped></style>