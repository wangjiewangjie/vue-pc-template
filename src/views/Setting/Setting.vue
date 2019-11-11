<template>
  <div>
    {{ $route.name }}
    <router-link to="/admin">home</router-link>
  </div>
</template>

<script>
import { demo } from "@/api/api";
export default {
  created() {
    demo({}).then(res => {
      console.log(res);
    });
  }
};
</script>
