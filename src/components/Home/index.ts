import { defineComponent } from 'vue'
import Task from '@/models/TaskModel'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    data () {
        return {
            tasks: [] as Task[]
        }
    },

    methods: {
        setTaskComplete (task: Task): void {
            this.$store.commit('completeTask', task)
        },

        deleteTask (task: Task) {
            this.$store.commit('deleteTask', task)
        },

        formatStatus (task: Task): string {
            return task.completed ? 'Đã hoàn thành' : 'Chưa hoàn thành'
        }
    },

    mounted () {
        this.tasks = this.$store.state.tasks
    }
})
