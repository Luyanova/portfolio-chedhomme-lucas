<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
        <path d="M78 78L4 4M4 4H78M4 4V78" stroke="#0AF29D" stroke-width="7"/>
    </svg>
</template>

<script setup lang="ts">
defineProps({
    x: {
        type: Number,
        default: 0
    },
    y: {
        type: Number,
        default: 0
    }
})
</script>
