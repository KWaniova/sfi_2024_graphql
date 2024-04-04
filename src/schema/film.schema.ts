import { Field, ObjectType } from "type-graphql";
// have to add  "emitDecoratorMetadata": true, "experimentalDecorators": true, to tsconfig
@ObjectType()
class Film {
    @Field()
    title: string;
    @Field()
    director: string;
    @Field()
    producer: string;
    @Field()
    releaseDate: string;
}

export default Film;