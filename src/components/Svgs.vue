<template>
   <div>{{ x }}</div>
</template>

<script>
export default {
   props: {
      icono: {
         type: String,
         required: true,
      },
   },
   setup(props) {
      const x = "x";
      return { x };
   },
};
</script>

<style></style>
