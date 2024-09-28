export interface LocalizedNamesDto {
    "ar-AE"?: string;
    "de-DE"?: string;
    "en-GB"?: string;
    "en-US"?: string;
    "es-ES"?: string;
    "es-MX"?: string;
    "fr-FR"?: string;
    "id-ID"?: string;
    "it-IT"?: string;
    "ja-JP"?: string;
    "ko-KR"?: string;
    "pl-PL"?: string;
    "pt-BR"?: string;
    "ru-RU"?: string;
    "th-TH"?: string;
    "tr-TR"?: string;
    "vi-VN"?: string;
    "zh-CN"?: string;
    "zh-TW"?: string;
  }
  
  export interface ContentItemDto {
    name: string;
    localizedNames?: LocalizedNamesDto; // Exclu si locale est fourni
    id: string;
    assetName?: string;
    assetPath?: string; // Seulement pour les maps et modes de jeu
  }
  
  export interface ActDto {
    name: string;
    localizedNames?: LocalizedNamesDto;
    id: string;
    isActive: boolean;
  }
  
  export interface ContentDto {
    version: string;
    characters: ContentItemDto[];
    maps: ContentItemDto[];
    chromas: ContentItemDto[];
    skins: ContentItemDto[];
    skinLevels: ContentItemDto[];
    equips: ContentItemDto[];
    gameModes: ContentItemDto[];
    sprays: ContentItemDto[];
    sprayLevels: ContentItemDto[];
    charms: ContentItemDto[];
    charmLevels: ContentItemDto[];
    playerCards: ContentItemDto[];
    playerTitles: ContentItemDto[];
    acts: ActDto[];
  }
  