import { defineComponent } from 'vue'
import Task from '@/models/TaskModel'

export default defineComponent({
    name: 'AddTask',
    data () {
        return {
            taskName: ''
        }
    },
    methods: {
        addTask (): void {
            if (this.taskName !== '') {
                const newTask = new Task(this.taskName)
                this.$store.commit('setTask', newTask)
                this.taskName = ''
                this.$router.push('/')
            }
        }
    }
})
