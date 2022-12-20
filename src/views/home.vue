<template>
  <div>
    <div class="page-wrapper">
      <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage"
      ></loading>
      <div v-if="loader" class="preloader"></div>
      <Header />
      <!-- Hero Section Start -->
      <section
        id="register"
        class="about-section-three rel z-1 pt-100 rpt-100 pb-100"
        :style="{ 'background-color': '#ebedf5' }"
      >
        <div class="container">
          <!-- <div class="page-holder align-items-center py-4 bg-gray-100 vh-100"> -->
          <!-- <div class="row justify-content-center text-center">
                <div class="col-xl-6 col-lg-8 col-md-10">
                  <div class="section-title mb-50">
                    <h2>Inscrivez-vous !</h2>
                  </div>
                </div>
              </div> -->
          <div class="row align-items-center">
            <!-- register -->
            <div class="col-lg-7 px-lg-3">
              <div class="cardy">
                <div class="card-body p-lg-5">
                  <!-- <h2 class="mb-4">Inscription</h2> -->

                  <form class="formy">
                    <h4 class="mb-4">
                      Renseigner le formulaire pour l'activation de postes
                      <span class="text-danger">*</span>
                    </h4>
                    <div class="row">
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingEmail" class="form-label">
                          <b>{{ champ7 }} </b></label
                        >
                        <!-- :disabled="!profil" -->
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="floatingEmail"
                            v-model="name"
                            type="text"
                            value="CIE"
                            :disabled="true"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingEmail" class="form-label">
                          <b
                            >{{ champ8 }} <span class="text-danger">*</span></b
                          ></label
                        >
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="floatingEmail"
                            v-model="email"
                            type="email"
                            :placeholder="placeholder8"
                            required
                          />
                        </div>
                        <!-- :disabled="!email"  -->
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingEmail" class="form-label">
                          <b
                            >{{ champ1 }} <span class="text-danger">*</span></b
                          ></label
                        >
                        <!-- :disabled="!profil" -->
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="floatingEmail"
                            v-model="nom"
                            type="text"
                            :placeholder="placeholder1"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingEmail" class="form-label">
                          <b
                            >{{ champ2 }} <span class="text-danger">*</span></b
                          ></label
                        >
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="floatingEmail"
                            v-model="prenoms"
                            type="text"
                            :placeholder="placeholder2"
                            required
                          />
                        </div>
                        <!-- :disabled="!email"  -->
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
                            v-model="dateDeCommande"
                            type="date"
                            :placeholder="placeholder3"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingEmail" class="form-label">
                          <b
                            >{{ champ4 }} <span class="text-danger">*</span></b
                          ></label
                        >
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="floatingEmail"
                            v-model="nombreDePoste"
                            type="number"
                            :placeholder="placeholder4"
                            required
                          />
                        </div>
                        <!-- :disabled="!email"  -->
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingEmail" class="form-label">
                          <b
                            >{{ champ5 }} <span class="text-danger">*</span></b
                          ></label
                        >
                        <!-- :disabled="!profil" -->
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="floatingEmail"
                            type="text"
                            v-model="numeroDebonDeCommande"
                            :placeholder="placeholder5"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 form-floating mb-3">
                        <label for="floatingEmail" class="form-label">
                          <b
                            >{{ champ6 }} <span class="text-danger">*</span></b
                          ></label
                        >
                        <div class="form-group">
                          <input
                            type="file"
                            ref="fileInput"
                            required
                            @change="uploadFile"
                            v-bind:disabled="isFileDownloading"
                          />
                        </div>
                      </div>
                      <div class="flex-column">
                        <div style="display: flex; justify-content: center">
                          <vue-recaptcha
                            sitekey="6Lf442gjAAAAAB179zr5HFN34yLfpDwScBRU_9-c"
                            :loadRecaptchaScript="true"
                            ref="recaptcha"
                            type="invisible"
                            @verify="handleSuccess"
                          ></vue-recaptcha>
                        </div>
                        <div
                          style="
                            display: flex;
                            justify-content: center;
                            margin-top: 20px;
                          "
                        >
                          <button
                            class="btn btn-primary active"
                            id="register"
                            name="registerSubmit"
                            @click.prevent="commande"
                            :disabled="isBtnDisabled || buttonDisabled"
                          >
                            Commander
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              class="col-lg-5 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"
            >
              <img
                class="img-fluid mb-4"
                width="300"
                src="assets/images/login_inscription.png"
                alt=""
                style="transform: rotate(10deg)"
              />
              <h1 class="mb-4" style="color: #0698d5">
                CSP<br class="d-none d-lg-inline" />
              </h1>
              <p class="lead text-muted">
                <strong>Cateli Smart Plateform</strong>
              </p>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </section>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import "bootstrap-vue/dist/bootstrap-vue.min.css";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { VueRecaptcha } from "vue-recaptcha";
