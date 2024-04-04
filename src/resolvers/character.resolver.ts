import { Query } from "type-graphql";
import Character, { GenderEnum } from "../schema/character.schema";

class CharacterResolver {
    @Query(() => [Character])
    characters() {
        return [
            {
                name: 'Luke Skywalker',
                height: '172',
                gender: GenderEnum.MALE,
            },
            {
                name: 'Leia Organa',
                height: '150',
                gender: GenderEnum.FEMALE,
            }
        ]
    }
}

export default CharacterResolver;