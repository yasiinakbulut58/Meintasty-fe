import Agent from 'agentkeepalive';
import axios from 'axios';

const keepAliveAgent = new Agent({
  timeout: 60000, // active socket keepalive for 60 seconds
  freeSocketTimeout: 30000, // free socket keepalive for 30 seconds
});

const baseApi = axios.create({
  proxy: false,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  httpAgent: keepAliveAgent,
});

// Set default header
baseApi.defaults.headers.post['Content-Type'] = 'application/json';

// Add a request interceptor
baseApi.interceptors.request.use((config) => {
  /* const state = store.getState();
  const currentLanguage = state.language.i18LangStatus || 'fr';
  console.log(currentLanguage);
  // Dil bilgisini header'a ekle
  config.headers['Accept-Language'] = currentLanguage; */
  return config;
});

baseApi.interceptors.response.use(
  (res) => res,
  async (err) => {
    /* const status = err?.response?.status || null;
    if (status === 401) {
      console.log(status);
      /* await store.dispatch(logout());
      await store.dispatch(reset()); 
      toast.info('Oturumunuz sonlandı. Lütfen tekrar giriş yapın.');
    } */
    return Promise.reject(err);
  },
);

export { axios as baseAxios, baseApi };
