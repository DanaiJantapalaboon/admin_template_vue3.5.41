<script setup>
    import ContentHeader from '@/components/ContentHeader.vue';
</script>

<template>

    <ContentHeader
        headerName="User Management"
        headerDescription="Organizational users to add and/or remove to access and control of the application."
        iconClass="bi bi-person-lines-fill"
    />

    <main class="main-content-wrapper mb-4">
        <div class="main-content">
            <div class="container shadow bg-white rounded p-4">
                <form action="">
                    <div class="row mb-3">
                        <h6 class="fw-bold">Add New Users</h6>
                        <div class="col-md-3">
                            <label for="email" class="form-label">Email Address (Logged in) <span style="color: red;">*</span></label>
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
                <h6 class="fw-bold">All Users</h6>

                <div class="table-responsive">
                    <table class="display compact" id="myTable">
                        <thead>
                            <tr>
                                <th scope="col" class="text-center"><b>#</b></th>
                                <th scope="col"><b>Email</b></th>
                                <th scope="col"><b>Name</b></th>
                                <th scope="col"><b>Lastname</b></th>
                                <th scope="col"><b>Position</b></th>
                                <th scope="col"><b>Action</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" class="text-center">1</th>
                                <td>danai.athlon@gmail.com</td>
                                <td>Danai</td>
                                <td>Jantapalaboon</td>
                                <td>Full-Stack Developer</td>
                                <td>
                                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-outline-warning"><small>Edit</small></button>
                                        <button type="button" class="btn btn-outline-danger"><small>Delete</small></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="text-center">2</th>
                                <td>mydaughter@gmail.com</td>
                                <td>Darin</td>
                                <td>Jantapalaboon</td>
                                <td>Data Engineer</td>
                                <td>
                                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-outline-warning"><small>Edit</small></button>
                                        <button type="button" class="btn btn-outline-danger"><small>Delete</small></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="text-center">3</th>
                                <td>admin01@admin</td>
                                <td>Admin01</td>
                                <td>แอดมินจ้าา</td>
                                <td>Full-Stack Developer</td>
                                <td>
                                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-outline-warning"><small>Edit</small></button>
                                        <button type="button" class="btn btn-outline-danger"><small>Delete</small></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import DataTable from 'datatables.net-dt';
    export default {
        mounted () {
            let table = new DataTable('#myTable');
        }
    }
</script>