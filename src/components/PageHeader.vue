<template>
    <div class="header">
        <span>{{ heading }}</span>
    </div>
</template>

<script>
export default {
    name: "PageHeader",
    props: {
        heading: String
    }
}
</script>

<style scoped>
.header {
    background-color: pink;
    padding: 1rem 0;
}
</style>