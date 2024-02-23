import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        console.log(typeof process.env.API_URL);
        console.log(process.env.API_KEY);
        console.log({
            apiKey: process.env.API_KEY,
        });
        super(process.env.API_URL, {
            apiKey: process.env.API_KEY,
        });
    }
}

export default AppLoader;
