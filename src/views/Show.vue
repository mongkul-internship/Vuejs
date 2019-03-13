<template>
    <div class="Show">
        <h1>{{ $route.params.id }}</h1>
        <h1>{{ $route.params.name }}</h1>
    </div>
</template>

<script>
    export default {
        name: "Show"
    }
</script>

<style scoped>

</style>