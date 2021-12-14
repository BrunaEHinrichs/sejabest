<template>
  <div class="">
    <div class="tw-w-full  tw-flex ">
      <div class="tw-w-1/2">
          <img src="/images/home-eq.png" class="tw-w-7/12 sm:tw-w-full tw-mr-auto tw-ml-auto"/>
      </div>
      <div class="tw-w-1/2 tw-mt-auto tw-mb-auto ">
        <div class="tw-w-full sm:tw-px-4 tw-px-14">
            <div class="tw-text-main tw-text-4xl md:tw-text-3xl
            tw-font-semibold linegradient3 sm:tw-text-lg">
                Home Equity:
                o Crédito com Garantia de Imóvel.
            </div>
            <div class="tw-text-gray-600 tw-py-4 sm:tw-text-ms">
                Financie seu imóvel com as melhores condições do mercado.
                Tudo de forma online, digital, transparente e com o auxílio
                do nosso time de especialistas!
                Faça uma simulação!
            </div>
            <button class="tw-px-8 sm:tw-px-4 tw-mb-6 tw-py-2 tw-bg-main tw-text-white tw-rounded-xl
            tw-transition tw-duration-500 tw-ease-in-out tw-transform sm:tw-text-sm
            hover:tw-translate-y-1 hover:tw-scale-105">
                <router-link to="/simulator" class="tw-w-full " >Quero simular agora!</router-link>
            </button>
            <div class="tw-w-full tw-flex sm:tw-hidden md:tw-hidden">
                <div class="tw-w-1/3 tw-flex tw-pl-3">
                    <img src="/icons/calendar.png" class="tw-w-12 tw-h-12"/>
                    <div class="tw-pl-2">
                        <div class="tw-text-main tw-text-lg">Prazo</div>
                        <div class="tw-text-sm tw-text-gray-600">de até 240 meses</div>
                    </div>

                </div>
                <div class="tw-w-1/3 tw-flex tw-pl-3">
                    <img src="/icons/home.png" class="tw-w-12 tw-h-12"/>
                    <div class="tw-pl-2">
                        <div class="tw-text-main tw-text-lg">Imóvel</div>
                        <div class="tw-text-sm tw-text-gray-600">regular</div>
                    </div>

                </div>
                <div class="tw-w-1/3 tw-flex tw-pl-3">
                    <img src="/icons/porcento.png" class="tw-w-12 tw-h-12"/>
                    <div class="tw-pl-2">
                        <div class="tw-text-main tw-text-lg">Taxas</div>
                        <div class="tw-text-sm tw-text-gray-600">a partir de 0,79%</div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="tw-w-full tw-border-t-1 tw-border-gray-300
     tw-py-4 tw-flex xl:tw-hidden lg:tw-hidden">
                <div class="tw-w-1/3 tw-flex tw-pl-3">
                    <div class="tw-mt-auto tw-mb-auto">
                        <img src="/icons/calendar.png" class="tw-w-10 tw-h-10"/>
                    </div>
                     <div class="tw-pl-2">
                        <div class="tw-text-main ">Prazo</div>
                        <div class="tw-text-ms tw-text-gray-600">de até 240 meses</div>
                    </div>

                </div>
                <div class="tw-w-1/3 tw-flex tw-pl-3">
                    <img src="/icons/home.png" class="tw-w-10 tw-h-10"/>
                    <div class="tw-pl-2">
                        <div class="tw-text-main ">Imóvel</div>
                        <div class="tw-text-ms tw-text-gray-600">regular</div>
                    </div>

                </div>
                <div class="tw-w-1/3 tw-flex tw-pl-3">
                    <img src="/icons/porcento.png" class="tw-w-10 tw-h-10"/>
                    <div class="tw-pl-2">
                        <div class="tw-text-main ">Taxas</div>
                        <div class="tw-text-ms tw-text-gray-600">a partir de 0,79%</div>
                    </div>

                </div>
    </div>
    <div class="tw-w-full  sm:tw-hidden tw-flex tw-bg-main">
      <div class="tw-w-1/2">
          <img src="/images/foto_casal.png" class="tw-w-full"/>
      </div>
      <div class="tw-w-1/2 tw-mt-auto tw-mb-auto tw-pl-4">
        <div class="tw-w-full tw-pr-14 sm:tw-pr-4">
            <div class="tw-text-white tw-text-4xl md:tw-text-3xl
            tw-font-semibold linegradient2">
                Financiamento  imobiliário
            </div>
            <div class="tw-text-white tw-py-4 ">
                Financie seu imóvel com as melhores condições do mercado.
                Tudo de forma online, digital, transparente e com o auxílio
                do nosso time de especialistas!
                Faça uma simulação!
            </div>
            <button class="tw-px-8 tw-mb-6 tw-py-2 tw-bg-white tw-text-main tw-rounded-xl
            tw-transition tw-duration-500 tw-ease-in-out tw-transform
            hover:tw-translate-y-1 hover:tw-scale-105">
                <router-link to="/simulator" class="tw-w-full " >Quero simular agora!</router-link>
            </button>
        </div>
      </div>
    </div>
    <div class="tw-w-full xl:tw-hidden lg:tw-hidden md:tw-hidden tw-bg-main">
      <div class="tw-w-full">
          <img src="/images/foto2.png" class="tw-w-full"/>
      </div>
      <div class="tw-w-10/12  tw-pl-4">

        <div class="tw-text-white tw-text-4xl tw-font-semibold linegradient2">
            Financiamento  imobiliário
        </div>
        <div class="tw-text-white tw-py-4 ">
                Financie seu imóvel com as melhores condições do mercado.
                Tudo de forma online, digital, transparente e com o auxílio
                do nosso time de especialistas!
                Faça uma simulação!
        </div>

      </div>
      <div class="tw-text-center tw-pt-4 tw-pb-8">
            <button class="tw-px-12 tw-py-2 tw-bg-white tw-text-main tw-rounded-xl
                tw-transition tw-duration-500 tw-ease-in-out tw-transform
                hover:tw-translate-y-1 hover:tw-scale-105">
                    <router-link to="/simulator" class="tw-w-full " >Quero simular agora!
                    </router-link>
            </button>
        </div>
    </div>
    <div class="tw-w-full tw-pt-15 tw-flex xl:tw-border-b-1 tw-border-gray-300">

      <div class="tw-w-7/12 sm:tw-w-full tw-mt-auto tw-mb-auto sm:tw-px-4 tw-px-14">
        <div class="tw-w-11/12 md:tw-w-full sm:tw-w-full  ">
            <div class="tw-text-main tw-text-4xl md:tw-text-3xl
            tw-font-semibold linegradient3 sm:tw-text-2xl tw-pt-4">
                Como funciona? A gente te explica
            </div>
            <div class="tw-text-gray-600 tw-py-4 sm:tw-text-ms">
                <div class="tw-py-3 tw-border-b-1 tw-border-gray-300">
                    <span class="tw-text-2xl  tw-text-main">
                    1. Simule e solicite </span><br/>
                    Informe os seus dados e os dados do imóvel.
                </div>
                <div class="tw-py-3 tw-border-b-1 tw-border-gray-300">
                    <span class="tw-text-2xl  tw-text-main">
                    2. Envie seus documentos </span><br/>
                    Para que possamos verificar a veracidade dos seus dados.
                </div>
                <div class="tw-py-3 tw-border-b-1 tw-border-gray-300">
                    <span class="tw-text-2xl tw-text-main">
                    3. Acompanhe o processo </span><br/>
                    Acompanhe o andamento da sua solicitação na sua conta, sem esforço.
                </div>
                <div class="tw-py-3 tw-border-b-1 tw-border-gray-300">
                    <span class="tw-text-2xl  tw-text-main">
                    3. Acompanhe o processo de Avaliação do imóvel </span><br/>
                    Acompanhe o andamento da sua solicitação na sua conta, sem esforço.
                </div>
                <div class="tw-py-3 tw-border-b-1 tw-border-gray-300">
                    <span class="tw-text-2xl  tw-text-main">
                    4. Liberação do recurso </span>

                </div>
            </div>
            <div class="tw-text-center tw-py-6">
                <button class="tw-px-8  tw-py-2 tw-bg-main tw-text-white tw-rounded-xl
                tw-transition tw-duration-500 tw-ease-in-out tw-transform sm:tw-text-sm
                hover:tw-translate-y-1 hover:tw-scale-105">
                    <router-link to="/simulator" class="tw-w-full " >Quero simular agora!
                    </router-link>
                </button>
            </div>
        </div>
      </div>
      <div class="tw-w-5/12 tw-mb-0 tw-mt-auto sm:tw-hidden">
          <img src="/images/mulherPhone.png" class="sm:tw-w-full tw-w-7/12
          tw-mr-auto tw-ml-auto"/>
      </div>
    </div>

    <div class="tw-w-full xl:tw-py-24 tw-flex tw-flex-wrap">
      <div class="tw-w-5/12 sm:tw-w-full tw-mb-0 tw-mt-auto ">
          <img src="/images/acompanhamento-628x1024.png" class="sm:tw-w-full tw-w-7/12
          tw-mr-auto tw-ml-auto"/>
      </div>
      <div class="tw-w-7/12 sm:tw-w-full tw-mt-auto tw-mb-auto sm:tw-px-4 tw-px-14">
        <div class="tw-w-full  ">
            <div class="tw-text-main tw-text-4xl md:tw-text-3xl
            tw-font-semibold linegradient3 sm:tw-text-3xl tw-pt-4">
                Simples e Transparente.
            </div>
            <div class="tw-text-main tw-text-xl
            tw-font-semibold  tw-pt-4">
                Desafiando o sistema tradicional, pré-aprove o seu crédito em até 20min.
            </div>
            <div class="tw-text-gray-600 tw-py-4">
                Comprar ou refinanciar uma casa leva tempo, paciência e, tradicionalmente,
                muita papelada. Desmontamos a antiga infraestrutura de hipotecas e a
                substituímos por tecnologia inovadora e muito menos barreiras.
            </div>
            <div class="tw-text-center">
                <button class="tw-px-8 tw-mb-4 tw-py-2 tw-bg-main tw-text-white tw-rounded-xl
                tw-transition tw-duration-500 tw-ease-in-out tw-transform sm:tw-text-sm
                hover:tw-translate-y-1 hover:tw-scale-105">
                    <router-link to="/simulator" class="tw-w-full " >Quero simular agora!
                    </router-link>
                </button>
            </div>
        </div>
      </div>

    </div>

     <div class="tw-w-full xl:tw-py-24 tw-flex tw-flex-wrap sm:tw-px-4 tw-px-14">

      <div class="tw-w-7/12 sm:tw-w-full tw-mt-auto tw-mb-auto sm:tw-pr-4 tw-pr-14">
        <div class="tw-w-full  ">
            <div class="tw-text-main tw-text-4xl md:tw-text-3xl
            tw-font-semibold linegradient3 sm:tw-text-3xl tw-pt-4">
                Quem já acreditou em nós
            </div>
            <div class="tw-text-gray-600 tw-py-4">
                Eleita e selecionada pelos principais programas de startups da Améria Latina e
                 do Brasil, a SejaBest é uma das principais Fintechs do mercado.
            </div>
        </div>
      </div>
      <div class="tw-w-5/12 sm:tw-w-full tw-mb-0 tw-mt-auto ">
          <img src="/images/apoiadores.png" class="tw-w-full
          tw-mr-auto tw-ml-auto"/>
      </div>

    </div>
    <div class="tw-w-full xl:tw-py-12 tw-mb-8 sm:tw-px-4 tw-px-14">
        <div class="tw-w-full tw-mb-12 tw-text-center tw-text-main tw-text-4xl md:tw-text-3xl
            tw-font-semibold linegradient3 sm:tw-text-3xl tw-pt-4">
                Nossos números
        </div>
        <div class="tw-w-full tw-pt-8 xl:tw-flex lg:tw-flex md:tw-flex
         tw-justify-center tw-flex-wrap tw-text-main">
            <div class="tw-text-center tw-px-8 tw-pb-8 tw-mb-auto tw-mt-auto">
                <img src="/icons/users.png" class="tw-w-28 tw-ml-auto tw-mr-auto"/>
                <div class="tw-text-2xl tw-font-semibold">+ 1000</div>
                <div class="tw-text-lg">Propostas por mês</div>
            </div>
            <div class="tw-text-center tw-px-8 tw-pb-8 tw-mb-auto tw-mt-auto">
                <img src="/icons/money.png" class="tw-w-20 tw-h-auto tw-ml-auto tw-mr-auto"/>
                <div class="tw-text-2xl tw-font-semibold">+ R$150 milhões</div>
                <div class="tw-text-lg">emprestados </div>
            </div>
            <div class="tw-text-center tw-px-8 tw-pb-8 tw-mb-auto tw-mt-auto">
                <img src="/icons/car.png" class="tw-w-20 tw-h-auto tw-ml-auto tw-mr-auto"/>
                <div class="tw-text-2xl tw-font-semibold">+ R$2.5 bilhões </div>
                <div class="tw-text-lg">em solicitações </div>
            </div>
        </div>
    </div>
    <div class="tw-w-full tw-flex  tw-pt-8 sm:tw-px-4 tw-px-14 tw-bg-main">
        <div class="tw-w-5/12 sm:tw-w-1/2 tw-pt-24">
            <img src="/images/best.png" class="tw-w-full
          tw-mr-auto tw-ml-auto"/>
        </div>
        <div class="sm:tw-w-1/2 tw-text-center tw-mb-auto tw-mt-auto">
            <div class="tw-text-white tw-text-4xl md:tw-text-3xl sm:tw-text-2xl
            tw-font-semibold linegradient2 tw-mb-4">
                E ai, vem ser Best com a gente?
            </div>
            <button class="tw-px-8 sm:tw-px-4 tw-mb-6 tw-py-2 tw-bg-white tw-text-main tw-rounded-xl
            tw-transition tw-duration-500 tw-ease-in-out tw-transform
            hover:tw-translate-y-1 hover:tw-scale-105">
                <router-link to="/simulator" class="tw-w-full " >Quero simular agora!</router-link>
            </button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeEquity',
  data() {
    return {
      openSidebar: false,
    };
  },
  methods: {
    OCSidebar() {
      this.openSidebar = !this.openSidebar;
    },
  },
});
</script>
