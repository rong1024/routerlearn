<template>
    <div>
        <p>
            <router-link to="/home/phone">手机</router-link>
            <router-link to="/home/tablet">平板</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          msg: '我是home 组件',
        }
      },
    }
</script>