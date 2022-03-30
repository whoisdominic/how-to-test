/**
 * HTTP Client: Dominic's toolkit
 */
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });
    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );
    return true;
  };

  private handleResponse = ({ data }: AxiosResponse) => Promise.resolve(data);

  protected handleError = (error: AxiosError) => Promise.reject(error);
}
export default HttpClient;
