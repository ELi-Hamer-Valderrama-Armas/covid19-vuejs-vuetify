<template>
  <div class="acerca_de">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm12>
          <v-card class="mb-2 fondo1 white--text">
            <v-card-title>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  <div class="d-flex flex-wrap">
                    <div>
                      Acerca de la página.
                    </div>
                  </div>
                </v-list-item-title>
              </v-list-item-content>
            </v-card-title>
            <v-card-text class="white--text">
              <v-row class="mx-0">
                <v-col>
                  <p class="">
                    Esta página fué creada con fines informativos sobre de todos
                    los países infectados, ademas de mostrar gráficos
                    estadísticos de la evolución del coronavirus.‎
                  </p>
                  <p class="">
                    La información es obtenida gracias a esta
                    <v-btn
                      text
                      class="blue--text"
                      small
                      target="_blank"
                      href="https://rapidapi.com/astsiatsko/api/coronavirus-monitor/details"
                      >API
                    </v-btn>
                    , la población mundial de esta
                    otra
                    <v-btn
                      text
                      class="blue--text"
                      small
                      target="_blank"
                      href="https://restcountries.eu/"
                      >API
                    </v-btn>
                    y también los íconos de banderas diseñados por       
                    <v-btn
                      text
                      class="blue--text"
                      small
                      target="_blank"
                      href="https://www.flaticon.es/autores/freepik/"
                      >Freepik
                    </v-btn>
                    para
                     <v-btn
                      text
                      class="blue--text"
                      small
                      target="_blank"
                      href="https://www.flaticon.es/"
                      >www.flaticon.es
                    </v-btn>
                    todas son gratuitas.
                  </p>

                

                  <p class="title mt-2">
                    Herramientas.
                  </p>
                  <p class="subtitle-1">
                    Principales:
                  </p>
                  <p>
                    <v-icon color="white" size="15">brightness_1</v-icon>

                    <v-btn
                      text
                      class="blue--text"
                      small
                      target="_blank"
                      href="https://nodejs.org/es/"
                      >node v10.16.01
                    </v-btn>

                    <br />
                    <v-icon color="white" size="15">brightness_1</v-icon>
                    <v-btn
                      text
                      class="blue--text"
                      small
                      target="_blank"
                      href="https://vuejs.org/"
                      >Vue v2.6.1
                    </v-btn>
                    <br />
                    <v-icon color="white" size="15">brightness_1</v-icon>
                    <v-btn
                      text
                      class="blue--text"
                      small
                      target="_blank"
                      href="https://vuetifyjs.com/en/"
                      >Vuetify v2.2.11
                    </v-btn>

                    <br />
                    <v-icon color="white" size="15">brightness_1</v-icon>
                    <v-btn
                      text
                      class="blue--text"
                      small
                      target="_blank"
                      href="https://apexcharts.com/"
                      >apexcharts v3.18.1
                    </v-btn>

                    <br />
                    <v-icon color="white" size="15">brightness_1</v-icon>
                    <v-btn
                      text
                      class="blue--text"
                      small
                      target="_blank"
                      href="https://material.io/resources/icons/?style=baseline"
                      >Icons-Material Design v5.0.1
                    </v-btn>
                  </p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
