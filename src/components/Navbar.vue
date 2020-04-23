<template>
  <nav>
    <div>
      <v-app-bar color="fondo1" dense dark app>
        <v-app-bar-nav-icon
          text
          class="white--text"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase white--text">
          <span class="font-weight-light">COVID</span>
          <span>19</span>
        </v-toolbar-title>
      </v-app-bar>
    </div>
    <v-navigation-drawer text v-model="drawer" app color="fondo1">
      <v-list dark>
        <v-subheader class="grey--text">General</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            router
            :to="item.route"
            class="primary--text"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      item: 1,
      items: [
        { text: "Inicio", icon: "home", route: "/" },
        {text: "Coronavirus", icon : "info", route: "/coronavirus"},
        { text: "Acerca de", icon: "help", route: "/acerca_de" },
        {
          text: "Desarrollador",
          icon: "developer_mode",
          route: "/desarrollador",
        },
      ],
    };
  },
};
</script>
