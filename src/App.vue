<template>
  <div id="app" class="tw-w-full tw-h-full">
    <router-view/>
  </div>
</template>

<style lang="scss">

html, body {
  background-image: url('/images/fundo.png'); background-size: cover;
  display: table;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;

  }
.fundo{
  background: rgb(0,99,242);
  background: linear-gradient(45deg, rgba(0,99,242,1) 0%,
   rgba(5,36,221,1) 50%, rgba(16,6,159,1) 100%);
}

.borderMain:hover{
  border-bottom: 3px solid;
  border-image-slice: 1;
  border-image-source:linear-gradient(45deg, rgba(0,99,242,1) 0%,
   rgba(5,36,221,1) 50%, rgba(16,6,159,1) 100%);
}
.textMain:hover{
   background: rgb(0,99,242);
   background: linear-gradient(45deg, rgba(0,99,242,1) 0%,
   rgba(5,36,221,1) 50%, rgba(16,6,159,1) 100%);
  /* agora colocamos o fundo gradiente dentro do texto com essa propriedade */
  background-clip: text;
  -webkit-background-clip: text;

  /* a cor do texto deve estar como transparent */
  color: transparent;
}
.textGradient{
   background: rgb(0,99,242);
   background: linear-gradient(45deg, rgba(0,99,242,1) 0%,
   rgba(5,36,221,1) 50%, rgba(16,6,159,1) 100%);
  /* agora colocamos o fundo gradiente dentro do texto com essa propriedade */
  background-clip: text;
  -webkit-background-clip: text;

  /* a cor do texto deve estar como transparent */
  color: transparent;
}
.linegradient2{
  border-bottom: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(45deg, rgba(0,99,242,0) 0%,
   rgba(5,36,221,1) 20%, rgba(39,224,255,1) 56%);
}
.linegradient3{
  border-bottom: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(45deg, rgba(0,99,242,0) 0%,
  rgba(255,255,255,1) 0%, rgba(39,224,255,1) 56%);
}
.fundo2{
  background: rgb(0,99,242);
  background: linear-gradient(45deg, rgba(0,99,242,0) 0%,
 rgba(5,36,221,1) 20%, rgba(39,224,255,1) 56%);
}
.fundoImg{
  background-image: url('/images/BG-Landingpage.png'); background-size: cover;
  display: table;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
}
</style>
