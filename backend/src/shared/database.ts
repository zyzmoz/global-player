import { MongoClient } from "mongodb";

// MongoDB URL
const url = `mongodb+srv://dev:dev-chan@cluster0.gizbjqq.mongodb.net/?retryWrites=true&w=majority`
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
