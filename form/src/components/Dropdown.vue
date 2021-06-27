<template>
  <v-menu open-on-hover top offset-y class="buttonMenu2">
    <template v-slot:activator="{ on, attrs }" class="buttonMenu2">
      <v-btn color="purple" dark v-bind="attrs" v-on="on" class="buttonMenu2">
        Dropdown
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        @mouseover="changeBackColor()"
        @mouseout="changeBackColor22()"
        v-for="(item, index) in items"
        :key="index"
      >
        <v-btn width="100%" class="btnHeadDr">{{ item.title }}</v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Item1" },
      { title: "Item11" },
      { title: "Item11" },
      { title: "Item11" },
    ],
  }),
  methods: {
    changeBackColor() {
      return this.$store.getters.changeBackColor2;
    },
    changeBackColor22() {
      return this.$store.getters.changeBackColor3;
    },
  },
};
</script>

<style>
.buttonMenu {
  box-shadow: none !important;
}
.buttonMenu2 {
  box-shadow: none !important;
}
.btnHeadDr {
  box-shadow: none !important;
  background-color: white !important;
}
</style>
