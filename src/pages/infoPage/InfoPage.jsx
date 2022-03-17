import React from 'react';
import classes from './infoPage.scss';
import { useState } from 'react';

const initialState = {
    aboutUs: true,
    contacts: false,
    history: true
}

function InfoPage() {
    const [isInformationClose, setIsInformationClose] = useState(initialState);

    function handleClick(event) {
        const sectionName = event.target.dataset.expandInfo;

        setIsInformationClose(prev => {
            return {
                ...prev,
                [sectionName]: !prev[sectionName]
            }
        });
    }

    return (
        <div className={classes.infoPage}>
            <section className={`${classes.infoPage_item} ${classes.aboutUs}`}>
                <header className={classes.infoPage_item__header}>
                    <h2 className={classes.title}>About Us</h2>
                    <button className={isInformationClose.aboutUs ? classes.buttonOpen : classes.buttonClose} data-expand-info='aboutUs' onClick={handleClick}></button>
                </header>
                {
                    isInformationClose.aboutUs 
                    || 
                    <main className={classes.infoPage_item__main}>
                        <p>
                            <span>SunToday:</span> The number 1 weather site in Belarus is a news service that provides everyone with information about expected
                            weather conditions in Belarus and the entire globe.
                        </p>
                        <p>
                            The main types of service are weather reports for cities.
                        </p>
                    </main>
                }
            </section>
            <div>
            <div className={`${classes.infoPage_item} ${classes.contacts}`}>
                <header className={classes.infoPage_item__header}>
                    <h2 className={classes.title}>Contacts</h2>
                    <button className={isInformationClose.contacts ? classes.buttonOpen : classes.buttonClose} data-expand-info='contacts' onClick={handleClick}></button>
                </header>
                {
                    isInformationClose.contacts 
                    ||
                    <main className={classes.infoPage_item__main}>
                        <p>
                            <span>For cooperation, please contact <br/> 
                            by e-mail:</span> <a href="mailto:info@sunToday.by"> info@sunToday.by</a>
                        </p>
                        <p>
                            <span>For advertising, please contact <br/>
                            by phone:</span> 375 (17) 366-66-61, <br/>
                            <span>by e-mail:</span> <a href="mailto:info@adversting.by"> info@adversting.by</a>
                        </p>
                    </main>
                }
            </div>
            <div className={`${classes.infoPage_item} ${classes.history}`}>
                <header className={classes.infoPage_item__header}>
                    <h2 className={classes.title}>History</h2>
                    <button className={isInformationClose.history ? classes.buttonOpen : classes.buttonClose} data-expand-info='history' onClick={handleClick}></button>
                </header>
                {
                    isInformationClose.history
                    ||
                    <main className={classes.infoPage_item__main}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                            amet odio ratione doloremque voluptatibus architecto eius labore expedita numquam
                            nulla iure accusamus ducimus repellendus. Iste enim deleniti ratione magni voluptates!
                        </p>
                    </main>
                }
            </div>
            </div>
        </div>
  );
}

export default InfoPage;
