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
            type="email"
            placeholder="Correo electrónico"
            v-model="email"
            :rules="emailRules"
            required
          />
          <v-text-field
            type="text"
            placeholder="Contraseña"
            v-model="password"
            :rules="passwordRules"
          />
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
              Al registrarte estas aceptando las
              <Nuxt-link to="/disclaimer">Politicas de datos y privacidad</Nuxt-link>
            </small>
          </v-row>
          <v-row>
            <v-btn color="secondary" @click="registerUser">Crear una cuenta</v-btn>
          </v-row>
        </div>
      </v-form>
    </div>
    <UiModalConfirm
      v-model="dialog"
      :messageConfirm="messageConfirm"
      v-on:call-function="pushRoute"
    />

    <v-snackbar v-model="showSnackbar" :timeout="timeout">
      {{ snackbarText }}
      <template v-slot:action="{ attrs }"> </template>
    </v-snackbar>
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
      emailRules: [
        (v) => !!v || 'E-mail es requerido',
        (v) => /.+@.+\..+/.test(v) || 'El email tiene un formato incorrecto',
      ],
      passwordRules: [
        (v) => !!v || 'Contraseña es requerido',
        (v) => (v && v.length >= 6) || 'Min 6 caracteres',
        (v) => v == this.password || 'La contraseña no coincide',
      ],
      messageConfirm: '',
      showSnackbar: false,
      timeout: 6000,
      snackbarText: '',
    };
  },
  methods: {
    async registerUser() {
      if (this.password === this.passwordConfirm) {
        try {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(async (user) => {
              // Signed in
              // ...

              await this.$axios.$post('http://localhost:3001/register', {
                username: this.nick,
                password: this.password,
                email: this.email,
                id_firebase: user.user.uid,
              });
              // TODO CHECK IF EVERYTHING IS OK ON THE BACKEND
              this.showSnackbar = true;
              this.snackbarText = 'Registro creado de manera exitosa';
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              this.showSnackbar = true;
              this.snackbarText = 'Error al registrar';
              // ..
            });
          this.messageConfirm = 'Fuiste registrado correctamente';
          this.dialog = true;
        } catch (error) {
          this.showSnackbar = true;
          this.snackbarText = 'Error al registrar';
          switch (error.message) {
            case 'Password should be at least 6 characters':
              this.error = 'La contraseña debe contener más de 6 caracteres.';
              break;
            case 'The email address is already in use by another account.':
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
      this.$router.push('/');
    },
  },
};
</script>
<style scoped>
small {
  display: inline-block;
  margin-top: 20px;
}
</style>
