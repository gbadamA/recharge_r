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
                    <i class="fa fa-arrow-left fa-2xl"></i>&nbsp; accueil
                  </button>
                  <h2 class="mb-4">Inscription</h2>
                  <p class="text-muted text-md mb-5">
                    Renseignez le formulaire pour vous inscrire.
                  </p>
                  <form class="formy">
                    <div class="row">
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="username" class="form-label">
                          <b>Nom <span class="text-danger">*</span></b></label
                        >
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="username"
                            v-model="nom"
                            type="text"
                            placeholder="Imako"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="username" class="form-label">
                          <b
                            >Prénoms <span class="text-danger">*</span></b
                          ></label
                        >
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="username"
                            v-model="prenom"
                            type="text"
                            placeholder="Solutions"
                            required
                          />
                        </div>
                        <!-- :disabled="!nom" -->
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingProfil" class="form-label">
                          <b>Profil <span class="text-danger">*</span></b>
                        </label>
                        <div class="form-group">
                          <VueSelectInputUi
                            v-model="id_profil"
                            :border-radius="4"
                            class="mb-3"
                            id="VueSelectInput3"
                            name="VueSelectInput3"
                            label="Selectionnez le profil"
                            validColor="#0698d5"
                            :size="'lg'"
                            :options="[
                              { label: 'ROOT', value: '19' },
                              { label: 'ADMINISTRATEUR', value: '1' },
                              { label: 'USER', value: '2' },
                            ]"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingEmail" class="form-label">
                          <b>Email <span class="text-danger">*</span></b></label
                        >
                        <!-- :disabled="!profil" -->
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="floatingEmail"
                            v-model="email"
                            type="email"
                            placeholder="imako@email.com"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingContact" class="form-label">
                          <b
                            >Contact <span class="text-danger">*</span></b
                          ></label
                        >
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="floatingContact"
                            v-model="contact"
                            v-mask="'## ## ## ## ##'"
                            type="tel"
                            placeholder="01 00 00 00 00"
                            required
                          />
                        </div>
                        <!-- :disabled="!email"  -->
                      </div>
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingLocalisation" class="form-label">
                          <b
                            >Localisation <span class="text-danger">*</span></b
                          ></label
                        >
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="floatingLocalisation"
                            v-model="localisation"
                            type="text"
                            placeholder="Cocody"
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
    };
  },
  mounted() {
    this.hideLoader();
    this.getAllProfil();
  },

  methods: {
    hideLoader() {
      setTimeout(() => {
        this.loader = false;
      }, 1000);
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
        id_profil: this.id_profil,
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
            })
            .then(() => {
              window.location.href = "http://10.10.0.200:8021/";
            });
          } else {
            this.isLoading === false;
            Swal.fire({
              icon: "error",
              confirmButtonColor: "#0698d5",
              title: "SMART-R",
              text: response.data.message,
            })
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
}

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
</style>