<template>
    <div class="componet"
        v-on:mousemove="xy" 
            @mouseover="mouseOver"
            @mouseout="mouseOut"
    >
        <h1>mi primer componente</h1>
        <h2>({{x}},{{y}})</h2>

        <h1 
            :style="[alet-primary,{'fontSize':fontSize+'px'}]"
            >
            Programacion computacional IV eventos Vuejs {{mensaje}}
        </h1>

        <button v-on:click ="fontSize++">mas grande</button>
        <button v-on:click ="fontSize--">mas pequeño</button>
    </div>
</template>
<script>

export default {
    
    name: "fistComponet",
    
    data(){
        return{
            x:0,
            y:0,
            mensaje:"",
            fontSize: 20,

        }},
    methods:{
        mouseOver(){
            this.mensaje = "in"
        },
        mouseOut(){

            this.mensaje = "out"
        },
        xy(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
    }
    



</script>
