import Link from 'next/link'
import styles from '@/style/navbar.module.css'
import { FaBook, FaShoppingCart, FaList } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Left: Dropdown (FaList) */}
        <div className={styles.left}>
          <Link href="/" className={styles.link}>
            <FaList style={{ marginRight: '0.5rem' }} />
          </Link>
        </div>

        {/* Center: Book Store (FaBook) */}
        <div className={styles.center}>
          <Link href="/" className={styles.link}>
            <FaBook style={{ marginRight: '0.5rem' }} />
            Book Store
          </Link>
        </div>

        {/* Right: Add to cart (FaShoppingCart) */}
        <div className={styles.right} style={{ textAlign: 'right' }}>
          <Link href="/" className={styles.link}>
            <FaShoppingCart style={{ marginRight: '0.5rem' }} />
          </Link>
        </div>
      </div>
    </nav>
  )
}
