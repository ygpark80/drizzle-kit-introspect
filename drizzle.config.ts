import { defineConfig } from "drizzle-kit"

export default defineConfig({
	out: "./drizzle",
	dialect: "mysql",
	dbCredentials: {
		url: "mysql://root:rootpassword@localhost:3306/mydb"
	}
})
