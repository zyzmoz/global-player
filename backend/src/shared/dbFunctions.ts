/* 

  const db = await dbConnection.getInstance()
  const collection = db.collection('players')

  const player = await collection.insertOne(data)

*/

import { ObjectId } from 'mongodb'
import DbConnection from './database'

const findOne = async <T>(collectionName: string, id: string): Promise<any> => {
  const db = await DbConnection.getInstance()
  const collection = db.collection(collectionName)

  const data = await collection.findOne({ _id: new ObjectId(id) })

  return data as T
}

const findMany = async <T>(
  collectionName: string,
  where: any = {},
  sort: any = {},
  limit: number = 1000
): Promise<T[]> => {
  const db = await DbConnection.getInstance()
  const collection = db.collection(collectionName)

  const data = await collection.find(where).sort(sort).limit(limit).toArray()

  return data as T[]
}

const insert = async <T>(collectionName: string, obj: T): Promise<T> => {
  const db = await DbConnection.getInstance()
  const collection = db.collection(collectionName)

  const { insertedId } = await collection.insertOne(obj)
  const data = await collection.findOne({ _id: new ObjectId(insertedId) })

  return { ...data, password: null } as T
}

const insertMany = async <T>(collectionName: string, obj: T[]): Promise<boolean> => {
  const db = await DbConnection.getInstance()
  const collection = db.collection(collectionName)

  const { acknowledged } = await collection.insertMany(obj)

  return acknowledged
}

const update = async <T>(collectionName: string, obj: T & { _id: string }, options: any = null): Promise<T> => {
  const db = await DbConnection.getInstance()
  const collection = db.collection(collectionName)

  const { _id, ...rest } = obj
  let data
  if (!options) {
    await collection.updateOne({ _id: new ObjectId(_id) }, { $set: rest })
    data = await collection.findOne({ _id: new ObjectId(_id) })
  } else {
    await collection.updateOne(options, { $set: rest })
    data = await collection.findOne(options)
  }

  return data as T
}

const upsert = async <T>(collectionName: string, obj: Omit<T, '_id'>): Promise<void> => {
  const db = await DbConnection.getInstance()
  const collection = db.collection(collectionName)
  await collection.updateMany({ ...obj }, { $set: { ...obj } }, { upsert: true })
}

const remove = async <T>(collectionName: string, id: string): Promise<T> => {
  const db = await DbConnection.getInstance()
  const collection = db.collection(collectionName)

  const data = await collection.deleteOne({ _id: new ObjectId(id) })

  return data as T
}

const removeAll = async <T>(collectionName: string, where: any): Promise<T> => {
  const db = await DbConnection.getInstance()
  const collection = db.collection(collectionName)

  const data = await collection.deleteMany(where)

  return data as T
}

export { findOne, findMany, insert, insertMany, update, remove, removeAll, upsert }
