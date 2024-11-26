import React from "react";
import { Box, Icon, Card, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./ProfittiStatitics.scss";
import { ReactComponent as Dato_positivo } from "../../assets/Dato_positivo.svg";

const useStyles = makeStyles(() => ({}));

const ProfittiCard = ({ status, count, amount, color }) => {
  return (
    <div className="prfittiCard">
      {/* <div className="statusText__img">
        <IconComponent />
      </div> */}
      <div className="prfittiCard__content">
        <h4>{status}</h4>
        <h3
          style={{
            color: color,
            fontWeight: amount === "350.043.55€" && "700",
          }}
        >
          €{amount}
        </h3>
        <h5>
          {" "}
          <Dato_positivo /> {count}% <span>Anno precedente</span>
        </h5>
      </div>
    </div>
  );
};

const ProfittiStatitics = ({ dataType }) => {


  return (
    <Box className="FactureSection mt-14">
      <Grid container className="FactureSection__inner" spacing={2}>
        {dataType?.map((data, index) => (
          <Grid item xl={index === 4 ? 4 : 2} md={index === 4 ? 8 : 4} xs={12}>
            <ProfittiCard
              status={data.status}
              count={data.count}
              amount={data.amount}
              color={data.color}
              // icon={data.icon}
            />
            {/* {index < profittiData.length - 1 && (
              <div className={classes.divider}></div>
            )} */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProfittiStatitics;

// import React from "react";
// import { Box } from "@mui/material";
// import Grid from '@mui/material/Grid2';// Grid v2 import
// import { makeStyles } from "@mui/styles";
// import "./ProfittiStatitics.scss";
// import { ReactComponent as Dato_positivo } from "../../assets/Dato_positivo.svg";

// const useStyles = makeStyles(() => ({
//   gridItem: {
//     flex: '1 1 0px !important', // Make sure all items have equal width
//     minWidth: 'auto !important',
//     maxWidth: 'none !important'
//   }
// }));

// const ProfittiCard = ({ status, count, amount, color}) => {
//   return (
//     <div className="statusText">
//       <div className="statusText__content">
//         <h4>{status}</h4>
//         <h3 style={{ color: color }}>€{amount}</h3>
//         <h5><Dato_positivo/> {count}% <span>Anno precedente</span></h5>
//       </div>
//     </div>
//   );
// };

// const ProfittiStatitics = () => {
//   const classes = useStyles();

//   const profittiData = [
//     {
//       status: "I Trimestre",
//       count: 8.2,
//       amount: "29.043,55",
//       color: "black",
//     },
//     {
//       status: "II Trimestre",
//       count: 8.2,
//       amount: "30.043,55",
//       color: "black",
//     },
//     {
//       status: "III Trimestre",
//       count: 8.2,
//       amount: "55.043,55",
//       color: "black",
//     },
//     {
//       status: "IV Trimestre",
//       count: 8.2,
//       amount: "150.043,55",
//       color: "black",
//     },
//     {
//       status: "Totale ricavi",
//       count: 8.2,
//       amount: "350.043,55",
//       color: "black",
//     },
//   ];

//   return (
//     <Box className="FactureSection">
//       <Grid container spacing={2} disableEqualOverflow sx={{
//         flexWrap: 'nowrap',
//         '--Grid-columns': { xs: 5 } // Ensure 5 equal columns
//       }}>
//         {profittiData.map((data, index) => (
//           <Grid xs={1} key={index} className={classes.gridItem}>
//             <ProfittiCard
//               status={data.status}
//               count={data.count}
//               amount={data.amount}
//               color={data.color}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ProfittiStatitics;
