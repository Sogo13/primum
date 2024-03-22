<template>
    <div class="form__group inputDiv bgWhite">
        <input
            :value="modelValue"
            class="form__field"
            :class="{
                form__field_active: modelValue && modelValue.length > 0,
                'disable-input': disable,
            }"
            type="text"
            v-maska
            :data-maska="mask"
            :data-maska-tokens="token"
            @blur="$emit('blur')"
            @focus="$emit('focus')"
            @input="updateValue"
        />
        <label class="form__label">{{ placeholder }}</label>
    </div>
</template>

<script>
import { vMaska } from 'maska'

export default {
    directives: { maska: vMaska },
    name: 'TheInput',
    props: ['modelValue', 'placeholder', 'disable', 'mask', 'token'],
    components: { vMaska },
    data() {
        return {}
    },
    methods: {
        updateValue(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    },
    computed: {},
}
</script>

<style lang="scss" scoped>
.inputDiv {
    border-radius: 8px;
}
.form {
    width: 100%;
    display: flex;
    flex-direction: column;

    &__group {
        position: relative;
    }

    &__label {
        font-size: var(--font-size);
        line-height: 22px;
        margin-bottom: unset;
        color: var(--text-secondary-1);
        pointer-events: none;
        position: absolute;
        top: 16px;
        left: 16px;
        transition: 350ms ease all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (max-width: 767px) {
            top: 10px;
            font-size: 14px;
            line-height: 20px;
        }

        &:focus ~ .form__label {
            top: 8px;
            font-size: 12px;
            line-height: 18px;
            @media (max-width: 767px) {
                top: 4px;
                font-size: 10px;
                line-height: 14px;
            }
        }
    }

    &__field {
        width: 100%;
        box-sizing: border-box;
        min-height: 56px;
        max-height: 56px;
        border: 1px solid var(--border-turn-off);
        border-radius: 8px;
        background-color: transparent;
        padding: 16px;
        font-size: var(--font-size);
        line-height: 22px;
        transition: border 0.3s ease;

        &::placeholder {
            color: transparent;
        }

        &:focus {
            &::placeholder {
                color: var(--text-secondary-1);
            }
        }

        &:valid,
        &:focus {
            outline: none;
            padding: 26px 16px 8px 16px;
            @media (max-width: 767px) {
                padding: 18px 16px 4px 16px !important;
            }
        }

        &.date_exists ~ .form__label,
        &:not(#date):valid ~ .form__label,
        &:focus ~ .form__label {
            top: 8px;
            font-size: 12px;
            line-height: 18px;
            @media (max-width: 767px) {
                top: 4px;
                font-size: 10px;
                line-height: 14px;
            }
        }

        &_active {
            padding: 26px 16px 8px 16px;

            & ~ .form__label {
                top: 8px;
                font-size: 12px;
                line-height: 18px;
                @media (max-width: 767px) {
                    top: 4px;
                    font-size: 10px;
                    line-height: 14px;
                }
            }
        }

        &_error {
            border: 1px solid var(--color-red);
        }

        @media (max-width: 767px) {
            min-height: 44px;
            max-height: 44px;
            padding: 10px 16px !important;
            font-size: 14px;
            line-height: 20px;
        }
    }
}

.disable-light-label {
    color: var(--text-disabled);
}
.disable-light-input {
    pointer-events: none;
    border: 1px solid var(--border-disabled);
}
.disable-input {
    pointer-events: none;
    background-color: var(--bg-gray-2);
}
.clear-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    fill: var(--icon-secondary-2);
    @media (max-width: 767px) {
        top: 10px;
    }
}

.errorTxt {
    color: var(--color-red);
    display: block;
}
</style>
