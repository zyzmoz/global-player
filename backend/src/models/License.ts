export interface ILicense {
    _id: string
    ownerId: string
    userLimit: number
    price: number
    planId: string
  }

  export const isLicense = (license: any): license is ILicense => {
    const schema: Record<keyof ILicense, string> = {
        _id: "string",
        ownerId: "string",
        userLimit: "number",
        price: "number",
        planId: "string"
    }

    const missingProperties = Object.keys(schema)
    .filter((key) => license[key] === undefined && key !== '_id')
    .map((key) => key as keyof ILicense)
    .map((key) => new Error(`Document is missing ${key} ${schema[key]}`))

    return missingProperties.length === 0
  }
