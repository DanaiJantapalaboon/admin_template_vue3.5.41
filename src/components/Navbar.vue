<script setup>
    import HomeIcon from './icons/IconHome.vue'
    import UserManagementIcon from './icons/IconUserManagement.vue'
    import ViewReportIcon from './icons/IconViewReport.vue'
    import ViewOrderIcon from './icons/IconViewOrder.vue'
    import DashboardIcon from './icons/IconDashboard.vue'
</script>


<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand"><img src="@/assets/logo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto my-lg-0">
                    <li class="small"><RouterLink class="nav-link" aria-current="page" to="/home"><HomeIcon />Home</RouterLink></li>
                    <li class="small"><a class="nav-link" aria-current="page" href="#"><DashboardIcon />Dashboard</a></li>
                    <li class="small"><a class="nav-link" aria-current="page" href="#"><ViewOrderIcon />Order</a></li>
                    <li class="small"><a class="nav-link" aria-current="page" href="#"><ViewReportIcon />View Report</a></li>
                    <li class="small"><RouterLink class="nav-link" aria-current="page" to="/user_management"><UserManagementIcon />User Manager</RouterLink></li>
                </ul>
                <ul class="navbar-nav mb-lg-0">
                    <li class="nav-item dropdown small">
                        <div class="btn-group">
                            <img width="60" class="rounded-circle" src="@/assets/user.png">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Danai Jantapalaboon<br><small>danai.athlon@gmail.com</small></a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item disabled small" href="#"><i class="bi bi-person-circle"></i>&nbsp;&nbsp;Danai Jantapalaboon</a></li>
                                <li><a class="dropdown-item disabled small" href="#"><i class="bi bi-clock"></i>&nbsp;&nbsp;<span>{{ date }}</span>&nbsp;<span>{{ time }}</span></a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><RouterLink class="dropdown-item small" to="/account">My Account</RouterLink></li>
                                <li><a class="dropdown-item small" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
    data() {
        return {
        date: '',
        time: ''
        };
    },
    mounted() {
        this.updateDateTime();
        setInterval(this.updateDateTime, 1000);
    },
    methods: {
        updateDateTime() {
        const now = new Date();
        this.date = now.toLocaleDateString();
        this.time = now.toLocaleTimeString();
        }
    }
    };
</script>