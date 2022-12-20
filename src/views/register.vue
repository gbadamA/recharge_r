<template>
  <div>
    <div class="page-wrapper">
      <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage"
      ></loading>
      <div v-if="loader" class="preloader"></div>
      <div class="page-holder align-items-center py-4 bg-gray-100 vh-100">
        <div class="container">
          <!-- <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="Home-Associations ">
                <div class="col-sm-4" style="">
                  <ul class="Features--List" style="">
                    <li class="Features--ListItem" style="">
                      <a
                        href="assets/images/login_inscription.png"
                        id="Showcase_HomeAsso_Features_Create_Membership"
                        class=""
                        style=""
                      >
                        <figure class="Features--ListItemImage" style="">
                          <div style="">
                            <i class="fa fa-user fa-xxl" style=""></i>
                          </div>
                          <figcaption>
                            <h4 class="h5">PERSONNE PHYSIQUE</h4>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                    <li class="Features--ListItem">
                      <a
                        href="assets/images/login_inscription.png"
                        id="Showcase_HomeAsso_Features_Create_Event"
                        class=""
                        style=""
                      >
                        <figure class="Features--ListItemImage" style="">
                          <div><i class="fa fa-legal fa-xxl" style=""></i></div>
                          <figcaption>
                            <h4 class="h5">PERSONNE MORALE</h4>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                    <li class="Features--ListItem">
                      <a
                        href="assets/images/login_inscription.png"
                        id="Showcase_HomeAsso_Features_Create_Donation"
                        class=""
                        style=""
                      >
                        <figure class="Features--ListItemImage" style="">
                          <div style="">
                            <i class="icon-group fa-xxl"></i>
                          </div>
                          <figcaption>
                            <h4 class="h5" style="">GROUPEMENT</h4>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> -->
          <div class="row align-items-center">
            <!-- register -->
            <div class="col-lg-6 px-lg-4">
              <div class="cardy">
                <div class="card-body p-lg-5">
                  <button
                    @click="$router.go(-1)"
                    class="
                      btn btn-gray
                      float-right
                      rounded
                      shadow-lg
                      rounded
                      bg-light
                    "
                  >
                    <i class="fa fa-arrow-left fa-2xl"></i>&nbsp; Retour
                  </button>
                  <h2 class="mb-4">Inscription</h2>
                  <p class="text-md mb-5">
                    Renseignez le formulaire pour vous inscrire.
                  </p>
                  <form class="formy">
                  <h4 class="mb-4">Je suis un•e <span class="text-danger">*</span></h4>
                      <div class="Home-Associations">
                        <div  style="justify-content-center">
                          <ul class="Features--List" style="">
                            <li
                              class="Features--ListItem"
                              v-for="el in customEntite"
                              :class=" el.class"
                              @click="changeHelpType(el.id)"
                              :key="el.id"
                              :id="el.id"
                            >
                              <a :v-model="idProfil">
                                <figure
                                  class="Features--ListItemImage"
                                  style=""
                                >
                                  <div style="">
                                    <i style="background-color:#263849;" :class="['fas', el.icon]"></i>
                                  </div>
                                  <figcaption>
                                    <h4 class="h5">{{ el.title }}</h4>
                                  </figcaption>
                                </figure>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    <div class="row">
                      <!-- <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingProfil" class="form-label">
                          <b>Je suis <span class="text-danger">*</span></b>
                        </label>
                        <div class="form-group">
                          <VueSelectInputUi
                            v-model="idProfil"
                            :border-radius="4"
                            class="mb-3"
                            id="VueSelectInput3"
                            name="VueSelectInput3"
                            label="Selectionnez l'entité"
                            validColor="#0698d5"
                            :size="'lg'"
                            :options="[
                              { label: 'PERSONNE PHYSIQUE', value: '0' },
                              { label: 'PERSONNE MORALE', value: '1' },
                              { label: 'GROUPEMENT', value: '2' },
                            ]"
                          />
                        </div>
                      </div> -->
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="username" class="form-label">
                          <b
                            >{{ champ1 }} <span class="text-danger">*</span></b
                          ></label
                        >
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="username"
                            v-model="nom"
                            type="text"
                            :placeholder="placeholder1"
                            required
                          />
                        </div>
                      </div>
                      <div
                        class="col-sm-6 form-floating mb-3"
                        v-if="active_id === '2'"
                      >
                        <label for="floatingProfil" class="form-label">
                          <b>{{ champ2 }} <span class="text-danger">*</span></b>
                        </label>
                        <div class="form-group">
                          <VueSelectInputUi
                            v-model="raison_social"
                            :border-radius="4"
                            class="mb-3"
                            id="VueSelectInput3"
                            name="VueSelectInput3"
                            label="Selectionnez la raison sociale"
                            validColor="#0698d5"
                            :size="'lg'"
                            :options="[
                              { label: 'SARL - SOCIÉTÉ A RESPONSABILITE LIMITE', value: '3' },
                              { label: 'SASU - SOCIÉTÉ PAR ACTIONS SIMPLIFIÉE UNIPERSONNELLE', value: '4' },
                              { label: 'SA - SOCIÉTÉ ANONYME', value: '5' },
                              { label: 'SAS - SOCIÉTÉ ANONYME SIMPLIFIÉE', value: '6' },
                              { label: 'SNC - SOCIÉTÉ EN NOM COLLECTIF ', value: '7' },
                              { label: 'EURL - ENTREPRISE UNIPERSONNELLE', value: '8' },
                            ]"
                          />
                        </div>
                      </div>
                      <div
                        class="col-sm-6 form-floating mb-3"
                        v-if="active_id !== '2'"
                      >
                        <label for="username" class="form-label">
                          <b
                            >{{ champ2 }} <span class="text-danger">*</span></b
                          ></label
                        >
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="username"
                            v-model="prenom"
                            type="text"
                            :placeholder="placeholder2"
                            required
                          />
                        </div>
                        <!-- :disabled="!nom" -->
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingEmail" class="form-label">
                          <b
                            >{{ champ3 }} <span class="text-danger">*</span></b
                          ></label
                        >
                        <!-- :disabled="!profil" -->
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="floatingEmail"
                            v-model="email"
                            type="email"
                            :placeholder="placeholder3"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingContact" class="form-label">
                          <b
                            >{{ champ4 }} <span class="text-danger">*</span></b
                          ></label
                        >
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="floatingContact"
                            v-model="contact"
                            v-mask="'## ## ## ## ##'"
                            type="tel"
                            :placeholder="placeholder4"
                            required
                          />
                        </div>
                        <!-- :disabled="!email"  -->
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingLocalisation" class="form-label">
                          <b
                            >{{ champ5 }} <span class="text-danger">*</span></b
                          ></label
                        >
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="floatingLocalisation"
                            v-model="localisation"
                            type="text"
                            :placeholder="placeholder5"
                            required
                          />
                        </div>
                        <!-- :disabled="!contact" -->
                      </div>
                    </div>
                    <button
                      class="btn btn-primary"
                      style="background-color: #0698d5"
                      id="regidter"
                      type="button"
                      name="registerSubmit"
                      @click="sign_up"
                    >
                      <!-- :disabled="!localisation" -->
                      Inscription
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div
              class="
                col-lg-6 col-xl-5
                ms-xl-auto
                px-lg-4
                text-center text-primary
              "
            >
              <img
                class="img-fluid mb-4"
                width="300"
                src="assets/images/login_inscription.png"
                alt=""
                style="transform: rotate(10deg)"
              />
              <h1 class="mb-4" style="color: #0698d5">
                SMART-R<br class="d-none d-lg-inline" />
              </h1>
              <p class="lead text-muted">
                Plateforme en ligne de rechargement et d'achat de credits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap-vue/dist/bootstrap-vue.min.css";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import VueSelectInputUi from "vue-select-input-ui";
