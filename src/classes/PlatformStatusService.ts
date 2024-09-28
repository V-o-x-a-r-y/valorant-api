import axios, { AxiosResponse } from 'axios';
import { PlatformDataDto } from '../types/PlatformDataDto';

export class PlatformStatusService {
  private readonly baseURL: string = process.env.API_URL!; // Remplace par l'URL réelle de l'API

  /**
   * Récupère le statut de la plateforme VALORANT.
   * @returns Un objet PlatformDataDto ou null en cas d'erreur
   */
  public async getPlatformStatus(): Promise<PlatformDataDto | null> {
    try {
      const response: AxiosResponse<PlatformDataDto> = await axios.get(
        `${this.baseURL}/val/status/v1/platform-data`
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
          console.error('Data not found: ', error.response.data);
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
