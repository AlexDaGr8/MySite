<template>
    {{ name }}
    <img :src="imageUrl" width="100%" />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    name: String,
})

const imageUrl = computed(
    () => {
        const href = new URL(`/src/assets/photos/${props.name}.jpg`, window.location.origin);
        
        return href.href
    }
);
</script>