<template>
  <div class="Inicio">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm4 class="grid-list-md">
          <v-card class="fondo1">
            <div class="">
              <div class="d-flex flex-wrap justify-center">
                <div>
                  <div
                    class=" mb-1 mt-3 font-weight-medium azulgris--text text-center"
                  >
                    Total Casos
                  </div>
                  <div class="text-center">
                    <v-progress-circular
                      :size="25"
                      width="2"
                      color="azulgris"
                      indeterminate
                      v-show="progressBarC"
                      class="mb-4 mt-1"
                    ></v-progress-circular>
                  </div>

                  <div
                    class=" headline font-weight-medium mb-3 azulgris--text text-center"
                    v-for="itemTC in General"
                    :key="itemTC.total_cases"
                  >
                    {{ itemTC.total_cases }}
                  </div>
                </div>
                <div class="pa-8"></div>
                <div class="">
                  <div
                    class=" mb-1 mt-3 body-2 font-weight-medium text-center azulgris--text"
                  >
                    Nuevos
                  </div>
                  <div class="text-center">
                    <v-progress-circular
                      :size="20"
                      width="2"
                      color="azulgris"
                      indeterminate
                      v-show="progressBarC"
                      class="mb-4 mt-1"
                    ></v-progress-circular>
                  </div>

                  <div
                    class=" title font-weight-medium text-center azulgris--text"
                    v-for="itemTC in General"
                    :key="itemTC.new_cases"
                  >
                    {{ itemTC.new_cases }}
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card class="fondo1">
            <div class="">
              <div class="d-flex flex-wrap justify-center">
                <div>
                  <div
                    class=" mb-1 mt-3 font-weight-medium rojo--text text-center"
                  >
                    Decesos
                  </div>
                  <div class="text-center">
                    <v-progress-circular
                      :size="25"
                      width="2"
                      color="rojo"
                      indeterminate
                      v-show="progressBarC"
                      class="mb-4 mt-1"
                    ></v-progress-circular>
                  </div>

                  <div
                    class=" headline font-weight-medium mb-3 rojo--text text-center"
                    v-for="itemTD in General"
                    :key="itemTD.total_deaths"
                  >
                    {{ itemTD.total_deaths }}
                  </div>
                </div>
                <div class="pa-8"></div>
                <div class="">
                  <div
                    class=" mb-1 mt-3  body-2 font-weight-medium text-center rojo--text"
                  >
                    Nuevos
                  </div>
                  <div class="text-center">
                    <v-progress-circular
                      :size="20"
                      width="2"
                      color="rojo"
                      indeterminate
                      v-show="progressBarC"
                      class="mb-4 mt-1"
                    ></v-progress-circular>
                  </div>

                  <div
                    class=" title font-weight-medium text-center rojo--text"
                    v-for="itemTDN in General"
                    :key="itemTDN.new_deaths"
                  >
                    {{ itemTDN.new_deaths }}
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card class="fondo1">
            <div class="">
              <div class="d-flex flex-wrap justify-center">
                <div>
                  <div
                    class=" mb-1 mt-3 verde--text text-center font-weight-medium"
                  >
                    Recuperados
                  </div>
                  <div class="text-center">
                    <v-progress-circular
                      :size="25"
                      width="2"
                      color="verde"
                      indeterminate
                      v-show="progressBarC"
                      class="mb-4 mt-1"
                    ></v-progress-circular>
                  </div>

                  <div
                    class=" headline font-weight-medium mb-3 verde--text text-center"
                    v-for="itemR in General"
                    :key="itemR.total_recovered"
                  >
                    {{ itemR.total_recovered }}
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm12>
          <v-card class="fondo1" dark>
            <v-flex xs12 sm12>
              <v-card-title class="white--text">
                Covid-19 Coronavirus
                <v-spacer></v-spacer>
                <v-text-field
                  color="white"
                  v-model="buscar"
                  append-icon="mdi-magnify"
                  label="Buscar"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
            </v-flex>
            <v-flex xs12 sm12>
              <v-data-table
                background-color="fondo1"
                :headers="encabezado"
                :items="TodoconIndex"
                :search="buscar"
                :loading="true"
                @click:row="ClickTabla"
                class="fondo1"
                dark
              >
                <v-progress-linear
                  slot="progress"
                  v-show="progressBarD"
                  color="primary"
                  indeterminate
                ></v-progress-linear>
                <template v-slot:item.country="{ item }">
                  <div>
                    <div class="d-flex flex-wrap">
                      <div>
                        <v-img
                          :src="
                            require(`@/assets/Banderas/${item.country=='Taiwan*'?'Taiwan':item.country}.png`)
                          
                          "
                          :alt="item.country"
                          height="20"
                          width="23"
                        ></v-img>
                      </div>
                      <div class="ml-2">
                        {{ item.country }}
                      </div>
                    </div>
                  </div>
                </template>
              </v-data-table>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      progressBarD: true,
      progressBarC: true,
      buscar: "",
      encabezado: [
        {
          text: "N°",
          sortable: false,
          value: "index",
        },
        {
          text: "País",
          value: "country",
        },

        { text: "Infectados", value: "confirmed" },
      ],
      todos: [],
      General: [],
    };
  },

  methods: {
    async getDatosC() {
      await axios({
        method: "GET",

        url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
        headers: {
          "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
          "X-RapidAPI-Key":
            "e10ef16238msh53ab6462e7accdcp17ca41jsn01d5d808a35d",
        },
      })
        .then((response) => {
          let todos1 = response.data.data.covid19Stats;

          this.todos = todos1.reduce((acumulador, valor) => {
            const elementoYaExiste = acumulador.find(
              (elemento) => elemento.country == valor.country
            );

            if (elementoYaExiste) {
              return acumulador.map((elemento) => {
                if (elemento.country === valor.country) {
                  return {
                    ...elemento,
                    country:elemento.country == 'Taiwan*'?'Taiwan':elemento.country,
                    confirmed: elemento.confirmed + valor.confirmed,
                    deaths: elemento.deaths + valor.deaths,
                  };
                }
                return elemento;
              });
            }
            return [...acumulador, valor];
          }, []);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.progressBarD = false;
        });
    },
    async getDatosGeneral() {
      await axios({
        method: "GET",
        url:
          "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key":
            "e10ef16238msh53ab6462e7accdcp17ca41jsn01d5d808a35d",
        },
      })
        .then((response) => {
          this.General = response;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.progressBarC = false;
        });
    },
    ClickTabla(item) {
      this.$router.push({ name: "Pais", params: { id: item.country } });
    },
  },
  computed: {
    TodoconIndex() {
      this.getDatosC();
      //this.todos.splice(0, 1);

      return this.todos.map((todos, index) => ({
        ...todos,
        index: index + 1,
      }));
    },
  },
  created() {
    this.getDatosGeneral();
    //this.getDatosC()
  },
};
</script>
