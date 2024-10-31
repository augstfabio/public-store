import React, { useEffect, useState } from 'react'
import icon from '../assets/main-icon.png'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdAddBusiness } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { BsDisplay } from 'react-icons/bs';
import { CgProfile } from "react-icons/cg";
export default function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showOptions, setShowOptions] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    const navigate = useNavigate()
    const goToControlPanel = () => {
        navigate('/control-panel')
    }
    const handleOptions = () => {
        setShowOptions(!showOptions);

    }
    return (
        <nav className={styles.NavbarContainer}>
            <NavLink
                to='/'
            >
                <img src={icon} alt="logo" />
            </NavLink>

            {windowWidth < 750 ? (<button onClick={handleOptions} className={styles.optionsBtn}><RxHamburgerMenu /></button>) : ''}

            <ul style={(windowWidth < 750 && showOptions) ? { display: 'flex' } : {}} className={windowWidth > 750 ? (`${styles.categories}`) : (`${styles.categoriesResponsive}`)}>

                <NavLink onClick={(handleOptions)}
                    to='/electronics'
                    className={({ isActive }) =>
                        isActive ? `${styles.activeLink}` : `${styles.inactiveLink}`
                    }
                ><li>Eletronicos</li>
                </NavLink>
                <NavLink
                    onClick={(handleOptions)}
                    to='/clothes'
                    className={({ isActive }) =>
                        isActive ? `${styles.activeLink}` : `${styles.inactiveLink}`
                    }
                ><li>Roupa</li>
                </NavLink>
                <NavLink
                    onClick={(handleOptions)}
                    to='/diverse'
                    className={({ isActive }) =>
                        isActive ? `${styles.activeLink}` : `${styles.inactiveLink}`
                    }>
                    <li>Variados</li>
                </NavLink>
                <NavLink
                    onClick={(handleOptions)}
                    to='/furniture'
                    className={({ isActive }) =>
                        isActive ? `${styles.activeLink}` : `${styles.inactiveLink}`
                    }

                ><li>Moveis</li>
                </NavLink>
                {windowWidth < 750 ? (
                    <>
                        <NavLink
                            onClick={(handleOptions)}
                            to='/'
                            className={({ isActive }) =>
                                isActive ? `${styles.activeLink}` : `${styles.inactiveLink}`
                            }
                        ><li>Pagina inicial</li>
                        </NavLink>
                        <NavLink
                            onClick={(handleOptions)}
                            to='/control-panel'
                            className={({ isActive }) =>
                                isActive ? `${styles.activeLink}` : `${styles.inactiveLink}`
                            }
                        ><li>Cadastrar produto</li>
                        </NavLink>
                        <NavLink
                            onClick={(handleOptions)}

                        ><li>Fechar</li>
                        </NavLink>
                    </>
                ) : (
                    ''
                )
                }
            </ul>
            {windowWidth > 750 ? (
                <div className={styles.containerBag}>
                    <button className={styles.bagIcon}><CgProfile /></button>
                    <button onClick={goToControlPanel} className={styles.SignInBtn}><MdAddBusiness /></button>
                </div>
            ) : ''}

        </nav>
    )
}
