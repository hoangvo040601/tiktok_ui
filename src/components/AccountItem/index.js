import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1660160285491205~c5_300x300.webp?x-expires=1658476800&x-signature=M%2FcgzbbHmhvEzIpUfGCtHob%2BUBE%3D"
                alt="hoang"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Vo Van Hoang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>vovanhoang</span>
            </div>
        </div>
    );
}

export default AccountItem;
