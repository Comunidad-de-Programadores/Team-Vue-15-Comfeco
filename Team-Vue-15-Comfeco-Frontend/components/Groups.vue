<template>
  <div id="Grupos">
    <h1>Mis grupos</h1>
    <v-container>
      <v-row>
        <v-col sm="12" md="3">
          <v-card class="pa-2" outlined>
            <v-toolbar color="grey">
              <v-toolbar-title>Vue - Crazy techs</v-toolbar-title>
              <v-spacer />
              <v-avatar>
                <img src="https://i.imgur.com/Xf59Mmk.png?3" />
              </v-avatar>
            </v-toolbar>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Bio426 <small>Programador</small></v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-img src="https://img.icons8.com/cotton/2x/gender-neutral-user.png" />
                </v-list-item-avatar>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Omayra <small>Programador</small></v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-img src="https://img.icons8.com/cotton/2x/gender-neutral-user.png" />
                </v-list-item-avatar>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >MeZgo0000 <small>Programador</small></v-list-item-title
                  >
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-img src="https://img.icons8.com/cotton/2x/gender-neutral-user.png" />
                </v-list-item-avatar>
              </v-list-item>
            </v-list>
            <v-card-actions>
              <v-btn color="primary">Abandonar</v-btn>
              <v-btn color="secondary">Chatear</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          ><v-row
            ><v-col cols="" md="6">
              <v-select
                label="Filtra por Tag"
                v-model="selectedGroup"
                flat
                dense
                hide-details
                @change="filterByTag()"
                :items="itemsGroups"
                prepend-inner-icon="mdi-magnify"
              ></v-select>
            </v-col>
            <v-col md="5">
              <v-text-field
                v-model="search"
                clearable
                flat
                dense
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Búsqueda"
              ></v-text-field> </v-col
          ></v-row>

          <v-row>
            <v-col md="12">
              <v-data-iterator
                :items="items"
                :items-per-page.sync="itemsPerPage"
                :page.sync="page"
                :search="search"
                hide-default-footer
              >
                <template v-slot:default="props">
                  <v-row>
                    <v-col
                      v-for="group in props.items"
                      :key="group.name"
                      cols="12"
                      sm="6"
                      md="3"
                      lg="4"
                    >
                      <v-card width="400px">
                        <v-img
                          height="150px"
                          src="https://pbs.twimg.com/media/EwjqKYpXMAUIZv-?format=jpg&name=small"
                        />
                        <v-card-title>{{ group.name }}</v-card-title>
                        <v-card-text>
                          <div class="text-center">
                            <v-chip outlined color="secondary">{{ group.tag }}</v-chip>
                          </div>
                          <p>{{ group.description }}</p>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn color="primary">Unirse</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </template>
                <template v-slot:footer>
                  <v-row class="mt-2" align="center" justify="center">
                    <span class="grey--text">Items por página</span>
                    <v-menu offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          dark
                          text
                          color="primary"
                          class="ml-2"
                          v-bind="attrs"
                          v-on="on"
                        >
                          {{ itemsPerPage }}
                          <v-icon>mdi-chevron-down</v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item
                          v-for="(number, index) in itemsPerPageArray"
                          :key="index"
                          @click="updateItemsPerPage(number)"
                        >
                          <v-list-item-title>{{ number }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>

                    <v-spacer></v-spacer>

                    <span class="mr-4 grey--text">
                      Página {{ page }} de {{ numberOfPages }}
                    </span>
                    <v-btn fab dark color="secondary" class="mr-1" @click="formerPage">
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-btn fab dark color="secondary" class="ml-1" @click="nextPage">
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-row>
                </template>
              </v-data-iterator>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Grupos',
  props: {
    groups: Array,
  },
  created() {
    this.getGroupsName();
    this.items = this.groups;
  },
  watch: {
    items: function (val) {
      return val;
    },
  },
  data() {
    return {
      itemsPerPageArray: [3, 6, 12],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      items: [],
      itemsPerPage: 6,
      selectedGroup: '',
      itemsGroups: [],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.groups.length / this.itemsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    getGroupsName() {
      this.itemsGroups = this.groups.map((e) => e.tag);
    },
    filterByTag() {
      this.items = this.groups;
      this.items = this.items.filter(
        (gruop) => gruop.tag.toLowerCase() === this.selectedGroup.toLowerCase()
      );
    },
  },
};
</script>

<style>
#Grupos {
  margin-bottom: 70px;
}
#Grupos h1 {
  margin: 20px 0;
  text-align: center;
  font-weight: 300;
}
</style>
