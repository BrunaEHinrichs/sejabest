<template>
  <div class="tw-w-full  tw-pb-24">
    <div v-if="index < 6" class="tw-flex tw-w-full tw-justify-center tw-py-12 ">
        <div @click="index=0" class="tw-w-9 tw-h-9 tw-text-center
         tw-rounded-full tw-py-1 tw-cursor-pointer tw-transition
         tw-duration-500 tw-ease-in-out tw-transform hover:tw-translate-y-1 hover:tw-scale-110"
        :class="{'tw-text-gray-600 tw-border-1 tw-border-gray-600':
        (registrationStep[0].isFilled===false && registrationStep[0].step===true),
        'tw-text-gray-400 tw-border-1 tw-border-gray-400':
        (registrationStep[0].isFilled===false && registrationStep[0].step===false),
        'tw-text-white tw-bg-green-500':
        (registrationStep[0].isFilled===true && registrationStep[0].step===false)}">
           1
        </div>
        <div class=" tw-w-4 xl:tw-w-24 lg:tw-w-24 md:tw-w-12
         tw-border-1 tw-border-gray-400 tw-mt-auto tw-mb-auto"></div>
        <div @click="index=1" class="tw-w-9 tw-h-9 tw-text-center
         tw-rounded-full tw-py-1 tw-cursor-pointer tw-transition
         tw-duration-500 tw-ease-in-out tw-transform hover:tw-translate-y-1 hover:tw-scale-110"
        :class="{'tw-text-gray-600 tw-border-1 tw-border-gray-600':
        (registrationStep[1].isFilled===false && registrationStep[1].step===true),
        'tw-text-gray-400 tw-border-1 tw-border-gray-400':
        (registrationStep[1].isFilled===false && registrationStep[1].step===false),
        'tw-text-white tw-bg-green-500':
        (registrationStep[1].isFilled===true && registrationStep[1].step===false)}">
           2
        </div>
        <div class=" tw-w-4 xl:tw-w-24 lg:tw-w-24 md:tw-w-12
        tw-border-1 tw-border-gray-400 tw-mt-auto tw-mb-auto"></div>
        <div @click="index=2" class="tw-w-9 tw-h-9 tw-text-center
         tw-rounded-full tw-py-1 tw-cursor-pointer tw-transition
         tw-duration-500 tw-ease-in-out tw-transform hover:tw-translate-y-1 hover:tw-scale-110"
        :class="{'tw-text-gray-600 tw-border-1 tw-border-gray-600':
        (registrationStep[2].isFilled===false && registrationStep[2].step===true),
        'tw-text-gray-400 tw-border-1 tw-border-gray-400':
        (registrationStep[2].isFilled===false && registrationStep[2].step===false),
        'tw-text-white tw-bg-green-500':
        (registrationStep[2].isFilled===true && registrationStep[2].step===false)}">
           3
        </div>
        <div class=" tw-w-4 xl:tw-w-24 lg:tw-w-24 md:tw-w-12
         tw-border-1 tw-border-gray-400 tw-mt-auto tw-mb-auto"></div>
        <div @click="index=3" class="tw-w-9 tw-h-9 tw-text-center
         tw-rounded-full tw-py-1 tw-cursor-pointer tw-transition
         tw-duration-500 tw-ease-in-out tw-transform hover:tw-translate-y-1 hover:tw-scale-110"
        :class="{'tw-text-gray-600 tw-border-1 tw-border-gray-600':
        (registrationStep[3].isFilled===false && registrationStep[3].step===true),
        'tw-text-gray-400 tw-border-1 tw-border-gray-400':
        (registrationStep[3].isFilled===false && registrationStep[3].step===false),
        'tw-text-white tw-bg-green-500':
        (registrationStep[3].isFilled===true && registrationStep[3].step===false)}">
           4
        </div>
        <div class=" tw-w-4 xl:tw-w-24 lg:tw-w-24 md:tw-w-12
         xl:tw-w-24 tw-border-1 tw-border-gray-400 tw-mt-auto tw-mb-auto"></div>
        <div @click="index=4" class="tw-w-9 tw-h-9 tw-text-center
         tw-rounded-full tw-py-1 tw-cursor-pointer tw-transition
         tw-duration-500 tw-ease-in-out tw-transform hover:tw-translate-y-1 hover:tw-scale-110"
        :class="{'tw-text-gray-600 tw-border-1 tw-border-gray-600':
        (registrationStep[4].isFilled===false && registrationStep[4].step===true),
        'tw-text-gray-400 tw-border-1 tw-border-gray-400':
        (registrationStep[4].isFilled===false && registrationStep[4].step===false),
        'tw-text-white tw-bg-green-500':
        (registrationStep[4].isFilled===true && registrationStep[4].step===false)}">
         5
        </div>
        <div class=" tw-w-4 xl:tw-w-24 lg:tw-w-24 md:tw-w-12
        tw-border-1 tw-border-gray-400 tw-mt-auto tw-mb-auto"></div>
        <div @click="index=5" class="tw-w-9 tw-h-9 tw-text-center
         tw-rounded-full tw-py-1 tw-cursor-pointer tw-transition
         tw-duration-500 tw-ease-in-out tw-transform hover:tw-translate-y-1 hover:tw-scale-110"
        :class="{'tw-text-gray-600 tw-border-1 tw-border-gray-600':
        (registrationStep[5].isFilled===false && registrationStep[5].step===true),
        'tw-text-gray-400 tw-border-1 tw-border-gray-400':
        (registrationStep[5].isFilled===false && registrationStep[5].step===false),
        'tw-text-white tw-bg-green-500':
        (registrationStep[5].isFilled===true && registrationStep[5].step===false)}">
         6
        </div>
    </div>
    <div class="tw-w-8/12 md:tw-w-full sm:tw-w-full tw-p-4 tw-mr-auto tw-ml-auto ">
        <div v-if="index === 0" class="tw-text-center">
            <div class="tw-text-xl tw-text-main">
                Vamos começar? É Financiamento ou Refinanciamento?
            </div>
            <div class=" tw-text-gray-600 tw-pb-4"> Para
                podermos escolher o melhor produto para você, vamos começar
                entendendo a modalidade do crédito.
            </div>
            <div class="tw-pt-8">
              <button class="tw-p-4 tw-w-full tw-border-1 tw-border-gray-300 tw-rounded-xl
                tw-transition tw-duration-500 tw-ease-in-out tw-transform sm:tw-text-sm
                hover:tw-translate-y-1 hover:tw-scale-105" @click="selectItem('comprar')">
                <div class="tw-flex">
                    <div>
                      <img src="https://simulador.seja.best/assets/svg/dinheiro-edu.svg"
                      class="tw-w-auto tw-h-12 "/>
                    </div>
                    <div class="tw-mt-auto tw-pl-4 tw-text-2xl tw-text-main tw-mb-auto">
                        Quero comprar um imóvel
                    </div>
                </div>
              </button>
            </div>
            <div class="tw-pt-8">
              <button class="tw-p-4 tw-w-full tw-border-1 tw-border-gray-300 tw-rounded-xl
                tw-transition tw-duration-500 tw-ease-in-out tw-transform sm:tw-text-sm
                hover:tw-translate-y-1 hover:tw-scale-105" @click="selectItem('refinanciar')">
                <div class="tw-flex">
                    <div>
                      <img src="https://simulador.seja.best/assets/svg/comprar.svg"
                      class="tw-w-auto tw-h-12 "/>
                    </div>
                    <div class="tw-mt-auto tw-pl-4 tw-text-2xl tw-text-main tw-mb-auto">
                        Quero empréstimo usando o meu imóvel
                    </div>
                </div>
              </button>
            </div>
        </div>
        <div v-if="index === 1" class="tw-text-center">
            <div class="tw-text-xl tw-text-main">
                Em quanto tempo pretende comprar o imóvel?
            </div>
            <div class=" tw-text-gray-600 tw-pb-4"> Para
                Com isso entendemos sua urgência em conseguir o crédito.
            </div>
            <div class="tw-pt-8">
              <select class="tw-p-4 tw-w-full tw-bg-white tw-border-1
              tw-border-gray-300 tw-rounded-xl"
                v-model="data.purchaseTime" @change="selectItem('')">
                  <option value="">Selecione uma das opções
                  </option>
                  <option value="imediatamente">imediatamente
                  </option>
                  <option value=" em até 1 mês">em até 1 mês
                  </option>
                  <option value=" em até 3 mês">em até 3 mês
                  </option>
                  <option value=" em até 3 mês">acima de 3 mês
                  </option>
              </select>
            </div>
        </div>
        <div v-if="index === 2" class="tw-text-center">
            <div class="tw-text-xl tw-text-main">
                Qual o perfil do imóvel?
            </div>
            <div class=" tw-text-gray-600 tw-pb-4"> Para
                Selecione o tipo do imóvel que irá utilizar como garantia
            </div>
            <div class="tw-pt-8">
              <select class="tw-p-4 tw-w-full tw-bg-white tw-border-1
              tw-border-gray-300 tw-rounded-xl"
                v-model="data.propertyType" @change="selectItem(data.propertyType)">
                  <option value="">Selecione uma das opções
                  </option>
                  <option value="casa">Casa
                  </option>
                  <option value="Apartamento">Apartamento
                  </option>
                  <option value="Sala comercial">Sala comercial
                  </option>
                  <option value="Terreno">Terreno
                  </option>
                  <option value="Galpão">Galpão
                  </option>
                  <option value="fabrica">Fabrica
                  </option>
                  <option value="outros">Outros
                  </option>
              </select>
              <div v-if="data.propertyType==='Terreno'">
                 <div class="tw-text-xl tw-py-4 tw-text-main">
                   Este terreno é em um condomínio fechado?
                </div>
                <select class="tw-p-4 tw-w-full tw-bg-white tw-border-1
                tw-border-gray-300 tw-rounded-xl"
                    v-model="data.isCondominium" @change="selectItem('')">
                    <option value="">Selecione uma das opções
                    </option>
                    <option value="Terreno em condomínio">Sim
                    </option>
                    <option value="Terreno fora de condomínio">Não
                    </option>
                </select>
            </div>
            </div>
        </div>
        <div v-if="index === 3" class="tw-text-center">
            <div class="tw-text-xl tw-text-main">
                Qual prazo você prefere?
            </div>
            <div class=" tw-text-gray-600 tw-pb-4"> Para
               Escolha a quantidade de parcelas que acredita se encaixar em sua renda.
            </div>
            <div class="tw-pt-8">
              <select class="tw-p-4 tw-w-full tw-bg-white tw-border-1
              tw-border-gray-300 tw-rounded-xl"
                v-model="data.parcel" @change="selectItem('')">
                  <option value="">Selecione uma das opções
                  </option>
                  <option value="120 meses">120 meses
                  </option>
                  <option value="180 meses">180 meses
                  </option>
                  <option value="240 meses">240 meses
                  </option>
                  <option value="360 meses">360 meses
                  </option>
              </select>
            </div>
        </div>
        <div v-if="index === 4" class="tw-text-center">
            <div class="tw-text-xl tw-text-main">
                Quais os valores da operação?
            </div>
            <div class=" tw-text-gray-600 tw-pb-4"> Para
               Por favor preencha os dados para gerarmos a simulação, estamos quase lá :D
            </div>
            <div class="tw-pt-8 tw-text-left">
              <div class="tw-text-sec">Valor aproximado do imóvel</div>
              <input class="tw-p-4 tw-w-full tw-bg-white tw-border-1
              tw-border-gray-300 tw-rounded-xl" v-model="data.propertyValue" >
              <div class=" tw-mt-4 tw-text-sec">Valor do empréstimo</div>
              <input class="tw-p-4 tw-w-full tw-bg-white tw-border-1
              tw-border-gray-300 tw-rounded-xl" v-model="data.value" >
              <button v-if="data.propertyValue!==0 && data.value!==0"
              class="tw-w-full tw-my-4 tw-py-2 tw-bg-main tw-text-white tw-rounded-xl
                tw-transition tw-duration-500 tw-ease-in-out tw-transform sm:tw-text-sm
                hover:tw-translate-y-1 hover:tw-scale-105" @click="next()" >
                Continuar</button>
            </div>
        </div>
        <div  v-if="index === 5" >
            <div class="tw-text-xl tw-text-main">
                Ufa... chegamos lá, últimos dados:
            </div>
            <div class=" tw-text-gray-600 tw-pb-4"> Para
               Por favor preencha os dados para gerarmos agora sua simulação.
            </div>

            <div class="tw-w-full tw-flex tw-flex-wrap">
                <div class="tw-w-1/2 sm:tw-w-full tw-pr-3 sm:tw-pr-0 tw-pt-4">
                  <div class="tw-text-sec">Nome</div>
                  <input v-model="data.user.name" required
                        class="tw-p-4 tw-w-full tw-bg-white tw-border-1
                    tw-border-gray-400 tw-rounded-xl " type="text"
                      placeholder="Nome"   >
                </div>
                <div class="tw-w-1/2 sm:tw-w-full tw-pt-4">
                <div class="tw-text-sec">CPF</div>
                  <input v-model="data.user.doc" required
                        class="tw-p-4 tw-w-full tw-bg-white tw-border-1
                    tw-border-gray-400 tw-rounded-xl " type="text"
                      placeholder="000.000.000-00"   >
                </div>
            </div>
            <div class="tw-w-full tw-flex tw-flex-wrap ">
                <div class="tw-w-1/2 sm:tw-w-full tw-pr-3 sm:tw-pr-0 tw-pt-4">
                  <div class="tw-text-sec">Ocupação</div>
                  <select class="tw-p-4 tw-w-full tw-bg-white tw-border-1
                    tw-border-gray-400 tw-rounded-xl "
                        v-model="data.user.occupation">
                        <option value="">Selecione uma das opções
                        </option>
                        <option value="Assalariado">Assalariado
                        </option>
                        <option value="Aposentado">Aposentado
                        </option>
                        <option value="Pensionista">Pensionista
                        </option>
                        <option value="Autônomo">Autônomo
                        </option>
                        <option value="Empresário">Empresário
                        </option>
                         <option value="Profissional Liberal">Profissional Liberal
                        </option>
                    </select>
                </div>
                <div class="tw-w-1/2 sm:tw-w-full tw-pt-4">
                 <div class="tw-text-sec">Renda total</div>
                  <input v-model="data.user.income"
                    required
                        class="tw-p-4 tw-w-full tw-bg-white tw-border-1
                    tw-border-gray-400 tw-rounded-xl " type="text"
                      placeholder="renda total"   >
                </div>
            </div>
            <div class="tw-w-full tw-flex tw-flex-wrap">
                <div class="tw-w-1/2 sm:tw-w-full tw-pr-3 sm:tw-pr-0 tw-pt-4">
                  <div class="tw-text-sec">Data de Nascimento</div>
                  <input v-model="data.user.birthDate" required
                        class="tw-p-4 tw-w-full tw-bg-white tw-border-1
                    tw-border-gray-400 tw-rounded-xl " type="date"
                    >
                </div>
                <div class="tw-w-1/2 sm:tw-w-full tw-pt-4">
                <div class="tw-text-sec">CEP do Imóvel</div>
                  <input v-model="data.user.cep" required
                        class="tw-p-4 tw-w-full tw-bg-white tw-border-1
                    tw-border-gray-400 tw-rounded-xl " type="text"
                      placeholder="00000-000"   >
                </div>
            </div>
             <div class="tw-w-full tw-flex tw-flex-wrap">
                <div class="tw-w-1/2 sm:tw-w-full tw-pr-3 sm:tw-pr-0 tw-pt-4">
                  <div class="tw-text-sec">Celular</div>
                  <input v-model="data.user.phone" required
                        class="tw-p-4 tw-w-full tw-bg-white tw-border-1
                    tw-border-gray-400 tw-rounded-xl " type="text"
                    >
                </div>
                <div class="tw-w-1/2 sm:tw-w-full tw-pt-4">
                <div class="tw-text-sec">E-mail</div>
                  <input v-model="data.user.email" required
                        class="tw-p-4 tw-w-full tw-bg-white tw-border-1
                    tw-border-gray-400 tw-rounded-xl " type="text"
                      placeholder="seu e-mail"   >
                </div>
            </div>
            <button
              class="tw-w-full tw-my-4 tw-py-2 tw-bg-main tw-text-white tw-rounded-xl
                tw-transition tw-duration-500 tw-ease-in-out tw-transform sm:tw-text-sm
                hover:tw-translate-y-1 hover:tw-scale-105" @click="verifyInfoUser()" >
                Simular</button>
        </div>
        <div v-if="index === 6" class="tw-text-center tw-text-main tw-py-12 tw-text-4xl">
           Sua simulação foi efetuada com sucesso!
           TEXTO ILUSTRATIVO
        </div>
    </div>
    <BaseNotification v-if="notification!==null"
     :notification="notification"
     @closeNotification="notification.showMessage= $event"/>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';
