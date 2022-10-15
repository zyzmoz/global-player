export interface IPlan {
    _id: string
    title: string
    description: string
    userLimit: number
    price: number
}

export const isPlan = (plan: any): plan is IPlan => {
    const schema: Record<keyof IPlan, string> = {
        _id: 'string',
        title: 'string',
        description: 'string',
        userLimit: 'number',
        price: 'number'
    }

    const missingProperties = Object.keys(schema)
        .filter((key) => plan[key] === undefined && key !== '_id')
        .map((key) => key as keyof IPlan)
        .map((key) => new Error(`Document is missing ${key} ${schema[key]}`))

        // throw the errors if you choose
        
        return missingProperties.length === 0
}