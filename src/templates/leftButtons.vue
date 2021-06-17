<template>
<ul class="leftButtons">
    <slot name="random">
        <router-link class="iconAndTitle" v-for="menu in menuLists" :to="menu.link">
            <p class="icon">{{ menu.content }}</p><p>{{menu.title}}</p>
        </router-link>
    </slot>
</ul>
</template>

<script>
export default {
    name: "leftButtons",
    data() {
        return {
            menuLists: [{title: '最新动态', content: '\ue800', link: '/new-index/friends/'},
                {title: '社交圈', content: '\ue801', link: '/new-index/updates/'},
                {title: '博客列表', content: '\ue802', link: '/'},
                {title: '开源项目', content: '\ue802', link: '/'},
                {title: "使用帮助", content: '\ue804', link: '/'},
                {title: "README.md", content: '\uf1ea', link: '/'}]
        }
    },
    methods: {
        //单击左边菜单任意一个项目
        clickSingleMenu() {
            this.$emit("leftClick", "CCTV");
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: fontello;
    src: url("../assets/fonts/fontello/fontello.woff2") format("woff2"),
    url("../assets/fonts/fontello/fontello.woff") format("woff"),
    url("../assets/fonts/fontello/fontello.ttf") format("truetype"),
    url("../assets/fonts/fontello/fontello.eot") format("embedded-opentype"),
    url("../assets/fonts/fontello/fontello.svg") format("svg");
}

    .leftButtons {
        display: flex;
        user-select: none;
        flex-direction: column;
        list-style-type: none;
        justify-content: center;
        margin: 0;
        padding: 1rem;
        box-sizing: border-box;
        white-space: nowrap;
    }

    .leftButtons > .iconAndTitle {
        display: flex;
        transition: all .3s;
    }

    .leftButtons > .iconAndTitle:hover {
        background: #ebf4fe;
    }

    .leftButtons > .iconAndTitle > p {
        margin: 0.2rem;
    }

    .leftButtons > .iconAndTitle > .icon {
        font-family: fontello;
    }
</style>