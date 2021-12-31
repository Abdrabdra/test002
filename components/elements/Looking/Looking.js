import Image from "next/image";
import Item from "../Item/Item";
import styles from "./Looking.module.scss";

const Search = () => {
    return (
        <div className={styles.section_search}>
            <div className={styles.search_header}>
                <div className={styles.headline}>То, что ищут все</div>
                <div className={styles.arrow}>
                    <Image src="/images/left-arrow.svg" width={10} height={20} />
                </div>
            </div>
            <div className={styles.search_wrapper}>
                <Item src="1" width={140} height={160} />
                <Item src="2" width={280} height={210} />
                <Item src="1" width={140} height={160} />
                <Item src="2" width={280} height={210} />
                <Item src="1" width={140} height={160} />
                <Item src="2" width={280} height={210} />
            </div>
        </div>
    );
};

export default Search;
