import React from 'react'
import Header from '../../component/header/Header'
import PlanCalendar from '../../component/Production/PlanCalendar'

function Plan() {
    return (
        <div>
            <Header />
            <div className="pageTemplate">
                <div className="calenderCard">
                    {/* Calendar Component */}
                    <PlanCalendar />
                </div>
            </div>
        </div>
    )
}

export default Plan
