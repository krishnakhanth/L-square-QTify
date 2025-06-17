import React from 'react'
import styles from "./Search.module.css"
// Corrected: 'SearchIcon.svg' to 'search-icon.svg' to match the file on disk
import {ReactComponent as SearchIcon} from "../search-icon.svg"

const Search = () => {
  return (
    <div >
      <form className={styles.wrapper}  >
        <input className={styles.search} />
        <div>
            <button className={styles.searchButton} type='submit' >
              <SearchIcon/>
            </button>
        </div>
      </form>
        </div>
  )
}

export default Search