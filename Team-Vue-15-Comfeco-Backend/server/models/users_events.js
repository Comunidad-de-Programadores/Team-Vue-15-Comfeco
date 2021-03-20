'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'UserEvents'
const tableName = 'users_events'

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = [
  "id",
  "id_user",
  "id_event",
  "updated_at",
  "created_at"
];

module.exports = knex => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps
  })

  const createEventUser = props => guts.create(props);
  const findAllEventUser = idUser => {
    const matchErrorMsg = "Username or password do not match";
    return knex
      .select()
      .from(tableName)
      .where({ id_user: idUser })
      .timeout(guts.timeout)
      .then(event => {
        if (!event) throw matchErrorMsg;
        return event;
      });
  };
  return {
    ...guts,
    createEventUser,
    findAllEventUser
  }
}
