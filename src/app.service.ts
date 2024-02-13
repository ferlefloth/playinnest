import { Injectable } from '@nestjs/common';
import { rejects } from 'assert';
import  axios, { AxiosResponse, AxiosError } from 'axios';


@Injectable()
export class AppService {
  getGiph(api_key, q): Promise<string> {
    return new Promise((resolve,reject)=>{
      axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=%22${q}%22&limit=2`)
            .then((response: AxiosResponse) => {
                
                resolve(response.data);
            })
            .catch((error: AxiosError) => {
                reject(error);
            });
    })
  }

  getGoodBye(): string{
    return 'chau  pa'
  }

}