//Crear un nuevo componente 

Vue.component('CoinDetail', {

// Pasar las propiedades a html con las propiedades correspondientes
  props: ['coin'],

  data () {
    return {
      showPrices: false,
      value:0,

      
    }
  },

  methods: {

    toggleShowPrices () {
      this.showPrices = !this.showPrices
    }
  },

  computed:{

    //Mostrar el nombre del Bitcoin
    title () {
      return `${this.coin.name} - ${this.coin.symbol}`
    },

    // Convertir el valor ingresado a el valor de bitcoin
    convertedValue () {
      if (!this.value) {
        return 0
      }

      return this.value / this.coin.prices
    }
  },

  template:
  
  `
  <div>
      <img
        v-on:mouseover="toggleShowPrices"
        v-on:mouseout="toggleShowPrices"
        v-bind:src="coin.img"
        alt="coin.name"
      />

    <!-- Mostrar titulo con computed -->

      <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
        {{ title }}
        <span v-if="coin.changePercent > 0">👍</span>
        <span v-else-if="coin.changePercent < 0">👎</span>
        <span v-else>👩‍🦱</span>

        <!-- boton mostrar precios con cambio de emoji -->

        <span v-on:click="toggleShowPrices">
          Ver precios{{ showPrices ? '👼' : '👮‍♀️' }}
        </span>
      </h1>

    <input type="number" v-model="value" />
    <span> {{ convertedValue }} </span>

    <ul v-show="showPrices">
        <!-- Mostrar precios de un color dependiendo los precios -->

        <li
          class="uppercase"
          v-bind:class="{ orange: p.value == coin.prices, red: p.value < coin.prices, green: p.value > coin.prices }"
          v-for="(p, i) in coin.pricesWithDays"
          v-bind:key="p.day"
        >
          {{ i }} - {{ p.day }} - {{ p.value }}
        </li>
      </ul>

  </div>

  `
})

new Vue ({
  el: '#app',

  data () {
    return {
      btc:{
        name: 'Bitcoin',
        symbol: 'BTC',
        img :'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: -10,
        prices: 8400,
        pricesWithDays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9000 },
          { day: 'Viernes', value: 9400 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 },
      ],
    },
      
      color: '#000000',
      
    }
  },





    // methods:{
    //   //Mostrar lista de los precios
    //   toggleShowPrices () {
    //     this.showPrices = !this.showPrices

    //     // Convertir el color de background a su formato reverso
    //     this.color = this.color.split('').reverse().join('')
    //   }
    // }
})