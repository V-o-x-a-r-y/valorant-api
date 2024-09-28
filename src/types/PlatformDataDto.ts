export interface PlatformDataDto {
    id: string;
    name: string;
    locales: string[];
    maintenances: StatusDto[];
    incidents: StatusDto[];
  }
  
  export interface StatusDto {
    id: number;
    maintenance_status: 'scheduled' | 'in_progress' | 'complete';
    incident_severity: 'info' | 'warning' | 'critical';
    titles: ContentDto[];
    updates: UpdateDto[];
    created_at: string;
    archive_at: string;
    updated_at: string;
    platforms: ('windows' | 'macos' | 'android' | 'ios' | 'ps4' | 'xbone' | 'switch')[];
  }
  
  export interface ContentDto {
    locale: string;
    content: string;
  }
  
  export interface UpdateDto {
    id: number;
    author: string;
    publish: boolean;
    publish_locations: ('riotclient' | 'riotstatus' | 'game')[];
    translations: ContentDto[];
    created_at: string;
    updated_at: string;
  }
  