import { Query } from "type-graphql";
import { GenderEnum } from "../schema/character.schema";

class Character {
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

export default Character;