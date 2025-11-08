declare module '@apiverve/wordrhymes' {
  export interface wordrhymesOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface wordrhymesResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class wordrhymesWrapper {
    constructor(options: wordrhymesOptions);

    execute(callback: (error: any, data: wordrhymesResponse | null) => void): Promise<wordrhymesResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: wordrhymesResponse | null) => void): Promise<wordrhymesResponse>;
    execute(query?: Record<string, any>): Promise<wordrhymesResponse>;
  }
}
