exports.up = function (knex, Promise) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNull();
    table.string("email").unique();
    table.string("userName").unique().notNull();
    table.string("password").notNull();
    table.string("type").defaultTo("vendedor");
    table.timestamp("deletedAt");
    table.timestamp("updatedAt");
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("users");
};
