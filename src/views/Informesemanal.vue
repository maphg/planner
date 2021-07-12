<template>
   <div class="contenedor">
      <section class="rm">
         <h1>RM</h1>
      </section>
      <section class="cmu">
         <h1>cmu</h1>
      </section>
      <section class="pvr">
         <h1>pvr</h1>
      </section>
      <section class="cap">
         <h1>cap</h1>
      </section>
      <section class="sdq">
         <h1>sdq</h1>
      </section>
      <section class="puj">
         <h1>puj</h1>
      </section>
   </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contendor {
   scroll-snap-type: y mandatory;
   overflow-y: scroll;
   height: 100vh;
   display: flex;
   flex-direction: column;
}

section {
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   scroll-snap-align: start;
}

.rm {
   background: rgb(36, 164, 138);
}
.cmu {
   background: rgb(211, 79, 79);
}
.pvr {
   background: rgb(67, 91, 175);
}
.cap {
   background: rgb(36, 164, 138);
}
.sdq {
   background: rgb(211, 79, 79);
}
.puj {
   background: rgb(67, 91, 175);
}
</style>
