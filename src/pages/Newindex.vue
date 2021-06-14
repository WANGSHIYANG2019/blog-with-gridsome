<template>
    <div id="app">
        <div class="layer1">
            <section class="header">
                <WSYHeader></WSYHeader>
            </section>
            <div class="middleBar">
                <WSYMiddleBar></WSYMiddleBar>
            </div>
            <section class="mainContent"></section>
            <section class="footer"></section>
        </div>
        <div class="layer2">

        </div>
    </div>
</template>

<page-query>
query {
    general: allStrapiGeneral {
        edges {
            node {
                title, subtitle
            }
        }
    }
}
</page-query>

<script>
import WSYHeader from "../templates/WSYHeader";
import WSYMiddleBar from "../templates/WSYMiddleBar";
export default {
    name: "newIndexPage",
    components: {WSYMiddleBar, WSYHeader}
}
</script>

<style scoped>
    #app {
        width: 100%;
        height: 100%;
        position: relative;
    }

    #app > .layer1 {
        position: absolute;
        left: 0; top: 0;
        width: 100%; height: 100%;
    }

    #app > .layer1 > * {
        width: 100%;
        display: flex;
    }

    #app > .layer1 > .header {
        height: 20rem;
    }

    #app > .layer1 > .middleBar {
        height: 0;
        align-items: center;
        justify-content: center;
        overflow: visible;
    }
</style>