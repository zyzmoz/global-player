/* 

  const db = await dbConnection.getInstance()
  const collection = db.collection('players')

  const player = await collection.insertOne(data)

*/

import { ObjectId } from "mongodb"
import DbConnection from "./database"

const findOne = async <T>(collectionName: string, id: string): Promise<any> => {
    const db = await DbConnection.getInstance()
    const collection = db.collection(collectionName)
  
    const data = await collection.findOne({ _id: new ObjectId(id) })

    return data as T
}

const findMany = async <T>(collectionName: string): Promise<T[]> => {
    const db = await DbConnection.getInstance()
    const collection = db.collection(collectionName)
  
    const data = await collection.find({}).toArray()

    return data as T[]
}

const insert = async <T>(collectionName: string, obj: T): Promise<T> => {
    const db = await DbConnection.getInstance()
    const collection = db.collection(collectionName)

    const { insertId } = await collection.insertOne(obj)
    const data = await collection.findOne({ _id: new ObjectId(insertId) })

    return data as T
}

const update = async <T> (collectionName: string, obj: T & { _id: string }): Promise<T> => {
    const db = await DbConnection.getInstance()
    const collection = db.collection(collectionName)

    const { _id, ...rest } = obj

    await collection.updateOne({ _id: new ObjectId(_id) }, { $set: rest })
    const data = await collection.findOne({ _id: new ObjectId(_id) })

    return data as T
}

const remove = async <T>(collectionName: string, id: string): Promise<T> => {
    const db = await DbConnection.getInstance()
    const collection = db.collection(collectionName)

    const data = await collection.remove({ _id: new ObjectId(id) })

    return data as T
}

export {
    findOne, findMany, insert, update, remove
}