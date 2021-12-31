import Image from "next/image";
import styles from "./Item_discount.module.scss";

const Item_discount = () => {
    return (
        <div className={styles.item_discount}>
            <div className={styles.discount}>-26%</div>
            <div className={styles.caption}>Часы</div>
            <Image src="/images/item-box-bg.png" width={190} height={100} alt="bg" />
        </div>
    );
};

export default Item_discount;
