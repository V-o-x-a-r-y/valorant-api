export interface LeaderboardDto {
    shard: string;
    actId: string;
    totalPlayers: number;
    players: PlayerDto[];
  }
  
  export interface PlayerDto {
    puuid?: string;  // Peut être omis si le joueur est anonymisé
    gameName?: string;  // Peut être omis si le joueur est anonymisé
    tagLine?: string;  // Peut être omis si le joueur est anonymisé
    leaderboardRank: number;
    rankedRating: number;
    numberOfWins: number;
  }
  