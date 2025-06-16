<template>
    <h2>Photos</h2>
    <div class="content">
        <PhotoItem name="P1050262" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PhotoItem from '@/components/PhotoItem.vue';

onMounted(async () => {
    const json = await fetch('http://localhost:3005/photos');

    console.log(json)
})
</script>