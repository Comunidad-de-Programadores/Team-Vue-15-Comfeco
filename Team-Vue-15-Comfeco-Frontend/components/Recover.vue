<template>
  <v-card class="card card-recover">
    <v-row>
      <v-col cols="12" sm="12" md="2" offset-lg="5">
        <img width="65" src="../assets/logos/code-icon.svg" alt="logo comunidad" />
      </v-col>
    </v-row>
    <div class="text">
      <h3>Recuperar contraseña</h3>
      <p>
        Te enviaremos un correo electrónico con un enlace privado para que recuperes tu
        contraseña.
      </p>
    </div>
    <div class="mx-4">
      <v-text-field
        dense
        v-model="email"
        :rules="emailRules"
        type="text"
        placeholder="Correo electronico"
      />
    </div>
    <v-row class="pa-0 ma-0 text-center">
      <small class="alert" v-if="error">{{ error }}</small>
    </v-row>
    <v-row class="pa-4">
      <v-col cols="12" sm="12" md="6" offset-lg="3">
        <v-btn width="95%" color="secondary" rounded @click="recoverPassword"
          >Recupera contraseña</v-btn
        ></v-col
      >
    </v-row>

    <v-row class="pa-0 ma-0 text-center">
      <v-col class="pa-0 ma-0" cols="12" md="12">
        <span class="pa-4"
          >Si ya estas registrado
          <Nuxt-link class="n-link" to="/">Inicia Sesión</Nuxt-link> ó si aún no tienes
          una cuenta <Nuxt-link class="n-link" to="/">Regístrate</Nuxt-link></span
        >
      </v-col>
    </v-row>
    <UiModalConfirm
      v-model="dialog"
      :messageConfirm="messageConfirm"
      v-on:call-function="pushRoute"
    />
  </v-card>
</template>

<script>
import '../assets/scss/Login.scss';
export default {
  data() {
    return {
      dialog: false,
      email: '',
      error: '',
      messageConfirm: '',
      emailRules: [
        (v) => !!v || 'E-mail es requerido',
        (v) => /.+@.+\..+/.test(v) || 'El email tiene un formato incorrecto',
      ],
    };
  },
  methods: {
    async recoverPassword() {
      try {
        const res = await this.$axios.$get('http://54.80.141.168/api/users');
        const user = res.users.filter((user) => user.email === this.email);
        if (user.length != 0) {
          const actionCodeSettings = {
            url: 'http://54.80.141.168/api/',
            handleCodeInApp: false,
          };
          this.$fire.auth.sendPasswordResetEmail(this.email, actionCodeSettings);
          this.messageConfirm =
            'Por favor revisa tu correo electrónico,Te hemos enviado un enlace para recuperar tu contraseña.';
          this.dialog = true;
        } else {
          this.error = 'El correo electrónico no se encuentra registrado.';
        }
      } catch (error) {
        console.log('Error-Recover', error);
      }
    },
    pushRoute() {
      this.dialog = false;
      this.email = '';
      this.$router.push('/');
    },
  },
};
</script>
