<script>
  import Capitalizacion from '../Components/capitalizacion.svelte';
  import Gradientes from '../Components/gradientes.svelte';
  import Amortizacion from './../Components/amortizacion.svelte';
  import Anualidades from './../Components/anualidades.svelte';
  import IntCompuesto from './../Components/intCompuesto.svelte';
  import IntSimple from './../Components/intSimple.svelte';

  let formModalIntSimple = false;
  let formModalIntCompuesto = false;
  let formModalAnualidades = false;
  let formModalAmortizacion = false;
  let showCapitalizacionModal = false;
  let showGradientesModal = false
</script>

A
<div class="flex flex-wrap justify-center">
  <div class="flex flex-col items-center mx-4 my-8">
    <IntSimple bind:formModalIntSimple={formModalIntSimple} />
    <p class="font-bold text-justify w-80 text-gray-900 dark:text-white">Es aquel en el cual el capital cambia al final de cada periodo, debido a que los intereses se adicionan al capital para formar un nuevo capital denominado monto y sobre este monto volver a calcular intereses, es decir, hay capitalización de los intereses.</p>
    <img src="src\Images\intSimple.png" alt="Fórmula de Interés Simple" class="mt-4 h6" />
    <img src="src\Images\intCom2.png" alt="Fórmula de Interés Simple" class="mt-4 h6" />

  </div>

  <div class="fflex flex-col items-center pt-9">
    <IntCompuesto bind:formModalIntCompuesto={formModalIntCompuesto} />
    <p class="font-bold text-justify w-80 text-gray-900 dark:text-white content-center">Es aquel que se va sumando al capital inicial y sobre el que se van generando nuevos intereses. El dinero, en este caso, tiene un efecto multiplicador porque los intereses producen nuevos intereses.</p>
    <img src="src\Images\intCompuesto.png" alt="Fórmula de Interés Compuesto" class="mt-4 h-15" />
  </div>

  <div class="flex flex-col items-center mx-4 my-8">
    <Anualidades bind:formModalAnualidades={formModalAnualidades} />
    <p class="font-bold text-justify w-80 text-gray-900 dark:text-white">Se consideran anualidades los dividendos sobre acciones, los fondos de amortización, los pagos a plazos, los pagos periódicos de las compañías de seguro.</p>
    <img src="src\Images\anualidades.png" alt="Fórmula de Anualidades" class="mt-4 h-16" />
  </div>

  <div class="flex flex-col items-center mx-4 my-8">
    <Amortizacion bind:formModalAmortizacion={formModalAmortizacion} />
    <p class="font-bold text-justify w-80 text-gray-900 dark:text-white">La amortización es específicamente la disminución del valor de un monto hasta que se pague por completo. Si vamos directamente a este término aplicado a un crédito, la amortización es el proceso mediante el cual se distribuyen gradualmente los costos de una deuda por medio de pagos periódicos.</p>

    <img src="src\Images\amortizacion.png" alt="Fórmula de Amortización" class="mt-4 h-16" />
  </div>

  <div class="flex flex-col items-center mx-4 my-8">
    <Capitalizacion bind:showCapitalizacionModal={showCapitalizacionModal} />
    <p class="font-bold text-justify w-80 text-gray-900 dark:text-white">Es la cantidad de interés que produce una cierta cantidad de dinero durante n periodos de tiempo, es decir, es determinar su valor futuro de una cantidad presente.</p>
    <img src="src\Images\capitalizacion.png" alt="Fórmula de Capitalización" class="mt-4 h-10" />
  </div>
  <div class="flex flex-col items-center mx-4 my-8">
    <Gradientes bind:showGradientesModal={showGradientesModal} />
    <p class="font-bold text-justify w-80 text-gray-900 dark:text-white">El gradiente aritmético es una serie de pagos o retiros que se hacen con una periodicidad constante al inicio o al final de cada periodo y en donde cada pago o retiro va variando una cantidad constante "
      P", en cada periodo subsiguiente.</p>
    <img src="src\Images\gradienteF.png" alt="Fórmula de Capitalización" class="mt-4 h-10" />
    <img src="src\Images\gradientePP.png" alt="Fórmula de Capitalización" class="mt-4 h-10" />
    <img src="src\Images\gradieneteA.png" alt="Fórmula de Capitalización" class="mt-4 h-10" />
    
  </div>
</div>