import BaseNotification from '@/components/base/BaseNotification.component.vue';

export default defineComponent({
  name: 'Simulator',
  components: {
    BaseNotification,
  },
  data() {
    return {
      index: 0,
      vmask: '',
      registrationStep: [
        {
          isFilled: false,
          step: true,
        },
        {
          isFilled: false,
          step: true,
        },
        {
          isFilled: false,
          step: true,
        },
        {
          isFilled: false,
          step: true,
        },
        {
          isFilled: false,
          step: true,
        },
        {
          isFilled: false,
          step: true,
        },
      ],
      notification: {
        type: '',
        title: '',
        message: '',
        showMessage: false,
      },
      data: {
        type: '',
        purchaseTime: '',
        propertyType: '',
        isCondominium: '',
        parcel: '',
        time: '',
        propertyValue: 0,
        value: 0,
        user: {
          name: '',
          doc: '',
          occupation: '',
          income: '',
          birthDate: '',
          cep: '',
          phone: '',
          email: '',
        },
      },
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: ' #',
        precision: 2,
        masked: false
        }
    };
  },
  methods: {
    back() {
      this.index -= 1;
    },
    next() {
      this.registrationStep[this.index].step = false;
      this.registrationStep[this.index].isFilled = true;
      this.index += 1;
      this.registrationStep[this.index].step = true;
    },
    selectItem(item: string) {
      if (this.index === 0) {
        this.data.type = item;
        this.next();
      } else if (this.index !== 0 && item !== 'Terreno') {
        this.next();
      }
    },
    verifyInfoUser() {
      if(this.data.user.name === '') {
        this.notification= {
          type: 'info',
          title: 'Aviso',
          message: 'Informe o nome do solicitante',
          showMessage: true,
       }
      } else if(this.data.user.doc === '') {
        this.notification= {
          type: 'info',
          title: 'Aviso',
          message: 'Informe o CPF do solicitante',
          showMessage: true,
        }
      } else if(this.data.user.occupation === '') {
        this.notification= {
          type: 'info',
          title: 'Aviso',
          message: 'Informe a sua ocupação',
          showMessage: true,
        }
      }
      else if(this.data.user.income === '') {
        this.notification= {
          type: 'info',
          title: 'Aviso',
          message: 'Informe a sua renda',
          showMessage: true,
        } ;
      } else if(this.data.user.birthDate === '') {
        this.notification= {
          type: 'info',
          title: 'Aviso',
          message: 'Informe a sua data de nascimento',
          showMessage: true,
        } ;
      } else if(this.data.user.cep === '') {
        this.notification= {
          type: 'info',
          title: 'Aviso',
          message: 'Informe o cep do imóvel',
          showMessage: true,
        } ;
      } else if(this.data.user.phone === '') {
        this.notification= {
          type: 'info',
          title: 'Aviso',
          message: 'Informe o seu celular',
          showMessage: true,
        } ;
      } else if(this.data.user.email === '') {
        this.notification= {
          type: 'info',
          title: 'Aviso',
          message: 'Informe o seu email',
          showMessage: true,
        } ;
      }else {
        this.next();
      }


    },
  },
});
</script>
