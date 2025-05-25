<script setup>
    import ContentHeader from '@/components/ContentHeader.vue'
    import vueImg from '@/components/images/vue.png'
    import bootstrapImg from '@/components/images/bootstrap.png'
</script>

<template>

    <ContentHeader
        headerName="About"
        headerDescription="The description of the core features or functionality of your web application"
        iconClass="bi bi-info-circle"
    />

    <main class="main-content-wrapper mb-4">
        <div class="main-content">
            <div class="container shadow bg-white rounded p-4">

                <p>
                    ------------------------------------------------------------------<br>
                    Your Web Application Version 1.00<br>
                    ------------------------------------------------------------------<br>
                    <br>
                    <b>Web Application Core</b><br>
                    - Front-End Framework : Vue.js · Version 3.5.14<br>
                    - Back-End Framework : Up to you จ้าา<br>
                    <br>
                    <b>Dependencies</b><br>
                    - Bootstrap · Version 5.2.3 (CDN)<br>
                    - Bootstrap Icons · Version 1.21.1 (CDN)<br>
                    - jQuery · Version 3.7.1 (Local)<br>
                    - DataTables.net · Version 2.3.1 (Local)<br>
                    <br>
                    <b>Software Architecture</b><br>
                    - Single Page Application (SPA)<br>
                    <br>
                    <b>Developer</b><br>
                    - Danai Jantapalaboon (DanaiDev)<br>
                    <a href="https://danaidev.netlify.app/" target="_blank">https://danaidev.netlify.app/</a><br>
                    <a href="https://github.com/DanaiJantapalaboon" target="_blank">https://github.com/DanaiJantapalaboon</a><br>
                    <br>
                </p>
                <div class="d-flex">
                    <img v-bind:src="vueImg" style="width: 120px;" />
                    <img v-bind:src="bootstrapImg" style="width: 150px;" />
                </div>
            </div>
        </div>
    </main>
</template>