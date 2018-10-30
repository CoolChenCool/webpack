import axios from 'axios';
import { parseUrl, addPrefix } from './utils';

import interceptorsList from './interceptors';

class RestAxios {
  constructor() {
    this.Api = {};
    this.restAxios = axios.create();
    this.init();
  }

  init() {
    this.create();
  }

  create() {
    Object.keys(interceptorsList).map((key) => {
      const list = interceptorsList[key];

      list.map((item) => {
        this.restAxios.interceptors[key].use(item.success, item.error);
      });
    });

  }

  scope({ config, urlPrefix }) {
    const paths = this.paths();

    paths(config, urlPrefix);
    return this.Api;
  }

  paths() {
    return (config, urlPrefix) => {
      config.map((item) => {
        this.Api[item.name] = (options) => {
          const isPre = item.noPre ? '' : urlPrefix;
          let url = item.url;

          url = options && options.query ? parseUrl(url, options.query) : url;
          url = addPrefix(url, isPre);

          return this.restAxios(Object.assign({}, item, options, { url }));
        }
      });
    };
  }

}


export default RestAxios;
