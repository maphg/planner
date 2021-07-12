<template>
   <!-- <div id="nav">
      <router-link to="/">Home</router-link>
   </div> -->
   <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#app {
   font-family: "Poppins", sans-serif;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
}

.fw-100 {
   font-weight: 100;
}
.fw-200 {
   font-weight: 200;
}
.fw-300 {
   font-weight: 300;
}
.fw-400 {
   font-weight: 400;
}
.fw-500 {
   font-weight: 500;
}
.fw-600 {
   font-weight: 600;
}
.fw-700 {
   font-weight: 700;
}
.fw-800 {
   font-weight: 800;
}

.zia {
   @apply bg-zia-300 text-zia-500;
}
.zic {
   @apply bg-zic-300 text-zic-500;
}
.zie {
   @apply bg-zie-300 text-zie-500;
}
.zil {
   @apply bg-zil-300 text-zil-500;
}
.zhc {
   @apply bg-zhc-300 text-zhc-500;
}
.activo {
   @apply bg-gris-300 text-gray-500 shadow;
}
</style>
