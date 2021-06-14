<template>
    <div class="singleDropDown" @click="click">
        <p :class="on ? textOn : textOff">{{name}}</p>
        <transition name="dropdown">
            <ul class="dropdownMenu" v-show="on">
                <li v-for="text in submenus">{{text}}</li>
            </ul>
        </transition>
    </div>
</template>

<script>
export default {
    name: "DropdownUtils",
    props: {
        name: {
            type: String, default: '默认标题'
        },
        submenus: {
            type: Array, default() {
                return ['我的爱', '请全部带走'];
            }
        }
    },
    data() {
        return {
            on: false,
            textOn: 'textOn',
            textOff: 'textOff',
            dropdownOn: 'dropdownOn',
            dropdownOff: 'dropdownOff'
        }
    },
    methods: {
        click() {
            this.on = !this.on;
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: "glyphIcons";
    src: url("../assets/fonts/glyphicons-halflings-regular.woff2") format("woff2"),
    url("../assets/fonts/glyphicons-halflings-regular.woff") format("woff"),
    url("../assets/fonts/glyphicons-halflings-regular.ttf") format("truetype"),
    url("../assets/fonts/glyphicons-halflings-regular.eot") format("embedded-opentype"),
    url("../assets/fonts/glyphicons-halflings-regular.svg") format("svg");
}

    * {
        user-select: none;
    }

    * p {
        margin: 0; padding: 0;
    }

    .singleDropDown {
        width: 100%; height: 100%;
        overflow: visible;
    }

    .singleDropDown > .text,
    .singleDropDown > .textOn,
    .singleDropDown > .textOff {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .singleDropDown > .text:after,
    .singleDropDown > .textOff:after,
    .singleDropDown > .textOn:after {
        font-family: glyphIcons;
        content: "\e114";
        font-size: 0.5rem;
        margin-left: 0.5rem;
        transition: all .3s;
    }

    .singleDropDown > .textOn:after {
        transform: rotate(180deg);
    }

    .singleDropDown > .text:after,
    .singleDropDown > .textOff:after {
        transform: rotate(0deg);
    }

    .singleDropDown > .dropdownMenu {
        background: white;
        border-radius: 0.5rem;
        border: 0.05rem solid lightgrey;
        box-shadow: 0 0 2rem grey;
        list-style-type: none;
        margin: 0;
        padding: 0.5rem 1rem;
    }

    .dropdown-enter,
    .dropdown-leave-to {
        opacity: 0;
    }
    
    .dropdown-enter-active,
    .dropdown-leave-active {
        transition: all .3s;
    }
</style>