<template>
  <div>
    <div>
      <navBar />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverTextCheck: false,
    };
  },
  mounted() {
    import("aos/dist/aos.css");
    import("aos").then((AOS) => {
      AOS.init();
    });
  },
  methods: {
    goToMainPage() {
      setTimeout(() => {
        this.$router.replace({ path: "/InteractiveRating" });
      }, 500);
    },
  },
};
</script>

<style scoped></style>
>
