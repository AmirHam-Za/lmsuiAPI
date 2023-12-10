<template>
   <div class="flex flex-col h-screen font-outfit" >
      <Header />
        <router-view />
      <Footer />
    </div>
</template>

<script>
    import Header from "@/components/Layout/TheHeader.vue"
    import Footer from "@/components/Layout/TheFooter.vue"
    import { defineComponent} from "vue";

    export default defineComponent({
      name: 'App',
      components: {Header,Footer}
    });
</script>


