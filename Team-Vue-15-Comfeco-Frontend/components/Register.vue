<template>
  <v-card class="card card-register">
    <div class="content">
      <img src="../assets/logos/code-icon.svg" alt="logo comunidad" />
      <div class="switcher">
        <Nuxt-link class="n-link" to="/">Inicia Sesión</Nuxt-link> |
        <Nuxt-link class="n-link" to="/register">Regístrate</Nuxt-link>
      </div>
      <v-form ref="form">
        <div class="fields">
          <v-text-field
            dense
            type="text"
            placeholder="Nick"
            v-model="nick"
            :rules="nickRules"
            required
          />
          <v-text-field
            dense
            type="email"
            placeholder="Correo electrónico"
            v-model="email"
            :rules="emailRules"
          />
          <v-text-field
            dense
            placeholder="Contraseña"
            v-model="password"
            :rules="passwordRules"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          />
          <v-text-field
            dense
            placeholder="Confirma contraseña"
            v-model="passwordConfirm"
            :rules="passwordRules"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            @click:append="show2 = !show2"
          />
          <v-row>
            <small class="alert" v-show="error">{{ error }}</small>
          </v-row>
          <v-row>
            <small class="mt-2">
              Al registrarte estas aceptando las
              <Nuxt-link to="/disclaimer">Politicas de datos y privacidad</Nuxt-link>
            </small>
          </v-row>
          <v-row class="pa-4">
            <v-col cols="12" md="12">
              <v-btn
                width="100%"
                class="mb-4"
                color="secondary"
                rounded
                @click="registerUser"
                >Crear una cuenta</v-btn
              ></v-col
            >
          </v-row>
        </div>
      </v-form>
    </div>
    <UiModalConfirm
      v-model="dialog"
      :messageConfirm="messageConfirm"
      v-on:call-function="pushRoute"
    />
    <v-snackbar v-model="showSnackbar" :timeout="timeout" color="red">
      {{ snackbarText }}
      <template v-slot:action="{ attrs }"> </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import firebase from 'firebase';
import '../assets/scss/Login.scss';
import UiModalConfirm from '../components/UiModalConfirm';

export default {
  components: {
    UiModalConfirm,
  },
  data() {
    return {
      dialog: false,
      show1: false,
      show2: false,
      nick: '',
      email: '',
      password: '',
      passwordConfirm: '',
      error: '',
      errorColor: '',
      nickRules: [(v) => !!v || 'El nickname es requerido.'],
      emailRules: [
        (v) => !!v || 'E-mail es requerido',
        (v) => /.+@.+\..+/.test(v) || 'El email tiene un formato incorrecto',
      ],
      passwordRules: [
        (v) => !!v || 'Contraseña es requerido',
        (v) => (v && v.length >= 6) || 'Min 6 caracteres',
        (v) => v === this.password || 'Las contraseñas no coinciden',
      ],
      messageConfirm: '',
      showSnackbar: false,
      timeout: 6000,
      snackbarText: '',
    };
  },
  methods: {
    async registerUser() {
      const res = await this.$axios.$get('http://localhost:3001/users');
      const nick = res.users.filter(
        (user) => user.username.toUpperCase() === this.nick.toUpperCase()
      );
      if (nick.length != 0) {
        this.error = 'Nickname ya se encuentra registrado, prueba con otro.';
      } else {
        if (this.password === this.passwordConfirm) {
          try {
            await this.$axios.$get('http://localhost:3001/users');
            const user = await firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password);
            const { uid } = user.user;
            await this.$axios.$post('http://localhost:3001/register', {
              username: this.nick,
              password: this.password,
              email: this.email,
              id_firebase: uid,
            });
            this.messageConfirm =
              'Fuiste registrado correctamente, ahora puedes iniciar sesión.';
            this.dialog = true;
          } catch (error) {
            switch (error.message) {
              case 'Username already exists':
                this.error = 'La contraseña debe contener más de 6 caracteres.';
                break;
              case 'Password should be at least 6 characters':
                this.error = 'La contraseña debe contener más de 6 caracteres.';
                break;
              case 'The email address is already in use by another account.':
                this.error = 'El correo ya se encuentra registrado.';
                break;
              default:
                this.showSnackbar = true;
                this.snackbarText = 'Error al registrar';
                break;
            }
            this.$refs.form.reset();
          }
        } else {
          this.error = 'Las contraseñas no coinciden.';
        }
      }
    },
    pushRoute() {
      this.$refs.form.reset();
      this.$router.push('/');
    },
  },
};
</script>
