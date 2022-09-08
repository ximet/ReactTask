import styles from './DropDownMenu.module.css';

function DropDownMenu () {
    return (
        <div className={styles.dropdownMenuContainer}>
            <label>Choose a city from this list:
                <input list="cities" name="choose-city" />
            </label>
            <datalist id="cities" >
                <option value="Atina" />
                <option value="Berlin" />
                <option value="Paris" />
                <option value="Rome" />
                <option value="Sofia" />
                <option value="Washington" />
                <option value="Vienna" />
                <option value="Stockholm" />
            </datalist>
        </div>
    )
}

export default DropDownMenu;