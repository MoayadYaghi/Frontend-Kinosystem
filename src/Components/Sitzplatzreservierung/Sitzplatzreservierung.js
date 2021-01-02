import React, { Component, useEffect, useState } from 'react';

const SitzenPlan = (props) => {

    const [sitze, setSitze] = useState([]);

    function sitzenPlanLiefern() {
        let reihen = [];
        let uniqueRows = reihen.map(s => s.row).filter((row, i, array) => array.indexOf(row) === i);
        for (const reihe of reihen) {
            let tempRow = seats.filter(s => s.row === row);
            seatsByRow.push(tempRow);
        }
        return ()
    }

}

export default SitzenPlan;