Vue.component('modal',{

  //pasar propiedades a html
  props: ['title'],

  // este metodo es para poder cerrar el modal
  // con .$emit puede mandar un nombre para identificar en elemento hijo

  methods: {
    cierramodal(){
      this.$emit('cierra-modal')
    },
  },

  // template es donde agregas todo el codigo html
  template:
  `
  <div class="modal-mask"  >
      <div class="modal-wrapper">
        <div class="modal-container">
          <h2>{{ title }}</h2>
          <div>
            <slot name="cuerpo-modal"></slot>
          </div>
          <footer>
            <button v-on:click="cierramodal">Cerrar</button>
          </footer>
        </div>
      </div>
    </div>
  `  
})

// inicializas Vue para identificar al div en html
new Vue ({
  el: '#app',

  data () {
    return {

      // creas los datos que llamaras al DOM
      title: 'Este es el modal...',
      mostrarmodal: false,
    }
  },

  methods: {
    // Metodo para poder cerrar el 
    mostrarModal() {
      this.mostrarmodal = !this.mostrarmodal
      
    },
  },
  
})