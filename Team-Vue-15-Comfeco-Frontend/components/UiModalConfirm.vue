<template>
  <v-dialog v-model="dialogConfirm" width="500px">
    <v-card class="pa-4">
      <v-row class="d-flex justify-center ma-2">
        <img src="../assets/logos/code-icon.svg" width="50" alt="logo comunidad"
      /></v-row>
      <v-divider></v-divider>
      <v-card-text class="pa-4 text-center">
        {{ message }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="
            dialogConfirm = false;
            callFunctionConfirm();
          "
          >OK</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    value: Boolean,
    messageConfirm: {
      type: String,
    },
  },
  data() {
    return {};
  },
  computed: {
    dialogConfirm: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
    message() {
      return this.$props.messageConfirm;
    },
  },
  methods: {
    callFunctionConfirm() {
      this.$emit('call-function');
    },
  },
};
</script>

<style></style>
