<template>
  <v-card class="card text-center">
    <v-form class="content">
      <img src="../assets/logos/code-icon.svg" alt="logo comunidad" />
      <div class="switcher">
        <a href="#">Inicia Sesión</a>
        |
        <a href="#">Regístrate</a>
      </div>
      <v-text-field
        type="text"
        placeholder="Correo electrónico"
        v-model="email"
      ></v-text-field>
      <v-text-field
        type="password"
        placeholder="Contraseña"
        v-model="password"
      ></v-text-field>
      <a href="/recupera">¿Olvidaste tu contraseña?</a>
    </v-form>
    <small class="alert" v-if="error">{{ error.message }}</small>
    <button @click="authUser">Ingresar</button>
    <span id="register"
      >¿No tienes cuenta?
      <Nuxt-link class="n-link" to="/register">Registrate</Nuxt-link></span
    >
  </v-card>
</template>

<script>
import firebase from 'firebase';
import 'firebase/auth';
import '../assets/css/Login.css';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async authUser() {
      try {
        const result = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: 'home' });
      } catch (error) {
        console.log(error);
        switch (error.message) {
          case 'The email address is badly formatted.':
            this.error = 'El email tiene un formato incorrecto.';
            break;
          case 'There is no user record corresponding to this identifier. The user may have been deleted.':
            this.error = 'El usuario no se encuentra registrado';
          default:
            break;
        }
        this.error = error;
      }
    },
  },
};
</script>

<style scoped>
.alert {
  color: red;
}
</style>
