import Button from '../../../components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItems({ data, onClick}) {
    const classes = cx('menu-item',{
        setparate:data.setparate})
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
    }

export default MenuItems;
