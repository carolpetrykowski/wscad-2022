<template>
  <v-app>
    <Header />
    <v-main>
      <Home />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import './styles/global.css'

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {Header, Home, Footer},
};
</script>
