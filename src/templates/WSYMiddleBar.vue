<template>
    <ul class="middleBar">
        <li v-for="item in menus">
            <DropdownUtils :name="item.title" :submenus="item.submenus">
            </DropdownUtils>
        </li>
    </ul>
</template>

<script>
import DropdownUtils from "./DropdownUtils";
export default {
    name: "WSYMiddleBar",
    components: {DropdownUtils},
    data() {
        return {
            menus: [{
                title: '了解博主',
                submenus: ['github主页', '其他博客']
            }, {
                title: '其他网站',
                submenus: ['segmentfault']
            }]
        }
    }
}
</script>

<style scoped>
    .middleBar {
        width: 80%;
        height: 3.5rem;
        list-style-type: none;
        display: flex;
        background: white;
        border-radius: 0.5rem;
        border: 0.05rem solid lightgrey;
        box-shadow: 0 0 2rem grey;
        margin: 0;
    }

    .middleBar > li {
        width: 10rem;
        height: 100%;
    }
</style>