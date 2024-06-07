<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
    modelValue: {
        required: true,
    },
    componentData: {
        type: Object,
        default: () => {
            return {
                type: 'text',
                placeholder: 'Placeholder',
                label: 'Label',
                errorMessage: null,
                pattern: '',
                minLength: null,
                maxLength: null,
            }
        }
    }
});

const emit = defineEmits(['update:modelValue', 'form-validate'])

const onInput = (value) => {
    emit('update:modelValue', value.target.value)
}

const validate = (event) => {
    const isPatternValid = props.componentData.pattern ? !!event.target.value.match(props.componentData.pattern) : true

    const isLengthValid = event.target.value >= props.componentData.minLength && event.target.value <= props.componentData.maxLength;

    if (!isPatternValid || !isLengthValid) {
        localError.value = 'Please enter a valid value!'
    } else {
        localError.value = ''
    }

    emit('form-validate', !!(isPatternValid && isLengthValid))
}

const localError = ref('')
</script>

<template>
    <div>
        <input class="field-input input-bordered w-full max-w-lg mb-5"
                :placeholder="componentData.placeholder"
                :type="props.componentData.type"
                @input="onInput"
                @blur="validate"
        />
        <span class="field-error" v-if="props.componentData.errorMessage || localError">
            {{ props.componentData.errorMessage || localError }}
        </span>
    </div>
</template>