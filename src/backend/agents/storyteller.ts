export type StoryContext = {
  fanName: string;
  club: string;
  season: string;
  keyHighlights: string[];
};

export function generateStory(context: StoryContext) {
  return `Salut ${context.fanName}, ta saison ${context.season} avec ${context.club} a été incroyable. Voici les moments forts : ${context.keyHighlights.join(", ")}.`;
}
