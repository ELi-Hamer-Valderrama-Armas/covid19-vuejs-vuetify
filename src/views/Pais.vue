<template>
  <div class="pais">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm4>
          <v-card class="mb-2 fondo1 white--text">
            <v-card-title>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  <div>
                    <div class="d-flex flex-wrap">
                      <div>
                        <v-img
                          :src="
                            require(`@/assets/Banderas/${this.$route.params.id}.png`)
                          "
                          height="40"
                          width="45"
                        ></v-img>
                      </div>
                      <div class="ml-4">
                        {{ this.$route.params.id }}
                      </div>
                    </div>
                  </div>
                </v-list-item-title>
                <v-list-item-subtitle class=" mt-3">
                  <div class="azulgris--text">
                    {{ validarPoblacion(this.Datos2.population) }} Habitantes
                  </div>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-card-title>

            <v-card-text class="white--text">
              <v-progress-linear
                slot="progress"
                v-show="progressBar"
                color="yellow"
                indeterminate
              ></v-progress-linear>
              <v-row class="mx-0">
                <v-col cols="6">
                  <div aling="left">
                    Confirmados
                  </div>
                </v-col>
                <v-col cols="3">
                  <div aling="center">
                    {{ this.Datos.total_cases }}
                  </div>
                </v-col>
                <v-col cols="3">
                  <div aling="center">
                    {{
                      validarPgeneral(
                        this.Datos2.population,
                        this.Datos.total_cases
                      )
                    }}
                    %
                  </div>
                </v-col>
              </v-row>
              <v-divider class="primary"></v-divider>
              <v-row class="mx-0">
                <v-col cols="6">
                  <div aling="left">
                    Casos Activos
                  </div>
                </v-col>
                <v-divider class="primary"></v-divider>
                <v-col cols="3">
                  <div class=" " aling="center">
                    {{ validar(this.Datos.active_cases) }}
                  </div>
                </v-col>
                <v-col cols="3">
                  <div class=" " aling="center">
                    {{
                      getporcentaje(
                        this.Datos.total_cases,
                        this.Datos.active_cases
                      )
                    }}
                    %
                  </div>
                </v-col>
              </v-row>
              <v-divider class="primary"></v-divider>
              <v-row class="mx-0">
                <v-col cols="6">
                  <div aling="left">
                    Fallecidos
                  </div>
                </v-col>
                <v-divider></v-divider>
                <v-col cols="3">
                  <div class=" " aling="center">
                    {{ validar(this.Datos.total_deaths) }}
                  </div>
                </v-col>
                <v-col cols="3">
                  <div class=" " aling="center">
                    {{
                      getporcentaje(
                        this.Datos.total_cases,
                        this.Datos.total_deaths
                      )
                    }}
                    %
                  </div>
                </v-col>
              </v-row>
              <v-divider class="primary"></v-divider>
              <v-row align="center" class="mx-0">
                <v-col cols="6">
                  <div aling="left">
                    Recuperados
                  </div>
                </v-col>
                <v-divider></v-divider>
                <v-col cols="3">
                  <div class=" " aling="center">
                    {{ validar(this.Datos.total_recovered) }}
                  </div>
                </v-col>
                <v-col cols="3">
                  <div aling="center">
                    {{
                      getporcentaje(
                        this.Datos.total_cases,
                        this.Datos.total_recovered
                      )
                    }}
                    %
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="mb-2 fondo1 white--text">
            <v-card-title>Estadisticas</v-card-title>
            <v-list-item-subtitle class="ml-5 ">
              <div class="azulgris--text">
                Datos basadas a partir del 17/03/2020
              </div>
            </v-list-item-subtitle>
            <v-card-text class="white--text">
              <v-progress-linear
                slot="progress"
                v-show="progressBar"
                color="yellow"
                indeterminate
              ></v-progress-linear>
              <v-row class="mx-0">
                <v-col cols="8">
                  <div aling="left">
                    Casos Criticos
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class=" " aling="center">
                    {{ validar(this.Datos.serious_critical) }}
                  </div>
                </v-col>
              </v-row>
              <v-divider class="primary"></v-divider>
              <v-row class="mx-0">
                <v-col cols="8">
                  <div aling="left">
                    Nuevos Casos
                  </div>
                </v-col>
                <v-divider class="primary"></v-divider>
                <v-col cols="4">
                  <div aling="center">
                    {{ validar(this.Datos.new_cases) }}
                  </div>
                </v-col>
              </v-row>
              <v-divider class="primary"></v-divider>
              <v-row class="mx-0">
                <v-col cols="8">
                  <div aling="left">
                    Nuevos Fallecidos
                  </div>
                </v-col>
                <v-divider></v-divider>
                <v-col cols="4">
                  <div class=" " aling="center">
                    {{ validar(this.Datos.new_deaths) }}
                  </div>
                </v-col>
              </v-row>
              <v-divider class="primary"></v-divider>
              <v-row align="center" class="mx-0">
                <v-col cols="8">
                  <div aling="left">
                    Tests Realizados
                  </div>
                </v-col>
                <v-divider></v-divider>
                <v-col cols="4">
                  <div class=" " aling="center">
                    {{ validar(this.Datos.total_tests) }}
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="mb-2 fondo1 white--text">
            <v-card-title>Resumen</v-card-title>
            <v-list-item-subtitle class="ml-5 ">
              <div class="azulgris--text">
                Promedio por día
              </div>
            </v-list-item-subtitle>
            <v-card-text class="white--text">
              <v-progress-linear
                slot="progress"
                v-show="progressBar"
                color="yellow"
                indeterminate
              ></v-progress-linear>
              <v-row class="mx-0">
                <v-col cols="8">
                  <div aling="left">
                    Confirmados
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class=" " aling="center">
                    {{ validar(this.Datos.total_cases_per1m) }}
                  </div>
                </v-col>
              </v-row>
              <v-divider class="primary"></v-divider>
              <v-row class="mx-0">
                <v-col cols="8">
                  <div aling="left">
                    Fallecidos
                  </div>
                </v-col>
                <v-divider class="primary"></v-divider>
                <v-col cols="4">
                  <div class=" " aling="center">
                    {{ validar(this.Datos.deaths_per1m) }}
                  </div>
                </v-col>
              </v-row>
              <v-divider class="primary"></v-divider>
              <v-row class="mx-0">
                <v-col cols="8">
                  <div aling="left">
                    Tests
                  </div>
                </v-col>
                <v-divider class="primary"></v-divider>
                <v-col cols="4">
                  <div class=" " aling="center">
                    {{ validar(this.Datos.total_tests_per1m) }}
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm8>
          <v-card class="fondo1 mb-2">
            <div>
              <v-progress-linear
                slot="progress"
                v-show="progressBarG"
                color="yellow"
                indeterminate
              ></v-progress-linear>

              <apexchart
                type="line"
                height="350"
                :options="chartOptions"
                :series="series"
              ></apexchart>
            </div>
          </v-card>
          <v-card class="fondo1 mb-2">
            <div>
              <v-progress-linear
                v-show="progressBarG"
                slot="progress"
                color="yellow"
                indeterminate
              ></v-progress-linear>
              <div id="chart">
                <apexchart
                  type="bar"
                  height="430"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
              </div>
            </div>
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
      progressBarG: true,
      progressBar: true,
      Datos: [],
      Datos1: [],
      Datos2: [],
      confirmados: [],
      fallecidos: [],
    
      fechas: [],

      series: [
        {
          name: "Confirmados",
          data: [],
        },
       
        {
          name: "Fallecidos",

          data: [],
        },
      ],
      chartOptions: {
        tooltip: {
          enabled: true,
          shared: true,
          fillSeriesColor: false,
          theme: "dark",
          style: {
            fontSize: "12px",
          },
        },
        chart: {
          toolbar: {
            show: true,
            tools: {
              download: false,
            },
          },
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        legend: {
          labels: {
            colors: "white",
          },
        },

        colors: ["#F1C40F", "#E74C3C"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
          width: 4,
        },
        title: {
          text: "Gráfico",
          align: "left",
          margin: 10,
          offsetX: 2,
          offsetY: 15,
          floating: false,
          style: {
            fontSize: "18px",
            fontWeight: "ligth",
            color: "white",
          },
        },
        grid: {
          show: false,
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "white",
            },
          },
          title: {
            text: "Total Casos Coronavirus",
          },
        },
        xaxis: {
          categories: [],
          labels: {
            style: {
              colors: "white",
            },
          },
        },
      },
      chartOptions1: {
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: true,
            tools: {
              download: false,
            },
          },
        },
        title: {
          text: "Gráfico de Columnas",
          align: "left",
          margin: 10,
          offsetX: 2,
          offsetY: 15,
          floating: false,
          style: {
            fontSize: "18px",
            fontWeight: "ligth",
            color: "white",
          },
        },
        grid: {
          show: false,
        },
        colors: ["#F1C40F", "#E74C3C"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 4,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [],
          labels: {
            style: {
              colors: "white",
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "white",
            },
          },
          title: {
            text: "Total Casos Coronavirus",
          },
        },
        legend: {
          labels: {
            colors: "white",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          theme: "dark",
          y: {
            formatter: function(val) {
              return val;
            },
          },
        },
      },
    };
  },
  methods: {
    async ObtenerPais() {
      await axios({
        method: "GET",
        url:
          "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_iso_alpha_3.php",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key":
            "e10ef16238msh53ab6462e7accdcp17ca41jsn01d5d808a35d",
        },
        params: {
          alpha3: this.$route.params.id,
        },
      })
        .then((response) => {
          this.Datos1 = response.data.latest_stat_by_country;

          for (const i in this.Datos1) {
            this.Datos = this.Datos1[i];
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.progressBar = false;
        });
    },
    getporcentaje(total, activos) {
      var porcentaje = 0;

      if (total != null && activos != null && activos != "N/A") {
        var total = total.replace(/,/g, "");
        var activos1 = activos.replace(/,/g, "");
        var res = (activos1 * 100) / total;
        porcentaje = res.toFixed(2);
      }

      return porcentaje;
    },
    validar(cantidadg) {
      if (cantidadg == "" || cantidadg == "N/A") {
        cantidadg = "0";
      }

      return cantidadg;
    },
    async ObtenerPoblacion() {
      await axios({
        method: "GET",
        url:
          "https://restcountries.com/v2/name/" +
          this.$route.params.id +
          "?fullText=true",
      })
        .then((response) => {
          this.Datos2 = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validarPoblacion(a) {
      var b = "";
      if (a != null) {
        a = new Intl.NumberFormat().format(a);
        b = a.replace(".", " ,");
      }

      return b;
    },
    validarPgeneral(total, confirm) {
      var porcentaje = 0;

      if (total != null && confirm != null && confirm != "N/A") {
        let confirmar = confirm.replace(/,/g, "");

        var res = (Number(confirmar) * 100) / Number(total);

        porcentaje = res.toFixed(3);
      }

      return porcentaje;

      this.progressBar = false;
    },
    async ObtenerGraficos() {
      await axios({
        method: "GET",
        url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
        params: { country: this.$route.params.id },
        headers: {
          "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
          "X-RapidAPI-Key":
            "e10ef16238msh53ab6462e7accdcp17ca41jsn01d5d808a35d",
        },
      })
        .then((response) => {
          this.fechas = response.data.data.covid19Stats;
          let provincias = [];
          let totalConfirmados = [];
          let totalFallecidos = [];

          const datanew = this.fechas.reduce((acumulador, valor) => {
            const elementoYaExiste = acumulador.find(
              (elemento) => elemento.province == valor.province
            );

            if (elementoYaExiste) {
              return acumulador.map((elemento) => {
                if (elemento.province === valor.province) {
                  return {
                    ...elemento,

                    confirmed: elemento.confirmed + valor.confirmed,
                    deaths: elemento.deaths + valor.deaths,
                  };
                }
                return elemento;
              });
            }
            return [...acumulador, valor];
          }, []);

          Object.keys(datanew).forEach((e) => {
            datanew[e].province != null
              ? provincias.push(datanew[e].province)
              : provincias.push(datanew[e].country),
              totalConfirmados.push(datanew[e].confirmed);
            totalFallecidos.push(datanew[e].deaths);
          });

          this.series = [
            {
              name: "Confirmados",
              data: totalConfirmados,
            },
            { name: "Fallecidos", data: totalFallecidos },
          ];
          this.chartOptions1 = {
            xaxis: {
              categories: provincias,
            },
          };
          this.chartOptions = {
            xaxis: {
              categories: provincias,
            },
          };
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.progressBarG = false;
        });
    },
  },
  created() {
    this.ObtenerPais();
    this.ObtenerPoblacion();
    this.ObtenerGraficos();
  },
};
</script>
