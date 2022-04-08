import axios from 'axios';

function AxiosInterceptorToken() {
	// only once
	axios.interceptors.request.use(
		(config) => {
			// Do something before request is sent
			config.headers['ts'] = new Date().getTime();
			return config;
		},
		(error) => {
			// Do something with request error
			return Promise.reject(error);
		}
	);

	return <div>AxiosInterceptorToken</div>;
}

export default AxiosInterceptorToken;

// Bad Code
// axios.get("/api", {
//     headers: {
//       ts: new Date().getTime(),
//     },
//   });
