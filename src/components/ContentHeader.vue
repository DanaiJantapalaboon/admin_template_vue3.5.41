<script setup>
    defineProps({
        headerName: {
            type: String,
            required: true,
        },
        headerDescription: {
            type: String,
            required: true,
        },
        iconClass: {
            type: String,
            required: true,
        }
    })
</script>

<template>
    <section class="header-content container-fluid my-4">
        <div class="container">
            <div class="row">
                <div class="col-md-1 align-self-center d-none d-lg-block">
                    <div class="text-center">
                        <i v-bind:class="['fs-2', iconClass, 'text-secondary']"></i>
                    </div>
                </div>
                <div class="col-md-11">
                    <h5>{{ headerName }}</h5>
                    <small>{{ headerDescription }}</small>
                </div>
            </div>
        </div>
    </section>
</template>
