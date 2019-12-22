<template>
    <div class="log">
        <img alt="Vue logo" src="../assets/logo.png">
        <log></log>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Log from '@/components/Log.vue'

    export default {
        name: 'LogPage',
        components: {
            Log
        },
        mounted() {
            axios.get('ping').then(()=> {
                console.log("ping oui");
            }).catch(()=>{
                alert("cannot connect to API");
            });
        },
        methods : {
        }
    }
</script>
