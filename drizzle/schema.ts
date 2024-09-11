import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, decimal } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const sample = mysqlTable("sample", {
	id: int("id").autoincrement().notNull(),
	width: smallint("width", { unsigned: true }),
	duration: decimal("duration", { precision: 10, scale: 5) unsigne }),
},
(table) => {
	return {
		sampleId: primaryKey({ columns: [table.id], name: "sample_id"}),
	}
});