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
              Al registrarte estas aceptando las <Nuxt-link to="/disclaimer">Politicas de datos y privacidad</Nuxt-link>
            </small>
          </v-row>
          <v-row>
            <!-- <button class="toRegister" @click="registerUser">Crear una cuenta</button> -->
            <v-btn @click="registerUser">Crear una cuenta</v-btn>
          </v-row>
        </div>
      </v-form>
    </div>
    <UiModalConfirm
      v-model="dialog"
      :messageConfirm="messageConfirm"
      v-on:call-function="pushRoute"
    />

    <v-snackbar
      v-model="showSnackbar"
      :timeout="timeout"
    >
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
      </template>
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
      emailRules: [(v) => !!v || 'El correo electrónico es requerido'],
      passwordRules: [(v) => !!v || 'La contraseña es requerida', (v) => v == this.password || 'La contraseña no coincide'],
      messageConfirm: '',
      showSnackbar: false,
      timeout: 6000,
      snackbarText: ''
    };
  },
  methods: {
    async registerUser() {
      console.log('test 0')
      console.log(this.email)
      debugger
      if (this.password === this.passwordConfirm) {
        try {
          console.log('test')
          console.log(this.email)
          console.log(this.password)
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(async (user) => {
            // Signed in
            // ...
            console.log('TEST')
            console.log('TEST1111111111111111111111')
             console.log(user)
             console.log(user.user.uid)
             

          const temp = await this.$axios.$post('http://localhost:3001/register', {
            username: this.nick,
            password: this.password,
            email: this.email,
            id_firebase: user.user.uid
          })
          console.log('TEST2')
          console.log(temp)
          // TODO CHECK IF EVERYTHING IS OK ON THE BACKEND
          this.showSnackbar = true
          this.snackbarText = "Registro creado de manera exitosa"
          })
          .catch((error) => {
            debugger
            console.log('TEST')
            console.log('TEST222222222222222222222')
            var errorCode = error.code;
            var errorMessage = error.message;
            this.showSnackbar = true
            this.snackbarText = "Error al registrar"
            // ..
          });;
          console.log('TEST1111')
          //console.log(response)
          debugger
/*           console.log('RESPONSE REGISTER')
          console.log(response) */
/*           this.$axios.$post('/user/12345', {
            name: 'new name'
          }, {
            cancelToken: source.token
          }) */
          this.messageConfirm = 'Fuiste registrado correctamente';
          this.dialog = true;
        } catch (error) {
          console.log(error);
          debugger
          this.showSnackbar = true
          this.snackbarText = "Error al registrar"
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
      console.log('pushRoute')
      debugger
      this.$refs.form.reset();
      this.$router.replace({ name: '/' });
    },
  },
};
</script>
<style scoped>
small{
  display: inline-block;
  margin-top: 20px;
}
</style>
