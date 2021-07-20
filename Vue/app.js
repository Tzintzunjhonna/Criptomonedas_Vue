new Vue ({
  el: '#app',

  data () {
    return {
      name: 'Bitcoin',
      symbol: 'BTC',
      img :'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: -10,
      value : 0,
      color: '#000000',
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
      showPrices: false
    }
  },

  computed:{

    //Mostrar el nombre del Bitcoin
    title () {
      return `${this.name} - ${this.symbol}`
    },

    // Convertir el valor ingresado a el valor de bitcoin
    convertedValue () {
      if (!this.value) {
        return 0
      }

      return this.value / this.prices
    }
  },

  // trackear o rastrear propiedades en tiempo real, movimientos que se hacen
  watch: {
    showPrices (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },

  methods:{
    //Mostrar lista de los precios
    toggleShowPrices () {
      this.showPrices = !this.showPrices

      // Convertir el color de background a su formato reverso
      this.color = this.color.split('').reverse().join('')
    }
  }
})