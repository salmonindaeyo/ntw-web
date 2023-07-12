<template>
  <div>
    <div
      data-aos="zoom-in"
      class="desktop mt-[24px] flex flex-col justify-center items-center w-full"
    >
      <div class="flex flex-row justify-center">
        <img src="/pic/logo.svg" />
      </div>
      <div class="flex flex-row justify-center gap-[100px] mt-[16px]">
        <div
          :class="
            $route.name === item.name
              ? 'border-b-[4px] border-nut'
              : 'hover:border-b-[2px] border-black'
          "
          class="font-medium cursor-pointer transition-all duration-100"
          v-for="(item, index) in navList"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="mobile relative">
      <div class="absolute top-2 right-2 w-full flex justify-between p-4 z-10">
        <div />
        <img
          v-if="!showMobileMenu"
          src="/pic/navbar.svg"
          width="30px"
          @click="showMenu"
        />
        <img v-else src="/pic/close.svg" width="20px" @click="showMenu" />
      </div>

      <transition name="fade">
        <div
          v-if="showMobileMenu"
          class="absolute top-4 w-full nav-content flex-col gap-[24px] justify-center items-center"
        >
          <div class="flex justify-center">
            <img
              src="/pic/logo.svg"
              width="130px"
              class="transition-all duration-500"
            />
          </div>

          <div
            class="flex justify-center mt-4"
            v-for="(item, index) in navList"
            :key="index"
          >
            {{ item.name }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { name: "home", useRouter: true, link: "/" },
        { name: "about", useRouter: true, link: "/" },
        { name: "experience", useRouter: true, link: "/" },
        { name: "showcase", useRouter: true, link: "/" },
        { name: "contact", useRouter: true, link: "/" },
      ],
      hoverTextCheck: false,
      showMobileMenu: false,
    };
  },
  mounted() {
    import("aos/dist/aos.css");
    import("aos").then((AOS) => {
      AOS.init();
    });
  },
  methods: {
    goToHomePage() {
      this.$router.replace({ path: "/" });
    },
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    openLink(useRouter, linkName) {
      if (useRouter) {
        this.$router.push(linkName);
      } else {
        window.open(linkName, "_blank");
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.nav-bgcolor {
  background: rgb(162, 29, 6);
  background: linear-gradient(90deg, #cc331d, #c5240d, #890002);
  transition: background-color 0.5s ease;
}

.mobile {
  display: none;
}

.desktop {
  display: block;
}

.nav-content {
  transition: all 0.2s ease-out;
}

@media screen and (max-width: 768px) {
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
}
</style>
