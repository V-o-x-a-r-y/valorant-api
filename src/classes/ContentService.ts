import axios, { AxiosResponse } from 'axios';
import { ContentDto } from '../types/ContentDto';

export class ContentService {
  private readonly baseURL: string = process.env.API_URL!; // Remplace par l'URL de base réelle de l'API

  /**
   * Récupère les contenus depuis l'API
   */
  public async getContents(): Promise<ContentDto | null> {
    try {
      const response: AxiosResponse<ContentDto> = await axios.get(`${this.baseURL}/val/content/v1/contentsGet`);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      return null;
    }
  }

  /**
   * Gère les erreurs en fonction des codes HTTP.
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
          console.error('An unexpected error occurred: ', error.response.data);
      }
    } else {
      console.error('Error: ', error.message);
    }
  }
}
