<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <el-table :data="tasks" border style="width: 100%">
      <el-table-column prop="name" label="Nhiệm vụ" width="500"> </el-table-column>
      <el-table-column
        prop="completed"
        label="Trạng thái"
        :formatter="formatStatus"
        width="200"
      >
      </el-table-column>
      <el-table-column label="Thao tác">
        <template #default="scope">
          <el-button @click="setTaskComplete(scope.row)" type="text" size="mini"
            >Completed</el-button
          >
          <el-button
            @click="deleteTask(scope.row)"
            type="text"
            size="mini"
            style="color: red"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
