<template>
    <div ref="callsign"></div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
import { Editor } from './editor';

const ele = useTemplateRef('callsign')

onMounted(() => {
  const editor = new Editor(ele.value as HTMLElement, {});
})

</script>