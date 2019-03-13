<template>
    <div class="User">
        <h1>User List</h1>

        <ul>
            <li v-for="user in users">
                <router-link :to="{ name: 'user-show', params: {id: user.id,name: user.name}}">{{ user.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                users: [
                    {id: '1', name: 'Mongkul'},
                    {id: '2', name: 'Vathana'},
                    {id: '3', name: 'Sok Sokha'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>