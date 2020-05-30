<template>
    <van-dropdown-menu>
        <van-dropdown-item @change="onValueChange(value)" v-model="value" :options="option" />
    </van-dropdown-menu>
</template>

<script>
    export default {
        props: ['option'],
        data() {
            return {
                value: 0
            }
        },
        methods: {
            onValueChange(value) {
                this.$emit('changeValue', value)
            }
        }
    }
</script>