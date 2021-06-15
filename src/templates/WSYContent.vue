<template>
    <div class="WSYContent">
        <div class="component left">
            <left-buttons></left-buttons>
        </div>
        <div class="component right">
            <router-view>

            </router-view>
        </div>
    </div>
</template>

<script>
//王诗阳专用内容页面
import LeftButtons from "./leftButtons";
export default {
    name: "WSYContent",
    components: {LeftButtons}
}
</script>


<style scoped>
    .WSYContent {
        display: flex;
        width: 80%;
        /*height: 5rem;*/
    }

    .WSYContent > .component {
        border-radius: 0.5rem;
        box-shadow: 0 0 2rem grey;
    }

    .WSYContent > .left {
        flex-grow: 1;
        margin-right: 1rem;
    }

    .WSYContent > .right {
        flex-grow: 12;
        margin-right: 0;
    }
</style>