import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, mysqlEnum, decimal } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const discountTypes = mysqlTable("discount_types", {
	id: int("id").notNull(),
	type: mysqlEnum("type", ['defaultDiscount','coupon','priority']),
},
(table) => {
	return {
		discountTypesId: primaryKey({ columns: [table.id], name: "discount_types_id"}),
	}
});

export const mediaResult = mysqlTable("media_result", {
	id: int("id").autoincrement().notNull(),
	duration: decimal("duration", { precision: 10, scale: 5) unsigne }),
},
(table) => {
	return {
		mediaResultId: primaryKey({ columns: [table.id], name: "media_result_id"}),
	}
});