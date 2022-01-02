import Image from "next/image";
import styles from "./Header.module.scss";
import Headroom from "react-headroom";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headroom_global}>
                <div className="container">
                    <Headroom
                        style={{
                            zIndex: 9999,
                        }}
                    >
                        <div className={styles.headroom}>
                            <div className={styles.wrap}>
                                <div className={styles.nav}>
                                    <div className={styles.link}>
                                        <div className={styles.img}>
                                            <Image
                                                src="/images/headroom1.svg"
                                                width={38}
                                                height={35}
                                            />
                                        </div>
                                        <div
                                            className={`${styles.item} ${styles.hidden}`}
                                        >
                                            Продовайте на ADU24
                                        </div>
                                        <div className={styles.item}>
                                            Главная
                                        </div>
                                    </div>
                                    <div className={styles.link}>
                                        <div className={styles.img}>
                                            <Image
                                                src="/images/headroom2.svg"
                                                width={35}
                                                height={35}
                                            />
                                        </div>
                                        <div
                                            className={`${styles.item} ${styles.hidden}`}
                                        >
                                            Мои сообщение
                                        </div>
                                    </div>
                                    <div className={styles.link}>
                                        <div className={styles.img}>
                                            <Image
                                                src="/images/headroom3.svg"
                                                width={39}
                                                height={35}
                                            />
                                        </div>
                                        <div
                                            className={`${styles.item} ${styles.hidden}`}
                                        >
                                            Избранные
                                        </div>
                                    </div>
                                    <div className={styles.link}>
                                        <div className={styles.img}>
                                            <Image
                                                src="/images/headroom4.svg"
                                                width={32}
                                                height={35}
                                            />
                                        </div>
                                        <div
                                            className={`${styles.item} ${styles.hidden}`}
                                        >
                                            Уведомление
                                        </div>
                                    </div>
                                    <div className={styles.link}>
                                        <div className={styles.img}>
                                            <Image
                                                src="/images/headroombg.svg"
                                                width={60}
                                                height={40}
                                            />
                                        </div>
                                        <div
                                            className={`${styles.item} ${styles.hidden}`}
                                        >
                                            KZT / г. Алматы
                                        </div>
                                        <div className={styles.arrow}>
                                            <Image
                                                src="/images/arrow_down.svg"
                                                width={12}
                                                height={6}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Headroom>
                </div>
            </div>
            <div className="container">
                <div className={styles.header_section}>
                    <div className={`${styles.header_item} ${styles.logo}`}>
                        <Image
                            src="/images/logo.svg"
                            height={30}
                            width={120}
                            alt="Logo"
                        />
                    </div>
                    <div className={`${styles.header_item} ${styles.category}`}>
                        <div className={styles.burger}>
                            <a href="#">
                                <div></div>
                                <div></div>
                                <div></div>
                            </a>
                        </div>
                        <a href="#" className={styles.link}>
                            Категории
                        </a>
                        <div className={styles.headerVector}>
                            <Image
                                src="/images/Vector.png"
                                height={8}
                                width={15}
                            />
                        </div>
                    </div>
                    <div className={`${styles.header_item} ${styles.search}`}>
                        <input type="text" placeholder="Найти" />
                        <div>
                            <a href="#" className={styles.search_btn}>
                                <Image
                                    src="/images/search.svg"
                                    height={20}
                                    width={20}
                                    alt="Найти"
                                />
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.header_item} ${styles.basket}`}>
                        <a href="#">Корзина</a>
                        <div className="count">159</div>
                    </div>
                    <div className={`${styles.header_item} ${styles.profile}`}>
                        <a href="#">Мой профиль</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
