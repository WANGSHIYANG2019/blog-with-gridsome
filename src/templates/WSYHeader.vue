<template>
    <div class="WSYHeader">
        <p class="title">{{titleAndSubtitle.title}}</p>
        <p class="subtitle">{{titleAndSubtitle.subtitle}}</p>
        <div class="buttons">
            <button>Github主页</button>
            <button>博客源码</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "WSYHeader",
    computed: {
        titleAndSubtitle() {
            if (this.$page.general.edges) {
                return this.$page.general.edges[0].node;
            } else {
                return {title: '总标题', subtitle: '副标题'}
            }
        }
    }
}
</script>

<style scoped>
    * p {
        user-select: none;
    }

    .WSYHeader {
        width: 100%;
        height: 100%;
        padding: 3rem 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background: linear-gradient(45deg, #288ef6, #f82e2f);
    }

    .WSYHeader > p {
        color: white;
        margin: 0;
        font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .WSYHeader > .title {
        font-size: 4rem;
    }

    .WSYHeader > .subtitle {
        opacity: 0.7;
    }

    .WSYHeader > .buttons {
        display: flex;
    }

    .WSYHeader > .buttons > button {
        border: 0.08rem solid white;
        background: rgba(127, 127, 127, 0.2);
        border-radius: 0.5rem;
        color: white; display: flex;
        align-items: center; justify-content: center;
        padding: 0.6rem;
        opacity: 0.7;
        transition: all .3s;
        margin-right: 0.5rem;
    }

    .WSYHeader > .buttons > button:last-child {
        margin: 0;
    }

    .WSYHeader > .buttons > button:hover {
        opacity: 1;
    }
</style>