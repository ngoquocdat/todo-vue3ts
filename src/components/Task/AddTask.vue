<template>
  <div class="add-task">
    <el-card class="box-card">
      <el-input
        type="textarea"
        :rows="2"
        size="small"
        placeholder="Enter your task"
        v-model="taskName"
        @keyup.enter="addTask()"
      >
      </el-input>

      <el-row>
        <el-button type="primary">Submit</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
