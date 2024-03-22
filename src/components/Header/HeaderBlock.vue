<template>
    <div class="header">
        <div class="container">
            <div class="flex_jc_sb_al_c headerBlock">
                <p class="heading_1 logoColor headerBlock-slab-logo" @click="goHome">PRIMUM</p>
                <MainSearch class="headerBlock-slab-search" />
                <div class="flex_jc_sb_al_c headerBlock-slab-btns">
                    <p
                        v-if="$router.currentRoute.value.name === 'createProjectPage'"
                        class="createProjectBtn heading_5 headerBlock-slab-btns-create"
                        @click="goHome"
                    >
                        Go home
                    </p>
                    <p
                        v-else
                        class="createProjectBtn heading_5 headerBlock-slab-btns-create"
                        @click="startCreate"
                    >
                        Create Project
                    </p>
                    <p class="logTxt heading_5 headerBlock-slab-btns-logIn">Log in</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainSearch from '@/components/Header/MainSearch.vue'

export default {
    components: {
        MainSearch,
    },
    // data() {},
    mounted() {},
    methods: {
        goHome() {
            this.$router.push({ name: 'home' })
        },
        startCreate() {
            this.$router.push({ name: 'createProjectPage' })
        },
    },
}
</script>

<style scoped lang="scss">
.headerBlock {
    padding-top: 24px;
    &-slab {
        &-logo {
            cursor: pointer;
        }
        &-search {
        }
        &-btns {
            &-create {
                cursor: pointer;
                padding: 8px 16px;
                border-right: 2px solid;
            }
            &-logIn {
                cursor: pointer;
                margin-left: 16px;
            }
        }
    }
}
</style>
