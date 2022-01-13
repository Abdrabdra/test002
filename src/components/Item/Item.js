import Image from 'next/image';
import styles from  "./Item.module.scss";

const Item = ({src, width, height}) => {
    return (
        <div className={styles.item}>
            <div className={styles.item_favourite}>
                <div className={styles.btn}>
                    <Image
                        src="/images/favourite.svg"
                        width={20}
                        height={18}
                        alt="favouriteBtn"
                    />
                </div>
            </div>
            <div className={styles.item_image}>
                <Image src={`/images/item${(src)}.png`} width={width} height={height} alt="item-1" />
            </div>
            <div className={styles.item_text}>
                <div className={styles.item_title}>Xiaomi Mi 10 Pro</div>
                <div className={styles.item_price}>
                    <div className={styles.price_blue}>137 247р</div>
                    <div className={styles.price_gray}>180 000р</div>
                    <div className={styles.price_discount}>-25%</div>
                </div>
                <div className={styles.item_delivery}>Бесплатная доставка</div>
                <div className={styles.item_info}>
                    <div className={styles.count}>
                        <div className={styles.rating}>4,2</div>
                        <div className={styles.star}>
                            <Image
                                src="/images/item-star.svg"
                                width={20}
                                height={20}
                                alt="item-star"
                            />
                        </div>
                        <div className={styles.rectangle}></div>
                        <div className={styles.sold}>346 продано</div>
                    </div>
                    <div className={styles.basket}>
                        <Image
                            src="/images/item-basket.svg"
                            width={30}
                            height={30}
                            alt="item-basket"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
