import Loadable from 'react-loadable';
import Loading from '../loading';

export default (otps) => {
    return Loadable({
        loading: Loading,
        ...otps
    });
}

