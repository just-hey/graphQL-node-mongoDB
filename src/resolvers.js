export const resolvers = {
    Query: {
        hero (root, args, context, info) {
            return 'Toshinori Yagi'
        },
        alias(root, {heroName}, context, info) {
            console.log(context)
            return heroName
        }
    }
}