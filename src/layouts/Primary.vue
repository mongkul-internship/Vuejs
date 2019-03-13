<template>
    <div class="primary">
        <navbar></navbar>
        <router-view/>
    </div>
</template>

<script>
    import Navbar from "../partials/Navbar";
    export default {
        name: "Primary",
        components:{
            Navbar
        }
    }
</script>

<style scoped>

</style>