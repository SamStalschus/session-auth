import * as dotenv from "dotenv";

dotenv.config()

export default {
  database: {
    URL: process.env.ATLAS_URI
  }
}