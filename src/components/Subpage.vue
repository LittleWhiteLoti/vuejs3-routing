<template>
    <div>Page 2 loaded inside Home so the link is still there</div>
    <test-anchor></test-anchor>
</template>

<script>

import TestAnchor from "@/components/TestAnchor"

export default {
    components: {
        TestAnchor
    },
    setup() {
        
    },
}
</script>

<style scoped>
    a {
        font-size: 24px;
    }
</style>
