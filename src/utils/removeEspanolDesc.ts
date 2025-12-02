export function removeEspanol(description: string){
  if(description.includes("Español")){
    const espanolIndex = description.indexOf("Español");
    const gameDescriptionWithoutEspanol = description.slice(0, espanolIndex);
    return gameDescriptionWithoutEspanol
  }
}