import "vue-select-input-ui/dist/vue-select-input-ui.css";
import Swal from "sweetalert2";
import Config from "../../config.json";
// import $ from "jquery";

export default {
  components: {
    Loading,
    VueSelectInputUi,
  },
  data: function () {
    return {
      isLoading: false,
      loader: true,
      nom: null,
      prenom: null,
      email: null,
      contact: null,
      id_profil: null,
      localisation: null,
      listProfil: [],
      fullPage: true,
      raison_social: null,
      active_id: null,
      champ1: null,
      champ2: null,
      champ3: null,
      champ4: null,
      champ5: null,
      placeholder1: null,
      placeholder2: null,
      placeholder3: null,
      placeholder4: null,
      placeholder5: null,
      arrayList: [
        {
          icon: "fa fa-user fa-xs",
          title: "PERSONNE PHYSIQUE",
          id: "0",
          class: "active",
        },

        {
          icon: "fa fa-legal fa-xs",
          title: "PERSONNE MORALE",
          id: "1",
          class: "",
        },

        {
          icon: "fa fa-users fa-xs",
          title: "GROUPEMENT",
          id: "2",
          class: "",
        },
      ],
    };
  },

  computed: {
    customEntite() {
      return this.arrayList.map((item) => {
        item.class = this.active_id === item.id ? "active" : "";
        return item;
      });
    },

    idProfil: {
      get() {
        this.newEntite();
        return this.id_profil;
      },
      set(id) {
        if (id) {
          this.id_profil = id;
          console.log("id profil is :", this.id_profil);
        } else {
          this.id_profil = id;
        }
      },
    },
  },

  mounted() {
    this.hideLoader();
    // this.getAllProfil();
  },

  methods: {
    hideLoader() {
      setTimeout(() => {
        this.loader = false;
      }, 1000);
    },

    newEntite() {
      if (this.active_id === "2") {
        (this.champ1 = "Récépissé de déclaration"),
          (this.placeholder1 = "0xx"),
          (this.champ2 = "Raison sociale"),
          (this.placeholder2 = "SARL"),
          (this.champ3 = "Responsable"),
          (this.placeholder3 = "Imako");
      } else if (this.active_id === "1") {
        (this.champ1 = "Nom de l’entité"), (this.placeholder1 = "imako ci");
        (this.champ2 = "Représentant légal"),
          (this.placeholder2 = "M. xxx"),
          (this.champ3 = "Email"),
          (this.placeholder3 = "imako@mail.com");
        (this.champ4 = "Contact"),
          (this.placeholder4 = "01 00 00 00 00"),
          (this.champ5 = "Localisation"),
          (this.placeholder5 = "Cocody");
      } else {
        (this.champ1 = "Nom"), (this.placeholder1 = "Imako");
        (this.champ2 = "Prénoms"),
          (this.placeholder2 = "Digital"),
          (this.champ3 = "Email"),
          (this.placeholder3 = "Imako@mail.com");
        (this.champ4 = "Contact"),
          (this.placeholder4 = "01 00 00 00 00"),
          (this.champ5 = "Localisation");
        this.placeholder5 = "Cocody";
      }
    },

    onSelectEntite(event) {
      let data = event.target.value;
      console.log("data is:", data);
    },

    changeHelpType(item) {
      (this.active_id = item), console.log("active_id:", item);
    },

    getAllProfil() {
      this.isLoading = true;
      axios
        .get(`${Config.BASE_URL}login/getAllProfil`)
        .then((response) => {
          this.isLoading = false;
          console.log("profil is :", response);
          this.listProfil = [...response.data];
          this.listProfil.forEach(
            (element) => (element.label = element.libelle)
          );
        })
        .catch((error) => {
          console.log("error");
          this.isLoading = false;
          this.$toast.open({
            message: `${JSON.stringify(error)}`,
            type: "error",
          });
        });
    },

    sign_up() {
      this.isLoading = true;
      const data = {
        nom: this.nom,
        prenom: this.prenom,
        id_profil: this.idProfil,
        email: this.email,
        contact: this.contact,
        localisation: this.localisation,
        user_id: 0,
      };
      axios
        .post(`${Config.BASE_URL}login/register_user`, data)
        .then((response) => {
          console.log(response);
          if (response.data.error === false) {
            this.isLoading = false;
            Swal.fire({
              icon: "success",
              confirmButtonColor: "#0698d5",
              title: "SMART-R",
              text: response.data.message,
            }).then(() => {
              window.location.href = "http://10.10.0.200:8021/";
            });
          } else {
            this.isLoading === false;
            Swal.fire({
              icon: "error",
              confirmButtonColor: "#0698d5",
              title: "SMART-R",
              text: response.data.message,
            });
            // Swal.fire('Incorrect...',response.data.message, 'error');
          }
        })
        .catch((error) => {
          this.isLoading = false;
          this.$toast.open({
            position: "top-right",
            message: JSON.stringify(error),
            type: "error",
          });
        });
    },
  },
};
</script>

 <style>
