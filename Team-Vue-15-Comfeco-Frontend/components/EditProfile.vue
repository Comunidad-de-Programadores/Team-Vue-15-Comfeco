<template>
  <div id="EditarPerfil">
    <h2>Editar perfil</h2>
    <img v-if="image" class="profile" :src="image" />
    <img
      v-else
      class="profile"
      src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
    />

    <v-row>
      <v-col cols="12" md="2" offset-md="5">
        <v-file-input
          :rules="rules"
          v-model="file"
          label="actualiza tu avatar"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Cambia tu avatar"
          prepend-icon="mdi-camera"
        ></v-file-input>
      </v-col>
    </v-row>
    <div class="cont">
      <v-form>
        <v-container>
          <v-row>
            <v-col><v-text-field v-model="username" label="Nick"></v-text-field></v-col>
            <v-col><v-text-field v-model="email" label="Correo"></v-text-field></v-col>
          </v-row>
          <v-row>
            <v-col><v-text-field v-model="genre" label="Genero"></v-text-field></v-col>
            <v-col
              ><v-text-field v-model="speciality" label="Especialidad"></v-text-field
            ></v-col>
            <v-col>
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="birthdate"
                    label="Dia de cumpleaños"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="birthdate"
                  no-title
                  @input="menu1 = false"
                ></v-date-picker> </v-menu
            ></v-col>
            <v-col><v-text-field v-model="country" label="País"></v-text-field></v-col>
          </v-row>
          <v-row>
            <v-col
              ><v-text-field v-model="password" label="Contraseña"></v-text-field
            ></v-col>
            <v-col
              ><v-text-field
                v-model="confirmPassword"
                label="Repetir contraseña"
              ></v-text-field
            ></v-col>
          </v-row>
          <v-row>
            <v-col><v-subheader>facebook.com/</v-subheader></v-col>
            <v-col><v-text-field v-model="facebook" label="id"></v-text-field></v-col>
            <v-col><v-subheader>github.com/</v-subheader></v-col>
            <v-col><v-text-field v-model="github" label="id"></v-text-field></v-col>
          </v-row>
          <v-row>
            <v-col><v-subheader>linkedin.com/in/</v-subheader></v-col>
            <v-col><v-text-field v-model="linkedin" label="id"></v-text-field></v-col>
            <v-col><v-subheader>twitter.com/</v-subheader></v-col>
            <v-col><v-text-field v-model="twitter" label="id"></v-text-field></v-col>
          </v-row>
          <v-row>
            <v-textarea v-model="biography" label="Biografia"></v-textarea>
          </v-row>
          <v-row class="d-flex justify-end">
            <v-btn color="primary" @click="saveChanges()">Guardar cambios</v-btn>
          </v-row>
        </v-container>
      </v-form>
    </div>
    <UiModalConfirm
      v-model="dialog"
      :messageConfirm="messageConfirm"
      v-on:call-function="pushRoute"
    />
  </div>
</template>

<script>
import '~/assets/scss/EditProfile.scss';
import firebase from 'firebase';
export default {
  name: 'EditProfile',
  data() {
    return {
      id: '',
      id_firebase: '',
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      image: '',
      genre: '',
      birthdate: '',
      country: '',
      speciality: '',
      biography: '',
      facebook: '',
      github: '',
      linkedin: '',
      twitter: '',
      dialog: false,
      error: '',
      messageConfirm: '',
      avatar: '',
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      file: {},
      rules: [
        (value) =>
          !value || value.size < 2000000 || 'La imagen no debe exceder los 2 Mb!',
      ],
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  async mounted() {
    this.id_firebase =
      this.$fire.auth.currentUser?.uid || localStorage.getItem('id_firebase');
    await this.getInfoUser();
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split('-');
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },
    async uploadImage() {
      let storageRef = firebase.storage().ref(`images/${this.file.name}`);
      storageRef = await storageRef.put(this.file);
      return await storageRef.ref.getDownloadURL();
    },
    async getInfoUser() {
      const resp = await this.$axios.$get(
        'http://54.80.141.168:3001/users/info/' + this.id_firebase
      );
      this.username = resp.user.username || '';
      this.email = resp.user.email || '';
      this.genre = resp.user.genre || '';
      this.image = resp.user.image;
      this.birthdate = resp.user.birthdate;
      this.country = resp.user.country || '';
      this.speciality = resp.user.speciality || '';
      this.biography = resp.user.biography || '';
      this.facebook = resp.user.facebook || '';
      this.github = resp.user.github || '';
      this.linkedin = resp.user.linkedin || '';
      this.twitter = resp.user.twitter || '';
    },
    async saveChanges() {
      if (this.file !== null && this.image != '') {
        this.image = await this.uploadImage();
      }
      if (this.password !== '') {
        // update password
        const user = this.$fire.auth.currentUser;
        if (user.uid) {
          await user.updatePassword(this.password);
        }
      }
      if (this.email !== '') {
        // update email
        const user = this.$fire.auth.currentUser;
        if (user.uid) {
          await user.updateEmail(this.email);
        }
      }
      await this.$axios.$put('http://54.80.141.168:3001/users', {
        id_firebase: this.id_firebase,
        username: this.username !== '' ? this.username : undefined,
        password: this.password !== '' ? this.password : undefined,
        email: this.email !== '' ? this.email : undefined,
        image: this.image ? this.image : undefined,
        genre: this.genre !== '' ? this.genre : undefined,
        birthdate: this.birthdate !== '' ? this.birthdate : undefined,
        country: this.country !== '' ? this.country : undefined,
        speciality: this.speciality !== '' ? this.speciality : undefined,
        biography: this.biography !== '' ? this.biography : undefined,
        facebook: this.facebook !== '' ? this.facebook : undefined,
        github: this.github !== '' ? this.github : undefined,
        linkedin: this.linkedin !== '' ? this.linkedin : undefined,
        twitter: this.twitter !== '' ? this.twitter : undefined,
      });
      this.messageConfirm = 'Datos actualizados correctamente';
      this.dialog = true;
    },
    pushRoute() {
      this.dialog = false;
    },
  },
};
</script>

<style></style>
