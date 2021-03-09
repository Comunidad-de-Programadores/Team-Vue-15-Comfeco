'use strict'

const { SocialNetwork } = require('../../server/models')

exports.seed = knex => knex(SocialNetwork.tableName).del()
  .then(() => [
    {
      name: 'facebook',
      base_url: 'facebook.com/',
      image: '',
    },
    {
      name: 'github',
      base_url: 'github.com/',
      image: '',
    },
    {
      name: 'linkedin',
      base_url: 'linkedin.com/in/',
      image: '',
    },
    {
      name: 'twitter',
      base_url: 'twitter.com/',
      image: '',
    },
  ])
  .then(newSocialNetworks => Promise.all(newSocialNetworks.map(socialNetwork => SocialNetwork.create(socialNetwork))))
  .catch(err => console.log('err: ', err))
