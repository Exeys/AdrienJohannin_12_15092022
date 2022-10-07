import React, { useEffect, useState } from "react";
import './Dashboard.css'
import Activity from "../Activity/Activity.js"
import Sessions from "../Sessions/Sessions.js";
import Tracker from "../Tracker/Tracker.js";
import Score from "../Score/Score.js";
import Card from "../Card/Card.js";

import imgKcal from '../../assets/kcal.svg'
import imgProt from '../../assets/prot.svg'
import imgCarb from '../../assets/carbs.svg'
import imgFat from '../../assets/fats.svg'

import { useParams } from 'react-router-dom'

import Api from '../../service/api.js';


const Dashboard = () => {


    const { id } = useParams();

    const [user, setUser] = useState(null)
    const [userActivity, setUserActivity] = useState(null)
    const [userAvgSessions, setUserAvgSessions] = useState(null)
    const [userPerfomance, setUserPerformance] = useState(null)


    const api = new Api()
    useEffect(() => {
        api.getUserData(id).then(res => { setUser(res) });
        api.getUserActivity(id).then(res => { setUserActivity(res) });
        api.getUserAvgSessions(id).then(res => { setUserAvgSessions(res) });
        api.getUserPerformance(id).then(res => { setUserPerformance(res) })
    }, []
    )

console.log(userActivity)

    return (
        <div className="Dashboard">
            {
                user && (
                    <>
                        <div className="Hello">
                            <p className="HelloName">Bonjour <span style={{ color: "#FF0101" }}>{user.userInfos.firstName}</span></p>
                            <p className="HelloCheers">Félicitation ! Vous avez explosé vos objectifs hier <span role="img" aria-labelledby="emoji">👏</span></p>
                        </div>
                        <div className="DashboardContent">
                            <div className="left">
                                <Activity userActivity={userActivity} />
                                <div className="Badges">
                                    <div className="SessionsContainer">
                                        <Sessions />
                                    </div>
                                    <div className="TrackerContainer">
                                        <Tracker />
                                    </div>
                                    <div className="ScoreContainer">
                                        <Score />
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="Cards">
                                    <Card icon={imgKcal} content={user.keyData.calorieCount} type="Calories" unit="kCal" />
                                    <Card icon={imgProt} content={user.keyData.proteinCount} type="Proteines" unit="g" />
                                    <Card icon={imgCarb} content={user.keyData.carbohydrateCount} type="Glucides" unit="g" />
                                    <Card icon={imgFat} content={user.keyData.lipidCount} type="Lipides" unit="g" />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </div>



    )
}

export default Dashboard;