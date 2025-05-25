<script setup>
    import ContentHeader from '@/components/ContentHeader.vue';
</script>

<template>

    <ContentHeader
        headerName="My Account"
        headerDescription="To secure and password-authenticated of the application which allows you to view and/or manage your information."
        iconClass="bi bi-person-circle"
    />

    <main class="main-content-wrapper mb-4">
        <div class="main-content">
            <div class="container shadow bg-white rounded p-4">
                <form action="">
                    <div class="row mb-3">
                        <h6 class="fw-bold">1. MY ACCOUNT</h6>
                        <div class="col-md-3">
                            <label for="email" class="form-label">Email Address <span style="color: red;">*</span></label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="..." maxlength="30" required>
                        </div>
                        <div class="col-md-3">
                            <label for="firstname" class="form-label">Name <span style="color: red;">*</span></label>
                            <input type="text" class="form-control" name="firstname" id="firstname" placeholder="..." maxlength="20" required>
                        </div>
                        <div class="col-md-3">
                            <label for="lastname" class="form-label">Last Name <span style="color: red;">*</span></label>
                            <input type="text" class="form-control" name="lastname" id="lastname" placeholder="..." maxlength="30" required>
                        </div>
                        <div class="col-md-3">
                            <label for="position" class="form-label">Position <span style="color: red;">*</span></label>
                            <select class="form-select" name="position" id="position" aria-label="Default select example" required>
                                <option value="1">Full-Stack Developer</option>
                                <option value="2">Data Engineer</option>
                                <option value="2">API Designer</option>
                                <option value="3">IT Manager</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" name="saveAccount" class="btn btn-button btn-sm">Save</button>
                </form>
            </div>
        </div>

        <div class="main-content mt-3">
            <div class="container shadow bg-white rounded p-4">
                <form action="">
                    <div class="row mb-3">
                        <h6 class="fw-bold">2. RESET PASSWORD</h6>
                        <div class="col-md-3">
                            <label for="currentPassword" class="form-label">Current Password <span style="color: red;">*</span></label>
                            <input type="password" class="form-control" name="currentPassword" id="currentPassword" placeholder="..." maxlength="10" required>
                        </div>
                        <div class="col-md-3">
                            <label for="newPassword" class="form-label">New Password <span style="color: red;">*</span></label>
                            <input type="password" class="form-control" name="newPassword" id="newPassword" placeholder="..." maxlength="10" required>
                        </div>
                        <div class="col-md-3">
                            <label for="confirmPassword" class="form-label">Confirm Password <span style="color: red;">*</span></label>
                            <input type="password" class="form-control" name="confirmPassword" id="confirmPassword" placeholder="..." maxlength="10" required>
                        </div>
                    </div>
                    <button type="submit" name="savePassword" class="btn btn-button btn-sm">Save</button>
                </form>
            </div>
        </div>

        <div class="main-content mt-3">
            <div class="container shadow bg-white rounded p-4">
                <form action="" enctype="multipart/form-data">
                    <div class="row mb-3">
                        <h6 class="fw-bold">3. CHANGE AVATAR</h6>
                        <div class="col-md-9">
                            <label for="changeAvatar" class="form-label">Input File <span style="color: red;">*</span></label>
                            <input class="form-control form-control-sm" type="file" name="changeAvatar" id="changeAvatar" accept="image/*" required>
                            <small class="text-muted">To change avatar of your account, Click "Choose File" to locate of your image file and save your new avatar.</small>
                        </div>
                    </div>
                    <button type="submit" name="saveAvatar" class="btn btn-button btn-sm">Save</button>
                </form>
            </div>
        </div>
    </main>
</template>