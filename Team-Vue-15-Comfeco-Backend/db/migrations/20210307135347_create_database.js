exports.up = knex => {
  return knex.schema
    .createTable('users', t => {
      t.increments('id').primary().unsigned()
      t.string('id_firebase').unique().index()
      t.string('username').unique().index()
      t.string('password')
      t.string('email').unique().index()
      t.string('image')
      t.string('genre')
      t.string('birthdate')
      t.string('country')
      t.string('speciality')
      t.string('biography')
      t.string('facebook')
      t.string('github')
      t.string('linkedin')
      t.string('twitter')
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.timestamp('updated_at').defaultTo(knex.fn.now())
    }).createTable('badges', t => {
      t.increments('id').primary().unsigned()
      t.string('name').unique().index()
      t.string('description')
      t.string('explanation')
      t.string('image')
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.timestamp('updated_at').defaultTo(knex.fn.now())
    }).createTable('events', t => {
      t.increments('id').primary().unsigned()
      t.string('name').unique().index()
      t.string('description')
      t.string('image')
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.timestamp('updated_at').defaultTo(knex.fn.now())
    }).createTable('groups', t => {
      t.increments('id').primary().unsigned()
      t.string('name').unique().index()
      t.string('description')
      t.string('tag')
      t.string('image')
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.timestamp('updated_at').defaultTo(knex.fn.now())
    }).createTable('users_badges', t => {
      t.increments('id').primary().unsigned()
      t.integer('id_user').unsigned().references('id').inTable('users').notNull().onDelete('cascade')
      t.integer('id_badge').unsigned().references('id').inTable('badges').notNull().onDelete('cascade')
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.timestamp('updated_at').defaultTo(knex.fn.now())
    }).createTable('users_events', t => {
      t.increments('id').primary().unsigned()
      t.integer('id_user').unsigned().references('id').inTable('users').notNull().onDelete('cascade')
      t.integer('id_event').unsigned().references('id').inTable('events').notNull().onDelete('cascade')
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.timestamp('updated_at').defaultTo(knex.fn.now())
    }).createTable('users_groups', t => {
      t.increments('id').primary().unsigned()
      t.integer('id_user').unsigned().references('id').inTable('users').notNull().onDelete('cascade')
      t.integer('id_group').unsigned().references('id').inTable('groups').notNull().onDelete('cascade')
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

exports.down = knex => {
  return knex.schema
    .dropTable('users')
    .dropTable('social_networks')
    .dropTable('badges')
    .dropTable('events')
    .dropTable('groups')
    .dropTable('users_social_networks')
    .dropTable('users_badges')
    .dropTable('users_events')
    .dropTable('users_groups')
}
