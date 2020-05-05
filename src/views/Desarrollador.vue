<template>
  <div class="desarrollador">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm12>
          <v-card class="mb-2 fondo1 white--text">
            <v-card-text class="white--text">
              <v-row class="mx-0">
                <v-col>
                  <div class="text-center">
                    <v-avatar size="150">
                      <img
                        src="@/assets/Diseño/b.png"
                        alt="Elí"
                      />
                    </v-avatar>
                    <p class="display-1 text-center mt-3">
                      Elí Valderrama Armas
                    </p>
                    <p class="headline font-weight-light mt-2">
                      Desarrollador Web Full Stack
                    </p>
                  </div>
                </v-col>
              </v-row>
              <v-row row wrap>
                <v-flex xs12 sm3>
                  <v-row justify="center" class="mb-1">
                    <v-btn
                      text
                      small
                      target="_blank"
                      href="https://www.facebook.com/eli.valderramaarmas"
                    >
                      <img
                        src="@/assets/Diseño/facebook.png"
                        alt="Elí"
                        width="30"
                        height="30"
                        class="mr-2"
                      />
                      <div class="white--text">eli.valderramaarmas</div>
                    </v-btn>
                  </v-row>
                </v-flex>
                <v-flex xs12 sm3>
                  <v-row justify="center" class="mb-1">
                    <v-btn
                      text
                      small
                      target="_blank"
                      href="https://www.instagram.com/eli_valderrama_armas/"
                    >
                      <img
                        src="@/assets/Diseño/instagram.png"
                        alt="Elí"
                        width="30"
                        height="30"
                        class="mr-2"
                      />
                      <div class="white--text">eli_valderrama_armas</div>
                    </v-btn>
                  </v-row>
                </v-flex>
                <v-flex xs12 sm3>
                  <v-row justify="center" class="mb-1">
                    <v-btn
                      text
                      small
                      target="_blank"
                      href="https://www.instagram.com/elivalderramaa/"
                    >
                      <img
                        src="@/assets/Diseño/twitter.png"
                        alt="Elí"
                        width="30"
                        height="30"
                        class="mr-2"
                      />
                      <div class="white--text">Eli_ValderramaA</div>
                    </v-btn>
                  </v-row>
                </v-flex>
                <v-flex xs12 sm3>
                  
                  <v-row justify="center">
                    <v-btn
                      text
                      small
                      target="_blank"
                      href="https://wa.me/51928139629"
                    >
                      <img
                        src="@/assets/Diseño/whatsapp.png"
                        alt="Elí"
                        width="30"
                        height="30"
                        class="mr-2"
                      />
                      <div class="white--text">+51928139629</div>
                    </v-btn>
                  </v-row>
                </v-flex>
              </v-row>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
