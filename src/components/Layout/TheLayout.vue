<template>
    <div class="flex flex-col h-screen">
        <Header />
          <slot />
        <Footer />
    </div>
</template>

<script>

import Header from "./TheHeader.vue"
import Footer from "./TheFooter.vue"

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>