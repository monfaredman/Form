<template>
  <div id="app" class="toolbar">
    <v-app id="inspire" class="toolbar">
      <v-toolbar color="purple" dark class="toolbar">
        <v-divider class="mx-4" vertical></v-divider>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <Dropdown text />

          <v-divider vertical></v-divider>

          <v-btn text> Blog </v-btn>

          <v-divider vertical></v-divider>

          <v-btn text> Music </v-btn>

          <v-divider vertical></v-divider>
        </v-toolbar-items>
      </v-toolbar>
    </v-app>
  </div>
</template>

<script>
import Dropdown from "../components/Dropdown.vue";
export default {
  components: {
    Dropdown,
  },
};
</script>

<style>
.v-application--wrap {
  min-height: 0 !important;
}
</style>
