import { Query, Resolver } from "type-graphql";
import Film from "../schema/film.schema";

@Resolver()
class FilmResolver {
    @Query(() => [Film])
    films() {
        return [
            { id: 1, title: 'The Empire Strikes Back', director: 'Irvin Kershner', producer: 'Gary Kurtz', releaseDate: '1980-05-17' },
            { id: 2, title: 'The Force Awakens', director: 'J.J. Abrams', producer: 'Kathleen Kennedy', releaseDate: '2015-12-18' },
            { id: 3, title: 'The Last Jedi', director: 'Rian Johnson', producer: 'Kathleen Kennedy', releaseDate: '2017-12-15' },
        ]
    }
}

export default FilmResolver;