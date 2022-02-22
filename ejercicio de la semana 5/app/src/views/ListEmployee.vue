<template>
  <div class="home">
    <h1>Listado de empleados</h1>
    <employee/>
  </div>
</template>

<script>
// @ is an alias to /src
import Employee from '@/components/Employee.vue'


export default {
  name: 'ListEmployee',
  components: {
    Employee
  
  }
}
</script>