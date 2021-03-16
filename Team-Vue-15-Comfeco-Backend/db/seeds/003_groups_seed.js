'use strict'

const { Group } = require('../../server/models')

exports.seed = knex => knex(Group.tableName).del()
  .then(() => [
    {
      id: 1,
      name: 'Equipo Javascript',
      description: 'Descripcion Equipo Javascript',
      tag: 'Javascript',
      image: '',
    },
    {
      id: 2,
      name: 'Equipo Typescript',
      description: 'Descripcion Equipo Typescript',
      tag: 'Typescript',
      image: '',
    },
    {
      id: 3,
      name: 'Equipo Java',
      description: 'Descripcion Equipo Java',
      tag: 'Java',
      image: '',
    },
    {
      id: 4,
      name: 'Equipo Ruby',
      description: 'Descripcion Equipo Ruby',
      tag: 'Ruby',
      image: '',
    },
    {
      id: 5,
      name: 'Equipo Haskell',
      description: 'Descripcion Equipo Haskell',
      tag: 'Haskell',
      image: '',
    },
    {
      id: 6,
      name: 'Equipo Go',
      description: 'Descripcion Equipo Go',
      tag: 'Go',
      image: '',
    },
    {
      id: 7,
      name: 'Equipo C',
      description: 'Descripcion Equipo C',
      tag: 'C',
      image: '',
    },
    {
      id: 8,
      name: 'Equipo C++',
      description: 'Descripcion Equipo C++',
      tag: 'C++',
      image: '',
    },
    {
      id: 9,
      name: 'Equipo C#',
      description: 'Descripcion Equipo C#',
      tag: 'C#',
      image: '',
    },
    {
      id: 10,
      name: 'Equipo Vuejs',
      description: 'Descripcion Equipo Vuejs',
      tag: 'Vuejs',
      image: '',
    },
    {
      id: 11,
      name: 'Equipo Laravel',
      description: 'Descripcion Equipo Laravel',
      tag: 'Laravel',
      image: '',
    },
    {
      id: 12,
      name: 'Equipo Angular',
      description: 'Descripcion Equipo Angular',
      tag: 'Angular',
      image: '',
    },
    {
      id: 13,
      name: 'Equipo React',
      description: 'Descripcion Equipo React',
      tag: 'React',
      image: '',
    },
    {
      id: 14,
      name: 'Equipo Lua',
      description: 'Descripcion Equipo Lua',
      tag: 'Lua',
      image: '',
    }
  ])
  .then(newGroups => Promise.all(newGroups.map(group => Group.create(group))))
  .catch(err => console.log('err: ', err))