import axios from "axios";
// import VueSelectInputUi from "vue-select-input-ui";
import "vue-select-input-ui/dist/vue-select-input-ui.css";
import Swal from "sweetalert2";
import Config from "../../config.json";

export default {
  components: {
    Loading,
    Header,
    VueRecaptcha,
    Footer,
    // VueSelectInputUi,
  },
  data: function () {
    return {
      recaptchaResponse: "",
      form: {
        recaptcha: "",
      },
      users: [],
      loading: false,
      etatRacaptcha: false,
      submitting: false,
      radioValue1: true,
      radioValue: true,
      radioTotal: true,
      counter: 0,
      list: [],
      sliderValue: 2,
      slide: 0,
      sliding: null,
      isLoading: false,
      recaptcha: "",
      buttonDisabled: false,
      loader: true,
      name: "CIE",
      nom: "",
      prenoms: "",
      email: "",
      dateDeCommande: "",
      numeroDebonDeCommande: "",
      file: null,
      nombreDePoste: "",
      isFileDownloading: false,
      listProfil: [],
      fullPage: true,
      loadingPage: true,
      champ1: "Nom",
      champ2: "Prénoms",
      champ3: "Date de la commande",
      champ4: "Nombre de postes",
      champ5: "Nº  du bon de commande",
      champ6: "Télécharger le bon de commande",
      champ7: "Client",
      champ8: "Email",
      etatRecaptcha:false,
      placeholder1: null,
      placeholder2: null,
      placeholder3: null,
      placeholder4: null,
      placeholder5: null,
      placeholder6: null,
      placeholder7: null,
      placeholder8: null,
      arrayList: [
        {
          icon: "fa fa-user fa-xs",
          title: "Personne physique",
          id: "3",
          class: "active",
        },

        {
          icon: "fa fa-legal fa-xs",
          title: "Personne morale",
          id: "1",
          class: "",
        },

        {
          icon: "fa fa-users fa-xs",
          title: "Groupement",
          id: "2",
          class: "",
        },
      ],
      API_URL: process.env.VUE_APP_ROOT_API,
    };
  },

  computed: {
    isBtnDisabled() {
      return (
        this.nom.length === 0 ||
        this.prenoms.length === 0 ||
        this.numeroDebonDeCommande.length === 0 ||
        this.nombreDePoste.length === 0 ||
        this.isFileDownloading === false ||
        this.email.length === 0 ||
        this.etatRecaptcha === false
      );
    },
  },
  mounted() {
    this.hideLoader();
    this.loadingPage = false;
    setTimeout(
      () =>
        (this.list = [
          {
            backgroundColor: "#3f51b5",
            width: "100%",
            height: "100%",
          },
          {
            backgroundColor: "#eee",
            width: "100%",
            height: "100%",
          },
          {
            backgroundColor: "#f44336",
            width: "100%",
            height: "100%",
          },
          {
            backgroundColor: "#eee",
            width: "100%",
            height: "100%",
          },
        ]),
      1000
    );
  },

  methods: {
    uploadFile() {
      this.file = this.$refs.fileInput.files[0];
      this.$set(this, 'isFileDownloading', true);
    },
    handleSuccess(response) {
      this.recaptchaResponse = response;
      this.etatRecaptcha = true;
      console.log(response);
    },
    handleClick() {
      this.buttonDisabled = true;
      // Faire autre chose ici
    },

    showMsgOk() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "Achat de crédit" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-center"] }, [
          " Test ",
          h("strong", "Image 1"),
          " message ",
        ]),
        h("p", { class: ["text-center"] }, [h("b-spinner")]),
        h("b-img", {
          props: {
            src: "../../public/assets/images/operations/achat-credit.png",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "circle",
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        centered: true,
        size: "lg",
      });
    },

    showMsgOk1() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "Achat de crédit" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-center"] }, [
          " Test ",
          h("strong", "Image 1"),
          " message ",
        ]),
        h("p", { class: ["text-center"] }, [h("b-spinner")]),
        h("b-img", {
          props: {
            src: "../../public/assets/images/operations/achat-credit.png",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "circle",
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk2() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "Achat de crédit" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-center"] }, [
          " Test ",
          h("strong", "Image 1"),
          " message ",
        ]),
        h("p", { class: ["text-center"] }, [h("b-spinner")]),
        h("b-img", {
          props: {
            src: "../../public/assets/images/operations/achat-credit.png",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "circle",
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk3() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "Achat de crédit" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-center"] }, [
          " Test ",
          h("strong", "Image 1"),
          " message ",
        ]),
        h("p", { class: ["text-center"] }, [h("b-spinner")]),
        h("b-img", {
          props: {
            src: "../../public/assets/images/operations/achat-credit.png",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "circle",
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk4() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "Achat de crédit" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-center"] }, [
          " Test ",
          h("strong", "Image 1"),
          " message ",
        ]),
        h("p", { class: ["text-center"] }, [h("b-spinner")]),
        h("b-img", {
          props: {
            src: "../../public/assets/images/operations/achat-credit.png",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "circle",
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk5() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "Achat de crédit" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-center"] }, [
          " Test ",
          h("strong", "Image 1"),
          " message ",
        ]),
        h("p", { class: ["text-center"] }, [h("b-spinner")]),
        h("b-img", {
          props: {
            src: "../../public/assets/images/operations/achat-credit.png",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "circle",
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        centered: true,
        size: "lg",
      });
    },
    changeIndex(index) {
      this.sliderValue = index;
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    hideLoader() {
      setTimeout(() => {
        this.loader = false;
      }, 1000);
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
              window.location.href = "http://localhost:8080/";
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

    commande() {
      var formdata = new FormData();
      
      
      formdata.append("bon_commande", this.file);
      formdata.append("operation", 'commande');
      formdata.append("type_transaction", 'simple');
      formdata.append("nom", this.nom);
      formdata.append("prenoms", this.prenoms);
      formdata.append("email", this.email);
      formdata.append("numero_commande", this.numeroDebonDeCommande);
      formdata.append("date_commande", this.dateDeCommande);
      formdata.append("client", this.name);
      formdata.append("nb_postes", this.nombreDePoste);
    
      this.buttonDisabled = true;
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(
        "http://10.10.0.15:8001/api/v1/organisation-patrimoine/poste-distributions/commande",
        requestOptions
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.error === false) {
            this.isLoading = false;
            this.buttonDisabled = false;
            Swal.fire({
              icon: "success",
              confirmButtonColor: "#0698d5",
              title: "DEMANDE D'ACTIVATION REUSSIE",
              text: "Votre demande sera traitée dans les plus brefs délais",
            }).then(() => {
              window.location.href = "http://localhost:8080/";
            });
          } else {
            this.isLoading === true;
            Swal.fire({
              icon: "error",
              confirmButtonColor: "#0698d5",
              title: "ACTIVATION ECHOUEE",
              text: response.message,
            });
            // Swal.fire('Incorrect...',response.data.message, 'error');
          }
        })
        .catch((error) => console.log("error", error));
    },

    

  },
};
</script>

<style scoped></style>
