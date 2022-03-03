<template>
  <div>
    <!--MENU DE NAVEGAÇÃO DESKTOP-->
    <v-app-bar app>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <!--TITULO-->
      <v-toolbar-title>WSCAD 2022</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
       
        <!--INICIO-->
        <v-btn flat to="/">INICIO</v-btn>

        <!--CHAMADAS-->
        <v-menu
          :rounded="rounded"
          open-on-hover
          offset-y
          transition="slide-x-transition"
          bottom
          right
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn flat v-bind="attrs" v-on="on">CHAMADAS</v-btn>
          </template>

          <v-list dense>
            <v-list-item
              v-for="(item, index) in chamadas"
              :key="index"
              router
              :to="item.link"
            >
              <v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
        
        <!--PROGRAMAS-->
        <v-menu
          :rounded="rounded"
          open-on-hover
          offset-y
          transition="slide-x-transition"
          bottom
          right
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn flat v-bind="attrs" v-on="on">PROGRAMAS</v-btn>
          </template>

          <v-list dense>
            <v-list-item
              v-for="(item, index) in programas"
              :key="index"
              router
              :to="item.link"
            >
              <v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>

        <!--INSCRIÇÕES-->
        <v-btn to="/inscricoes" flat>INSCRIÇÕES</v-btn>

        <!--SEÇÕES VIRTUAIS-->
        <v-menu
          :rounded="rounded"
          open-on-hover
          offset-y
          transition="slide-x-transition"
          bottom
          right
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn flat v-bind="attrs" v-on="on">SESSÕES VIRTUAIS</v-btn>
          </template>

          <v-list dense>
            <v-list-item
              v-for="(item, index) in sessoesVirtuais"
              :key="index"
              router
              :to="item.link"
            >
              <v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>

        <!--COMITÊS-->
        <v-btn to="/comites" flat>COMITÊS</v-btn>
        
        <!--EDIÇÕES PASSADAS-->
        <v-btn to="/edicoes-passadas" flat>EDIÇÕES PASSADAS</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!--MENU NAVEGAÇÃO MOBILE-->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <ul>
          <li><a href="/">Início</a></li>
          <li>
            Chamadas
            <ul>
              <li><a href="/trilha-principal">Trilha Principal</a></li>
              <li><a href="/wscad-ctd">WSCAD-CTD</a></li>
              <li><a href="/wscad-wic">WSCAD-WIC</a></li>
              <li><a href="/weac">WEAC</a></li>
              <li><a href="/maratona">Maratona</a></li>
              <li><a href="/minicurso">Minicurso</a></li>
            </ul>
          </li>

          <li>
            Programas
            <ul>
              <li><a href="/programacao-completa">Programação Completa</a></li>
              <li><a href="/trilha-principal">Trilha Principal</a></li>
              <li><a href="/wscad-ctd">WSCAD-CTD</a></li>
              <li><a href="/wscad-wic">WSCAD-WIC</a></li>
              <li><a href="/weac">WEAC</a></li>
              <li><a href="/minicurso">Minicurso</a></li>
            </ul>
          </li>
          <li><a href="/inscricoes">Inscrições</a></li>
          <li>
            Sessões virtuais
            <ul>
              <li><a href="/para-autores">para Autores</a></li>
              <li><a href="/para-participantes">para Participantes</a></li>
            </ul>
          </li>
          <li><a href="/comites">Comitês</a></li>
          <li><a href="/edicoes-anteriores">Edições anteiores</a></li>
        </ul>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      tab: null,
      chamadas: [
        {
          title: "Trilha Principal",
          link: "/",
        },
        {
          title: "WSCAD-CTD",
          link: "/",
        },
        {
          title: "WSCAD-WIC",
          link: "/",
        },
        {
          title: "WEAC",
          link: "/",
        },
        {
          title: "Maratona",
          link: "/",
        },
        {
          title: "Minicurso",
          link: "/",
        },
      ],
      programas: [
        {
          title: "Programação Completa",
          link: "/",
        },
        {
          title: "Trilha Principal",
          link: "/",
        },
        {
          title: "WSCAD-CTD",
          link: "/",
        },
        {
          title: "WSCAD-WIC",
          link: "/",
        },

        {
          title: "WEAC",
          link: "/",
        },
        {
          title: "Minicurso",
          link: "/",
        },
      ],
      sessoesVirtuais: [
        {
          title: "para Autores",
          link: "/",
        },
        {
          title: "para Participantes",
          link: "/",
        },
      ],
      items: ["web", "shopping", "videos", "images", "news"],
    };
  },
};
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
</style>
