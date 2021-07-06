<template>
    <div>
        Hello
        <router-link to="/subpage">Link</router-link>
        <router-view></router-view>
    </div>
</template>

<style scoped>
    a {
        font-weight: bold;
    }
</style>