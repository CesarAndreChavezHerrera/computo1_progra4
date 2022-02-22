<template>
     <b-table :items="employees" :fields="fields" :tbody-tr-class="rowClass"></b-table>
</template>




<script>
import axios from 'axios'

export default {
    name:'Employee',
    data(){
        return{
            employees:[],
        }
    },

    created(){
        axios.get('https://api-crud-example.herokuapp.com/Employee/read')
        .then(response=>{
            this.employees = response.data
            console.log(response.data)
        })
        .catch(e=>{
            this.errors.push(e)
        })
    }
}
</script>