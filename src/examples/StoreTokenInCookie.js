import axios from 'axios';
import Cookies from 'js-cookie'; //  use another library if you want

const token = Cookies.get('token');
if (token) {
	axios.defaults.headers.common['Authorization'] = token;
}
function StoreTokenInCookie() {
	return <div>StoreTokenInCookie</div>;
}

export default StoreTokenInCookie;
