<template>
  <v-card class="card" height="550">
    <div class="content">
      <img src="../assets/logos/code-icon.svg" alt="logo comunidad" />
      <div class="switcher">
        <Nuxt-link class="n-link" to="/">Inicia Sesión</Nuxt-link> |
        <Nuxt-link class="n-link" to="/register">Registrate</Nuxt-link>
      </div>
      <v-form ref="form">
        <div class="fields">
          <v-text-field
            type="text"
            placeholder="Nick"
            v-model="nick"
            :rules="nickRules"
            required
          />
          <v-text-field
            type="text"
            placeholder="Correo electrónico"
            v-model="email"
            :rules="emailRules"
            required
          />
          <v-text-field type="text" placeholder="Contraseña" v-model="password" />
          <v-text-field
            type="text"
            placeholder="Cofirma contraseña"
            v-model="passwordConfirm"
            :rules="passwordRules"
            required
          />
          <v-row>
            <small class="alert" v-if="error">{{ error }}</small>
          </v-row>
          <v-row>
            <small>
              Al registrarte estas aceptando las <b>Politicas de datos y privacidad</b>
            </small>
          </v-row>
          <v-row>
            <button class="toRegister" @click="registerUser">Crear una cuenta</button>
          </v-row>
        </div>
      </v-form>
    </div>
    <UiModalConfirm
      v-model="dialog"
      :messageConfirm="messageConfirm"
      v-on:call-function="pushRoute"
    />
  </v-card>
</template>

<script>
import firebase from 'firebase';
import '../assets/css/Login.css';
import UiModalConfirm from '../components/UiModalConfirm';

export default {
  components: {
    UiModalConfirm,
  },
  data() {
    return {
      dialog: false,
      nick: '',
      email: '',
      password: '',
      passwordConfirm: '',
      error: '',
      nickRules: [(v) => !!v || 'El nickname es requerido.'],
      emailRules: [(v) => !!v || 'El correo electrónico es requerido'],
      passwordRules: [(v) => !!v || 'La contraseña es requerida'],
      messageConfirm: '',
    };
  },
  methods: {
    async registerUser() {
      if (this.password === this.passwordConfirm) {
        try {
          await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
          this.messageConfirm = 'Fuiste registrado correctamente';
          this.dialog = true;
        } catch (error) {
          console.log(error);
          switch (error.message) {
            case 'Password should be at least 6 characters':
              console.log('AQUI');
              this.error = 'La contraseña debe contener más de 6 caracteres.';
              break;
            case 'The email address is already in use by another account.':
              console.log('AQUI');
              this.error = 'El correo ya se encuentra registrado.';
              break;
            default:
              this.error = 'Error';
              break;
          }
          this.$refs.form.reset();
        }
      } else {
        this.error = 'Las contraseñas no coinciden.';
      }
    },
    pushRoute() {
      this.$refs.form.reset();
      this.$router.replace({ name: '/' });
    },
  },
};
</script>
<style></style>
