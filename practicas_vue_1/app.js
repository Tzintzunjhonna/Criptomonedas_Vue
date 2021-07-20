//Inicializamos el tabajo para Vue
new Vue ({
  el: '#app',

  //Definimos los datos a traer curso, Horas, y un array vacío para el llenado
  data (){
    return {
      curso: '',
      horas: 0,
      arraycurso:[],
     
    }
  },

//Es el computed o el que devuelve el valor a al DOM
  computed:{
    // Funcion que devuelve el nombre del Curso
    titleCurso () {
      return this.curso
    },
    //Función que devuelve el total de horas 
    // Con un for en el array antes creado vacio
    totalHoras () {
      var tiempo = 0
      this.arraycurso.forEach(p => {
        tiempo += parseInt(p.horas)        
      });
      return tiempo
    }
  },

  // Son los metodos de eventos
  methods: {
    
    // Se guardan los valores del DOM y los guarda en un array
    saveCurso () {
      var cursos = {curso:this.curso, horas:this.horas}
      this.arraycurso.push(cursos)

      this.curso = ''
      this.horas = null
      console.log(this.arraycurso)
      console.log(this.horas)
    }
  },
})