.cardy {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  border-radius: 1rem;
}
.bg-gray-100 {
  background-color: #f8f9fa !important;
}

.text-primary {
  color: #4650dd !important;
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  font-weight: 700;
  line-height: 1.2;
}²

.text-muted {
  color: #6c757d !important;
}

.lead {
  font-size: 1.125rem;
  font-weight: 300;
}

.text-sm {
  font-size: 0.7875rem !important;
}

h3,
.h3 {
  font-size: 1.575rem;
}

.page-holder {
  display: flex;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 72px);

  flex-wrap: wrap;
}

.formy .form-control::placeholder {
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  color: #141125;
  font-family: "Poppins", sans-serif;
}

.formy .form-control:focus {
  border-color: #0698d5;
  background: 0 0;
}

.formy .form-control {
  border-width: 0 0 2px;
  border-width: 2px 2px 2px 2px;
  /* padding: 20px 20px 20px; */
  border-radius: 2;
  border-color: #0698d5;
}

.formy .form-group {
  margin-bottom: 10px;
}

/* li.active {
  background-color: red;
} */

.Home-Associations .Features--List {
  margin: 8;
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.Home-Associations .Features--ListItem {
  width: 100%;
  height: 4rem;
  margin: 5 !important;
}

.Home-Associations .Features--ListItem:last-of-type {
  margin-bottom: 0;
}

.Home-Associations .Features--ListItemImage {
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
}

.Home-Associations .Features--ListItemImage i {
  color: #4c40cf;
  /* font-size: 3.6rem; */
  font-size: 1.5rem;
}

.Home-Associations .Features--ListItemImage > div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
}

