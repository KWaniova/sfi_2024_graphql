import {
  Arg,
  Ctx,
  FieldResolver,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from "type-graphql";
import Character from "../schema/character.schema";
import StarWarsService from "../services/star-wars.service";

@Resolver((type) => Character)
class CharacterResolver implements ResolverInterface<Character> {
  @Query(() => [Character])
  async characters(@Ctx() context) {
    return await context.dataSources.starWarsService.getCharacters();
    // const starWarsService = new StarWarsService();
    // return starWarsService.getCharacters();
  }

  @Query(() => Character)
  async character(@Arg("id") id: number, @Ctx() context) {
    return await context.dataSources.starWarsService.getCharacter(id);
    // const starWarsService = new StarWarsService();
    // return starWarsService.getCharacter(id);
  }

  @FieldResolver()
  async films(@Root() character: Character, @Ctx() context) {
    return await context.dataSources.starWarsService.getFilmsByIds(character.filmsIds);
    // const starWarsService = new StarWarsService();
    // return starWarsService.getFilmsByIds(character.filmsIds);
  }
}

export default CharacterResolver;
