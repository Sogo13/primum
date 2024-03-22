<template>
    <div>
        <input :value="value" :placeholder="placeholder" @input="updateValue" />
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        value: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: 'Enter text...',
        },
    },
    data() {
        return {
            // Your data properties here
        }
    },
    mounted() {
        // Code to run when the component is mounted
    },
    methods: {
        updateValue(event) {
            this.$emit('update:value', event.target.value)
        },
    },
    computed: {},
}
</script>

<style scoped lang="scss">
/* Your scoped styles here */
</style>
