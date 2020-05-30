<template>
    <van-field
    :v-model="model"
    :name="name"
    :label="label"
    :placeholder="placeholder"/>
</template>

<script>
export default {
    props: ['model','name','label','placeholder']
}
</script>