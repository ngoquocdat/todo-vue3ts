import { createStore } from 'vuex'
import Task from '../models/TaskModel'
import { findIndex } from 'lodash'

export default createStore({
  state: {
    tasks: [
      {
        name: 'Demo for Vue 3 with TS',
        completed: false
      },
      {
        name: 'Learning about TS basic',
        completed: false
      }
    ] as Task[]
  },
  getters: {
  },
  mutations: {
    setTask: (state, task) => state.tasks.push(task),

    deleteTask (state, task): void {
      let taskIndex = findIndex(state.tasks, task)
      state.tasks.splice(taskIndex, ++taskIndex)
    },

    completeTask (state, task): void {
      const taskIndex = findIndex(state.tasks, task)
      state.tasks[taskIndex].completed = true
    }
  },
  actions: {
  },
  modules: {
  }
})
