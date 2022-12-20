<template>
  <div>
    <header class="main-header header-three">
      <div class="header-top text-center text-white bg-blue py-5">
        <div class="container rel z-1">
          <div class="rounded float-left">
            <div class="logo">
              <a href="/home">
                <img
                  src="assets/images/logos/logo_imako.png"
                  height="40"
                  width="180"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
          <p>
            <em
              >"Cela semble toujours impossible, Jusqu'à ce qu'on le fasse."</em
            >
          </p>
          <img
            class="header-left-shape"
            src="assets/images/shapes/header-top-left.png"
            alt="shape"
          />
          <img
            class="header-right-shape slideLeftRight infinite"
            src="assets/images/shapes/header-top-right.png"
            alt="shape"
          />
        </div>
      </div>
      <div class="header-upper">
        <div class="container clearfix">
          <div class="header-inner py-20">
            <!-- <div class="logo-outer">
              <div class="logo">
                <a href="/home">
                  <img
                    src="assets/images/logos/logo_imako.png"
                    height="100"
                    width="100"
                    alt="Logo"
                  />
                </a>
              </div>
            </div> -->
            <div
              class="nav-outer d-flex align-items-center clearfix mx-lg-auto"
            >
              <!--  <nav class="main-menu navbar-expand-lg"> -->
              <!--  <div class="navbar-header">
                           <div class="logo-mobile">
                              <a href="/home">
                                 <img src="assets/images/logos/ci_energies.png" alt="Logo">
                              </a>
                           </div>
                           <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="main-menu">
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                           </button>
                        </div> -->
              <!-- <div class="navbar-collapse collapse clearfix" id="main-menu">
                           <ul class="navigation clearfix">
                              <li  v-bind:class="{current: scrollPosition < 100}">
                                 <a href="#accueil" v-smooth-scroll>Accueil</a>
                              </li>
                              <li v-bind:class="{current: scrollPosition >= 800 && scrollPosition <= 1700}">
                                 <a href="#operations" v-smooth-scroll>Opérations</a>
                              </li>
                              <li v-bind:class="{current: scrollPosition >= 1700 && scrollPosition <= 4100}">
                                 <a href="#services" v-smooth-scroll>Services</a>
                              </li>
                              <li v-bind:class="{current: scrollPosition >= 4100}">
                                 <a href="#contact" v-smooth-scroll>Contact</a>
                              </li>
                           </ul>
                        </div> -->
              <!-- </nav> -->
            </div>
            <!-- <div class="menu-right d-none d-lg-flex align-items-center">
                     
                        <a v-smooth-scroll v-bind:class="{current: scrollPosition >= 7100}" 
                           href="#register" class="login">Ouvrir un compte <i class="fas fa-lock"></i></a>
                    
                     <a :style="{'text-transform': 'none'}" :href="'http://10.10.0.200:8021'" target="_blank" class="theme-btn style-two">Se connecter <i class="fas fa-arrow-right"></i></a>
                  </div> -->
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      console.log(this.scrollPosition);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped></style>
