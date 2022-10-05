import React from "react";
import './Sidebar.css'
import meditation from '../../assets/meditation.svg'
import swim from '../../assets/swim.svg'
import bike from '../../assets/bike.svg'
import dumbbell from '../../assets/dumbbell.svg'


const Sidebar = () => {
    return (
        <nav className="SidebarContainer">
            <div className="SidebarItem">
                <img src={meditation} alt="meditation" />
            </div>
            <div className="SidebarItem">
                <img src={swim} alt="swim" />
            </div>
            <div className="SidebarItem">
                <img src={bike} alt="bike" />
            </div>
            <div className="SidebarItem">
                <img src={dumbbell} alt="dumbbell" />
            </div>
            <div className="SidebarItem" id="copyright">Copyright, SportSee 2020</div>
        </nav>
    )
}

export default Sidebar 