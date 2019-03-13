<template>
    <div class="post container">
        <h1>All Posts</h1>
        <div class="row">
            <template v-for="post in posts">
                <div class="col-md-12">
                    <div class="post-card">
                        <div class="post-title">
                            <router-link :to="{name: 'show-post', params: {id: post.id}}">{{ post.title }}</router-link>
                            | {{ post.user.name }} | {{ post.created_at }}
                        </div>
                        <div class="post-body">{{ post.description }}</div>
                    </div>
                    <hr/>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                posts: []
            }
        },
        methods: {
            fetchPost() {
                this.$axios.get('http://127.0.0.1:8001/api/post').then((response) => {
                    if (response.data.code == 200) {
                        this.posts = response.data.data
                    }
                })
            }
        },
        mounted() {
            this.fetchPost()
        }
    }
</script>

<style scoped>
    .post-card {
        padding-rop: 10px;
    }
</style>