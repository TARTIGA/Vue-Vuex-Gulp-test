//var Vue = require('vue'); // version 1
import Vue from 'vue'
import VueResource from 'vue-resource'
import post from 'vue!.././components/post.vue'

Vue.use(VueResource);
new Vue({
    el: "body",
    components: {
        post: post
    },
    data: {
        endpoint: "https://jsonplaceholder.typicode.com/posts", // два варианта передачи  URL
        posts: []
    },
    computed: {
        resource: function() {
            return this.$resource(this.endpoint) // два варианта передачи  URL
        }
    },
    methods: {
        getAllPosts: function() {
            var options = {
                params: {
                    _start: 10,
                    _limit: 5

                }
            }
            this.$http.get(this.endpoint, options)
                .then(response => { this.posts = response.data },
                    error => {

                    })
        }
    },
    created: function() {
        this.getAllPosts();
    }
})