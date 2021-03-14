<template>
  <div id="EditarPerfil">
    <h2>Editar perfil</h2>
    <button class="to-perfil" @click="$emit('toperfil')">Retroceder</button>
    <img src="~/assets/logos/vue-icon.svg" />
    <div class="cont">
      <v-form>  
        <v-container>
          <v-row>
            <v-col><v-text-field v-model="username" label="Nick"></v-text-field></v-col>
            <v-col><v-text-field v-model="email" label="Correo"></v-text-field></v-col>
          </v-row>
          <v-row>
            <v-col><v-text-field v-model="genre" label="Genero"></v-text-field></v-col>
            <v-col><v-text-field v-model="birthdate" label="Fecha de Nacimiento"></v-text-field></v-col>
            <v-col><v-text-field v-model="country" label="País"></v-text-field></v-col>
          </v-row>
          <v-row>
            <v-col><v-text-field v-model="password" label="Contraseña"></v-text-field></v-col>
            <v-col><v-text-field v-model="confirmPassword" label="Repetir contraseña"></v-text-field></v-col>
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
          <v-row>
            <v-btn color="primary" @click="saveChanges()">Guardar cambios</v-btn>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import "~/assets/css/EditarPerfil.css";

export default {
  name: "EditarPerfil",
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
      twitter: ''
    };
  },

  async mounted() {
    console.log('mounted editarperfil')
    const currentUser = this.$fire.auth.currentUser || localStorage.getItem('id_firebase');
    console.log(currentUser)
    this.id_firebase = this.$fire.auth.currentUser?.uid || localStorage.getItem('id_firebase');
    console.log('this.firebase_id')
    console.log(this.id_firebase)
    // get user info and set
    const result = await this.$axios.$get(`http://localhost:3001/users/info/`+this.id_firebase);
    console.log(result);
    const user = result.user
    this.username = user.username? user.username : '',
    this.email = user.email ? user.email : '',
    this.image = user.image ? user.password : '',
    this.genre = user.genre ? user.genre : '',
    this.birthdate = user.birthdate ? user.birthdate : '',
    this.country = user.country ? user.country : '',
    this.speciality = user.speciality ? user.speciality : '',
    this.biography = user.biography ? user.biography : '',
    this.facebook = user.facebook ? user.facebook : '',
    this.github = user.github ? user.github : '',
    this.linkedin = user.linkedin ? user.linkedin : '',
    this.twitter = user.twitter ? user.twitter : ''
  },

  methods: {
    async saveChanges() {
      await this.$axios.$put('http://localhost:3001/users', {
        id_firebase: this.id_firebase,
        username: this.username !== ''? this.username : undefined,
        password: this.password !== '' ? this.password : undefined,
        email: this.email !== '' ? this.email : undefined,
        image: this.image !== '' ? this.password : undefined,
        genre: this.genre !== '' ? this.genre : undefined,
        birthdate: this.birthdate !== '' ? this.birthdate : undefined,
        country: this.country !== '' ? this.country : undefined,
        speciality: this.speciality !== '' ? this.speciality : undefined,
        biography: this.biography !== '' ? this.biography : undefined,
        facebook: this.facebook !== '' ? this.facebook : undefined,
        github: this.github !== '' ? this.github : undefined,
        linkedin: this.linkedin !== '' ? this.linkedin : undefined,
        twitter: this.twitter !== '' ? this.twitter : undefined
      })
    }
  }
};
</script>

<style>
</style>