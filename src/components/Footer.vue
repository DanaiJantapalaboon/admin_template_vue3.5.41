<script setup>
    const companyName = "Your Company";
    const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="footer-wrapper p-4">
        <div class="container d-flex justify-content-between">
            <small class="text-white">&copy; {{ currentYear }} {{ companyName }}, All rights reserved.</small>
            <RouterLink to="/about">About</RouterLink>
        </div>
    </footer>
</template>