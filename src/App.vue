<template>
  <div id="app">
    <v-app dark>
      <MainHeader></MainHeader>
      <v-content>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";

export default {
    name: "App",
    components: {
      MainHeader
    }
}
</script>

<style lang="scss">
</style>
