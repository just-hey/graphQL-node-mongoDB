export const resolvers = {
    Query: {
        name (root, args, context, info) {
            return 'Justin'
        },
        alias(root, {heroName}, context, info) {
            console.log(context)
            return heroName
        }
    }
}