import Image from "next/image";
import Item_discount from "../ItemDiscount/Item_discount";
import styles from "./Boxes.module.scss";

const Boxes = () => {
    return (
        <div className={styles.section_boxes}>
            <div className={styles.box_title}>Предложения</div>
            <div className={styles.box_wrapper}>
                <div className={styles.box_item}>
                    <div className={styles.headline}>Черная пятница</div>
                    <div className={styles.text}>
                        Смартфоны
                        <br /> и аксессуары
                    </div>
                    <div className={styles.text}>
                        Скидки до 60%
                        <br /> <span>Уже сейчас</span>
                    </div>
                    <div className={styles.image}>
                        <Image
                            src="/images/box-bg.png"
                            alt="bg-image"
                            width={554}
                            height={383}
                        />
                    </div>
                </div>

                <div className={styles.box_item}>
                    <div className={styles.headline}>
                        <div>Скидки</div>
                        <div className={styles.arrow}>
                            <a href="#">
                                <Image
                                    src="/images/left-arrow.svg"
                                    width={10}
                                    height={20}
                                    alt="left-arrow"
                                />
                            </a>
                        </div>
                    </div>
                    <div className={styles.item_box}>
                        <div className={styles.box_title}>
                            <div>Скидки по категориям до 30%</div>
                            <div className={styles.arrow}>
                                <a href="#">
                                    <Image
                                        src="/images/left-arrow.svg"
                                        width={9}
                                        height={18}
                                        alt="left-arrow"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className={styles.item_wrapper}>
                            <Item_discount />
                            <Item_discount />
                            <Item_discount />
                        </div>
                    </div>
                    <div className={styles.item_box}>
                        <div className={styles.box_title}>
                            <div>Черная пятница</div>
                            <div className={styles.arrow}>
                                <a href="#">
                                    <Image
                                        src="/images/left-arrow.svg"
                                        width={9}
                                        height={18}
                                        alt="left-arrow"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className={styles.item_wrapper}>
                            <Item_discount />
                            <Item_discount />
                            <Item_discount />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Boxes;
