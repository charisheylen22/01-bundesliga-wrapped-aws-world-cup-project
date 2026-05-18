export type WrappedStat = {
  label: string;
  value: string;
};

export type WrappedStoryPoint = {
  title: string;
  description: string;
};

export type WrappedData = {
  fanName: string;
  club: string;
  season: string;
  headline: string;
  story: string;
  personality: string;
  emotionScore: string;
  stats: WrappedStat[];
  topMoments: WrappedStoryPoint[];
  shareCaption: string;
};

export function getWrappedData(): WrappedData {
  return {
    fanName: "Lukas",
    club: "FC Bayern",
    season: "2025/26",
    headline: "Ta saison Bundesliga, racontée comme un Wrapped.",
    story:
      "Tu as vécu 34 matchs intenses, tu as vibré à chaque but et tu as partagé des moments légendaires. Voici ton bilan émotionnel et tes temps forts.",
    personality: "Le Fan Passionné — toujours prêt à célébrer les moments décisifs.",
    emotionScore: "9.3/10",
    stats: [
      { label: "Matchs suivis", value: "34" },
      { label: "Heures de football", value: "128" },
      { label: "Partages", value: "18" },
      { label: "Points d'émotion", value: "9.4/10" }
    ],
    topMoments: [
      {
        title: "Renversement du match 18",
        description: "Ta réaction a explosé quand le but de la victoire est tombé dans les arrêts de jeu."
      },
      {
        title: "Buteur du club",
        description: "Ton joueur favori a fait la différence dans les plus grands moments."
      },
      {
        title: "Meilleure journée de partage",
        description: "18 de tes amis ont vu ta story de match du week-end."
      }
    ],
    shareCaption:
      "Mon Bundesliga Wrapped 2025/26 est prêt : 34 matchs, 128 heures de foot, et un score émotionnel de 9.4/10. Et toi, quel est ton moment le plus fort ?"
  };
}
