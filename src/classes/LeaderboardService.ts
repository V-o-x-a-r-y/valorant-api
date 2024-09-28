import axios, { AxiosResponse } from 'axios';
import { LeaderboardDto } from '../types/LeaderboardDto';

export class LeaderboardService {
  private readonly baseURL: string = process.env.API_URL!; // Remplace par l'URL réelle de l'API

  /**
   * Récupère le leaderboard pour un actId donné.
   * @param actId L'identifiant de l'act (trouvé via l'API val-content)
   * @param size Le nombre de joueurs à retourner (par défaut 200)
   * @param startIndex L'index de départ pour la pagination (par défaut 0)
   * @returns Un objet LeaderboardDto ou null en cas d'erreur
   */
  public async getLeaderboardByAct(
    actId: string,
    size: number = 200,
    startIndex: number = 0
  ): Promise<LeaderboardDto | null> {
    try {
      const response: AxiosResponse<LeaderboardDto> = await axios.get(
        `${this.baseURL}/val/ranked/v1/leaderboards/by-act/${actId}`,
        {
          params: {
            size,
            startIndex,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      return null;
    }
  }

  /**
   * Gère les erreurs des appels API selon les codes de retour HTTP.
   */
  private handleError(error: any): void {
    if (error.response) {
      const statusCode = error.response.status;
      switch (statusCode) {
        case 400:
          console.error('Bad request: ', error.response.data);
          break;
        case 401:
          console.error('Unauthorized: ', error.response.data);
          break;
        case 403:
          console.error('Forbidden: ', error.response.data);
          break;
        case 404:
          console.error('Leaderboard not found: ', error.response.data);
          break;
        case 429:
          console.error('Rate limit exceeded: ', error.response.data);
          break;
        case 500:
          console.error('Internal server error: ', error.response.data);
          break;
        default:
          console.error('Unexpected error: ', error.response.data);
      }
    } else {
      console.error('Error: ', error.message);
    }
  }
}