.Home-Associations .Features--ListItemImage h4 {
  margin: 0;
}

.Home-Associations .Features--ListItemProgress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0.3rem;
  /* background-color: #49d38a; */
  transition: all 0.15s ease;
}

.Home-Associations .Features--ListItem > a {
  position: relative;
  display: block;
  width: 97%;
  height: 90%;
  padding: 0.5rem;
  overflow: hidden;
  color: #2e2f5e;
  font-weight: 600;
  /* font-size: 1.8rem; */
  text-decoration: none;
  background-color: #fff;
  border: 0.1rem solid #d1d6de;
  border-radius: 0.6rem;
  transition: all 0.15s ease;
}

.Home-Associations .Features--List > li.active {
  transform: translateY(-0.5rem);
  color: #c0f307;
  font-weight: 600;
  /* font-size: 1.8rem; */
  text-decoration: none;
  /* transition: all 0.15s ease; */
}

.Home-Associations .Features--ListItem > a:hover {
  /* border: 0.1rem solid #4c40cf; */
  outline: 0;
  box-shadow: 0 0 0 0.4rem rgba(76, 64, 207, 0.25);
  background-color: #8acce9;
}

.Home-Associations .Features--ListItem > a:focus {
  border: 0.1rem solid #4c40cf;
  box-shadow: 0 0 2rem rgba(46, 47, 94, 0.25);
  transform: translateY(-0.5rem);
}

</style>