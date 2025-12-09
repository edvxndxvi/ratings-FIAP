import { Game } from "../types";


export function filterInappropriete(games: Game[]){
  return games.filter(game => {
    const isExplicit = game.tags.some(tag  =>{
      return tag.name.includes("Anime") || tag.name.includes("NSFW") || tag.name.includes("hentai") || tag.name.includes("porn")
    })
    return !isExplicit;
  })
}