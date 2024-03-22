<template>
    <div class="container">
        <div class="createProject">
            <div class="createProject-slab-title">
                <p class="heading_1 createProject-slab-title-txt">
                    Введите название вашего проекта
                </p>
                <Input
                    class="createProject-slab-title-input"
                    v-model:modelValue="inputValue"
                    placeholder=""
                />
            </div>
            <div class="createProject-slab-description">
                <p class="heading_1 createProject-slab-description-txt">Опишите ваш проект</p>
                <textarea class="createProject-slab-description-textarea" />
            </div>
            <div class="createProject-slab-form">
                <button></button>
            </div>
        </div>
    </div>
</template>

<script>
import Input from '@/components/interface/Input.vue'
export default {
    components: {
        Input,
    },
    data() {
        return {
            inputValue: '',
        }
    },

    methods: {},
}
</script>

<style scoped lang="scss">
.createProject {
    &-slab {
        width: 70%;
        &-title {
            margin-bottom: 32px;
            &-txt {
                margin-bottom: 12px;
            }
        }
        &-description {
            margin-bottom: 32px;
            &-txt {
                margin-bottom: 12px;
            }
            &-textarea {
                border-radius: 8px;
                resize: none;
                outline: none;
                padding: 16px;
                width: 100%;
                height: 400px;
                border: 1px solid var(--border-turn-off);
            }
        }
    }
}
</style>
