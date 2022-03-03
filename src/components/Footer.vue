<template>
  <v-container>
    <v-col class="d-flex align-center flex-column">
      <v-row>
        <v-col class="d-flex flex-column align-center" lg="3">
          <v-row class="flex-grow-0 text-h5 roboto-mono">REALIZAÇÃO</v-row>
          <img id="logo" src="./../assets/sbc.svg" />
        </v-col>
        <v-spacer />
        <v-col class="d-flex flex-column align-center" lg="3">
          <v-row class="flex-grow-0 text-h5 roboto-mono">ORGANIZAÇÃO</v-row>
          <img id="logo" src="./../assets/sbc.svg" />
        </v-col>
        <v-spacer />
        <v-col class="d-flex flex-column align-center" lg="3">
          <v-row class="flex-grow-0 text-h5 roboto-mono">PATROCINIO</v-row>
          <img id="logo" src="./../assets/sbc.svg" />
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
  #logo {
    width: 200px;
  }
</style>
