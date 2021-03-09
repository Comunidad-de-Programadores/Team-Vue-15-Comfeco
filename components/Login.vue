<template>
  <v-card class="card text-center" width="400px" height="450px">
    <v-form class="pa-8">
      <img src="../assets/logos/code-icon.svg" alt="logo comunidad" />
      <div class="switcher">
        <Nuxt-link class="n-link" to="/">Inicia Sesión</Nuxt-link> |
        <Nuxt-link class="n-link" to="/register">Registrate</Nuxt-link>
      </div>
      <v-text-field
        type="text"
        placeholder="Correo electrónico"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        :type="show ? 'text' : 'password'"
        placeholder="Contraseña"
        v-model="password"
        :rules="passwordRules"
        required
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show = !show"
      ></v-text-field>
      <small class="alert pa-0 ma-0" v-if="error">{{ error }}</small>
    </v-form>
    <v-row
      ><v-col cols="12" md="10" offset-md="1">
        <v-btn class="mb-2" color="secondary" width="100%" rounded @click="authUser"
          >Ingresar</v-btn
        ></v-col
      >
    </v-row>
    <a href="/recover">¿Olvidaste tu contraseña?</a>
  </v-card>
</template>

<script>
import firebase from 'firebase';
import '../assets/css/Login.css';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      show: false,
      emailRules: [
        (v) => !!v || 'E-mail es requerido',
        (v) => /.+@.+\..+/.test(v) || 'El email tiene un formato incorrecto',
      ],
      passwordRules: [(v) => !!v || 'La contraseña es requerida'],
    };
  },
  methods: {
    async authUser() {
      try {
        if (this.email != '' && this.password != '') {
          console.log('TEST')
          console.log(app)
          console.log(this.$fire)
          await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password);
          this.$router.push('/home');
        } else {
          if (this.email === '' && this.password === '')
            this.error = 'Debes completar todos los campos.';
          else {
            if (this.email === '') this.error = 'El correo electrónico es requerido.';
            if (this.password === '') this.error = 'La contraseña es requerida.';
          }
        }
      } catch (error) {
        console.log(error.code);
        switch (error.code) {
          case 'auth/invalid-email':
            this.error = 'El email tiene un formato incorrecto.';
            break;
          case 'auth/user-not-found':
            this.error = 'El usuario no se encuentra registrado';
            break;
          case 'auth/wrong-password':
            this.error = 'La contraseña es incorrecta';
            break;
          default:
            this.error = error;
            break;
        }
      }
    },
  },
};
</script>
