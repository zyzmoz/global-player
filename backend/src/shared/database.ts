import { MongoClient } from "mongodb";

// MongoDB URL
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.gizbjqq.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url)

const dbName = 'globalPlayerDB';

// Sigleton
let db;

class DbConnection {
    static async getInstance() {
        if (db) {
            return db
        }
        await client.connect()
        db = client.db(dbName)
        return db
    }
}

export default DbConnection
