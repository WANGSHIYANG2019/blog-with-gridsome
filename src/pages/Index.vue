<template>
    <Layout>
        <!-- Page Header -->
        <header class="masthead">
            <div class="overlay"
                 :style="{
                    backgroundImage: `url(http://106.75.63.25:1337${general.cover[0].url})`
                }"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>{{ general.title }}</h1>
                            <span class="subheading">{{general.subtitle}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
                        <g-link :to="`/post/${edge.node.id}`">
                            <h2 class="post-title">
                                {{ edge.node.title }}
                            </h2>
                            <h3 class="post-subtitle">
                                Insert your own subtitle
                            </h3>
                        </g-link>
                        <p class="post-meta">Posted by
                            <a href="#">{{ edge.node.createdBy?edge.node.createdBy.username:'Not set yet' }}</a>
                            on September 24, 2019</p>

                        <p>
                            <span v-for="tag in edge.node.tags" :key="tag.id">
                                <g-link :to="`/tag/${tag.id}`">{{tag.title}}</g-link>
                                &nbsp;&nbsp;
                            </span>
                        </p>
                        <hr>
                    </div>
                    <Pager :info="$page.posts.pageInfo"/>
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
query ($page: Int) {
    posts: allStrapiPost(perPage: 2, page: $page) @paginate {
        pageInfo {
            totalPages
            currentPage
        }
        edges {
            node {
                id title content
                createdBy {
                    id username
                }
                tags {
                    id
                    title
                }
            }
        }
    }

    general: allStrapiGeneral {
        edges {
            node {
                id title subtitle cover {
                    url
                }
            }
        }
    }
}
</page-query>

<script>
import {Pager} from 'gridsome'

export default {
    metaInfo() {
        return {
            title: '欢迎访问我的个人博客'
        }
    },
    name: 'HomePage',
    components: {
        Pager
    },
    computed: {
        general() {
            return this.$page.general.edges[0].node
        }
    },
    mounted() {
        console.log("就这样风雨兼程");
        this.$metaInfo.title = this.general.title;
    }
}
</script>

<style>

</style>
