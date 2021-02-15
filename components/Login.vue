<template>
  <v-card class="card text-center" height="480px">
    <v-form class="content">
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
        type="password"
        placeholder="Contraseña"
        v-model="password"
        :rules="passwordRules"
        required
      ></v-text-field>
      <small class="alert" v-if="error">{{ error }}</small>
    </v-form>

    <button @click="authUser">Ingresar</button>
    <a href="/recupera">¿Olvidaste tu contraseña?</a>
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
      emailRules: [(v) => !!v || 'El correo electrónico es requerido'],
      passwordRules: [(v) => !!v || 'La contraseña es requerida'],
    };
  },
  methods: {
    async authUser() {
      try {
        if (this.email != '' && this.password != '') {
          await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
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
        console.log(error);
        switch (error.message) {
          case 'The email address is badly formatted.':
            this.error = 'El email tiene un formato incorrecto.';
            break;
          case 'There is no user record corresponding to this identifier. The user may have been deleted.':
            this.error = 'El usuario no se encuentra registrado';
          default:
            this.error = error;
            break;
        }
      }
    },
  },
};
</script>
