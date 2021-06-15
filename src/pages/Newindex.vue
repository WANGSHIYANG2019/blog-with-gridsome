<template>
    <div id="app">
        <div class="layer1">
            <section class="header">
                <WSYHeader></WSYHeader>
            </section>
            <div class="middleBar">
                <WSYMiddleBar></WSYMiddleBar>
            </div>
            <section class="mainContent">
                <WSYContent></WSYContent>
            </section>
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
import WSYContent from "../templates/WSYContent";
export default {
    name: "newIndexPage",
    components: {WSYContent, WSYMiddleBar, WSYHeader}
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
        z-index: 0;
    }

    #app > .layer1 > .middleBar {
        height: 0;
        align-items: center;
        justify-content: center;
        overflow: visible;
        z-index: 2;
    }

    #app > .layer1 > .mainContent {
        justify-content: center;
        padding: 5rem 0;
        box-sizing: border-box;
        z-index: 1;
    }
</style>