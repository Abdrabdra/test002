import Item from "../Item/Item";
import styles from "./Recommend.module.scss";

const Looking = () => {
    return (
        <div className={styles.section_recommend}>
            <div className={styles.header}>
                <div className={styles.header_headline}>Рекомендуем вам</div>
                <div className={styles.header_sort}>
                    <div className={`${styles.btn} selected`}>Распродажа</div>
                    <div className={styles.btn}>Популярное</div>
                    <div className={styles.btn}>Новые товары</div>
                    <div className={styles.btn}>Скидки</div>
                    <div className={styles.btn}>Бестселлеры</div>
                    <div className={styles.btn}>Популярное</div>
                </div>
            </div>
            <div className={styles.list}>
                <div className={styles.next_list}>
                    <Item src="1" width={140} height={160} />
                    <Item src="2" width={280} height={210} />
                    <Item src="1" width={140} height={160} />
                    <Item src="2" width={280} height={210} />
                    <Item src="1" width={140} height={160} />
                    <Item src="2" width={280} height={210} />
                </div>
                <div className={styles.next_list}>
                    <Item src="1" width={140} height={160} />
                    <Item src="2" width={280} height={210} />
                    <Item src="1" width={140} height={160} />
                    <Item src="2" width={280} height={210} />
                    <Item src="1" width={140} height={160} />
                    <Item src="2" width={280} height={210} />
                </div>
                <div className={styles.next_list}>
                    <Item src="1" width={140} height={160} />
                    <Item src="2" width={280} height={210} />
                    <Item src="1" width={140} height={160} />
                    <Item src="2" width={280} height={210} />
                    <Item src="1" width={140} height={160} />
                    <Item src="2" width={280} height={210} />
                </div>
            </div>
        </div>
    );
};

export default Looking;
