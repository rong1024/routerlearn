<template>
    <div>
        <h1>User</h1>
        <div>我是user组件，动态部分是{{dynamicSegment}}</div>
    </div>
</template>
<script>
 /* eslint-disable */
    export default {
        computed: {
            dynamicSegment () {
                return this.$route.params.id
            }
        }
    }

</script>
